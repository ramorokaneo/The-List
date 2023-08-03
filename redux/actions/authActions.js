import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
  try {
    await axios.post('http://your-server-url/api/auth/register', userData);
    // Handle successful registration (e.g., show success message)
  } catch (error) {
    // Handle registration error (e.g., show error message)
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://your-server-url/api/auth/login', userData);
    const token = response.data.token;

    // Dispatch the action to store the token in Redux state
    dispatch({ type: 'LOGIN', payload: token });
  } catch (error) {
    // Handle login error (e.g., show error message)
  }
};