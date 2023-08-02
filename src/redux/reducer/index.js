// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  locationPermission: locationReducer,
});

export default rootReducer;
