import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {KeyValueModel, TokenData, UserData, UserProfile} from '../../models';
import Api from '../../services/api';

export interface LoginSuccessPayload {
  tokenData: TokenData;
  userData: UserData;
  userProfile: UserProfile;
}

export interface LoginPayload {
  email: string;
  password: string;
  callback: (error: KeyValueModel<string>) => void;
}

export type User = {
  name: string;
};

export interface InitialState {
  userData: UserData | null;
  access_token: string | null;
  loading: boolean;
  userProfile: UserProfile | null;
}

const initialState: InitialState = {
  userData: null,
  userProfile: null,
  loading: false,
  access_token: null,
};

export const login = createAsyncThunk<LoginSuccessPayload, LoginPayload>(
  'user/login',
  async (payload, {rejectWithValue}) => {
    const {email, password, callback} = payload;

    try {
      const response = await Api.post(`auth/login`, {email, password});
      return response.data;
    } catch (e: any) {
      if (e.response.status === 400) {
        if (callback) {
          callback(e.response.data.errors);
        }
      }
      return rejectWithValue(e);
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      const response = await Api.get(`auth/logout`);
      dispatch(logoutSuccess());
      return response;
    } catch (e: any) {
      console.log('error message logout', e);
      return rejectWithValue(e);
    }
  },
);

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutSuccess: state => {
      state.access_token = null;
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.access_token = payload.tokenData.access_token;
        state.loading = false;
      })
      .addCase(login.rejected, (state, e: any) => {
        state.loading = false;
        console.log('error message', e.response);
      })
      .addCase(logout.rejected, (state, e: any) => {
        state.loading = false;
        console.log('error message logout', e.response);
      });
  },
});

const {logoutSuccess} = user.actions;
export {logoutSuccess};

export default user.reducer;
