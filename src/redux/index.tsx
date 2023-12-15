import { configureStore } from "@reduxjs/toolkit";

import { tracksApi } from "../api/tracksApi";

import player from "./slices/playerSlice";

const store = configureStore({
	reducer: {
		player,
		[tracksApi.reducerPath]: tracksApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tracksApi.middleware)
});

export default store;