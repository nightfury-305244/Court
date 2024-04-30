import { combineReducers, Reducer } from '@reduxjs/toolkit';
import user from '../pages/profile/userSlice';
import auth from './authSlice'

export type RootState = ReturnType<typeof createReducer>;

const createReducer = (asyncReducers?: {[key: string]: Reducer}): Reducer => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    user,
    ...asyncReducers,
  });

  return combinedReducer(state, action);
};

export default createReducer;
