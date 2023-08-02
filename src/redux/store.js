import { createStore, combineReducers } from 'redux';
import locationReducer from './reducer/locationReducer'; // Assuming 'reducers' folder has an 'index.js' file that combines all reducers.

const rootReducer = combineReducers({
  // Add other reducers here if you have more than one reducer.
  location: locationReducer,
});

const store = createStore(rootReducer);

export default store;
