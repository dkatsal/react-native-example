import {AnyAction, combineReducers, Reducer} from '@reduxjs/toolkit';

import user from './user/userSlice';
import manageUsers from './manageUsers/manageUsersSlice';

export const combinedReducers = combineReducers({
  user,
  manageUsers,
});

export type RootState = ReturnType<typeof combinedReducers>;

export const rootReducer: Reducer = (
  state: RootState,
  action: AnyAction,
): RootState => {
  return combinedReducers(state, action);
};
