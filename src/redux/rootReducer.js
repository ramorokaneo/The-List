import { combineReducers } from 'redux';
import authReducer from '../Slices/authSlice';
// import userReducer  from '../Slices/userSlice';
import listReducer from '../Slices/listSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
  list: listReducer,
});

export default rootReducer;