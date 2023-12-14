import { configureStore } from "@reduxjs/toolkit";

import { tracksApi } from "../api/tracksApi";

const store = configureStore({
	reducer: {
		[tracksApi.reducerPath]: tracksApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tracksApi.middleware)
});

export default store;