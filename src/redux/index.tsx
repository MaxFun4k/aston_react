import { configureStore } from "@reduxjs/toolkit";

import { tracksApi } from "../api/tracksApi";

import user from "./slices/userSlice";
import player from "./slices/playerSlice";

const store = configureStore({
	reducer: {
		user,
		player,
		[tracksApi.reducerPath]: tracksApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tracksApi.middleware)
});

export default store;