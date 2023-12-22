import { createAsyncThunk } from "@reduxjs/toolkit";
import {onAuthStateChanged} from "firebase/auth";

import { auth } from "../../firebase";
import { setUser, removeUser } from "../slices/userSlice";

export const checkAuth = createAsyncThunk(
	"auth/checkAuth",
	(_, { dispatch }) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				return dispatch(setUser({ email: user.email, uid: user.uid }));
			} else {
				return dispatch(removeUser());
			}
		});
	},
);