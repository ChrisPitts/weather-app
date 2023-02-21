import { createSlice } from '@reduxjs/toolkit';

export const weatherDataSlice = createSlice({
	name: 'weatherData',
	initialState: {
		current: {
			clouds: 'Loading...',
		},
	},
	reducers: {
		setCurrent: (state, current) => {
			state.current = current;
		},
	},
});

export const { setCurrent } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
