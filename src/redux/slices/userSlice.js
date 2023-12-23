import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	statusAuth: "LOADING",
	email: null,
	token: null,
	uid: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.uid = action.payload.uid;
			state.statusAuth = "SUCCESS";
		},
		removeUser(state) {
			state.email = null;
			state.token = null;
			state.uid = null;
			state.statusAuth = "SUCCESS";
		}
	}
});

const {actions, reducer} = userSlice;

export default reducer;
export const {setUser, removeUser} = actions;
