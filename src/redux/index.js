import { configureStore } from "@reduxjs/toolkit";

import { tracksApi } from "../api/tracksApi";
import { favoriteApi } from "../api/favoriteApi";

import user from "./slices/userSlice";
import player from "./slices/playerSlice";
import search from "./slices/searchSlice";


const stringMiddleware = () => (next) => (action) => {
	if (typeof action === "string") {
		return next({
			type: action
		});
	}
	return next(action);
};

const store = configureStore({
	reducer: {
		user,
		player,
		search,
		[tracksApi.reducerPath]: tracksApi.reducer,
		[favoriteApi.reducerPath]: favoriteApi.reducer,
	},
	middleware: getDefaultMiddleware => 
		getDefaultMiddleware()
			.concat(stringMiddleware, tracksApi.middleware)
			.concat(stringMiddleware, favoriteApi.middleware)
});

export default store;