import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
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

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = credential => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('/users/signup', credential);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};
