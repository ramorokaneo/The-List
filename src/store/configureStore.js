
import { configureStore } from '@reduxjs/toolkit';
import landingReducer from '../../redux/reducers/LandingReducer';

const store = configureStore({
  reducer: {
    landing: landingReducer,
  },
});

export default store;
