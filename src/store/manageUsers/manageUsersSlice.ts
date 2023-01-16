import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Api from '../../services/api';
import {
  DeletePayload,
  ManageUsersPayload,
  UserAddUpdatePayload,
  UserByIdPayload,
  UsersList,
} from '../../models/manageUsers/manageUsers.model';

export interface InitialState {
  usersList: UsersList | null;
  loading: boolean;
}

const initialState: InitialState = {
  usersList: null,
  loading: false,
};

export const getUsersList = createAsyncThunk<UsersList, ManageUsersPayload>(
  'manageUsers/getUsersList',
  async (payload, {rejectWithValue}) => {
    const {data, page} = payload;

    try {
      const response = await Api.post(`manager/list?page=${page}`, data);
      return response.data.resource;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  },
);

export const getUserById = createAsyncThunk<{}, UserByIdPayload>(
  'manageUsers/getUserById',
  async (payload, {rejectWithValue}) => {
    const {id, callback} = payload;

    try {
      const response = await Api.post(`manager/get`, {id});
      return callback(response.data.resource);
    } catch (e: any) {
      return rejectWithValue(e);
    }
  },
);

export const deleteUserById = createAsyncThunk<{}, DeletePayload>(
  'manageUsers/deleteUserById',
  async (payload, {rejectWithValue}) => {
    const {ids, callback} = payload;

    try {
      const response = await Api.delete(`manager/delete-staff`, {ids});
      if (response) {
        callback();
      }
    } catch (e: any) {
      return rejectWithValue(e);
    }
  },
);

export const updateUser = createAsyncThunk<{}, UserAddUpdatePayload>(
  'manageUsers/updateUser',
  async (payload, {rejectWithValue, dispatch}) => {
    const {data, callback} = payload;

    try {
      const response = await Api.put(`manager/update-staff`, undefined, data);

      if (response && callback) {
        callback();
      }
    } catch (e: any) {
      return rejectWithValue(e);
    }
  },
);

const manageUsers = createSlice({
  name: 'manageUsers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      // getUserList
      .addCase(getUsersList.pending, state => {
        state.loading = true;
      })
      .addCase(getUsersList.fulfilled, (state, {payload}) => {
        state.usersList = payload;
        state.loading = false;
      })
      .addCase(getUsersList.rejected, (state, e: any) => {
        console.log('error message', e.response);
        state.loading = false;
      })
      //
      .addCase(getUserById.rejected, (state, e: any) => {
        console.log('error message', e.response);
      })
      .addCase(deleteUserById.rejected, (state, e: any) => {
        console.log('error message', e.response);
      })
      .addCase(updateUser.rejected, (state, e: any) => {
        console.log('error message', e.response);
      });
  },
});

export default manageUsers.reducer;
