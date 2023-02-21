import { configureStore } from '@reduxjs/toolkit';
import weatherDataReducer from './weatherData';

export default configureStore({
	reducer: {
		weatherData: weatherDataReducer,
	},
});
