import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerRequest,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  // [registerSuccess]: (_, {payload}) => payload.token,
});

const error = createReducer(null, {});

export default combineReducers({
  user,
  token,
  error,
});
