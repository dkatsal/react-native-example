import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import manageUsersSlice from './manageUsers/manageUsersSlice';
import {globals} from './globals';

const rootReducer = combineReducers({
  user: userSlice,
  manageUsers: manageUsersSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

globals.store = store;

export default store;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
