// src/redux/reducers/locationReducer.js

const initialState = false; // Initial state for location permission

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCATION_PERMISSION':
      return action.payload;
    default:
      return state;
  }
};

export default locationReducer;
