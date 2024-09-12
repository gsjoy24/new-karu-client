import { reduxTagTypes } from '@/constants/reduxTagTypes';
import { TAuthState } from '@/types/TAuthState';
import { createSlice } from '@reduxjs/toolkit';
import baseApi from '../api/baseApi';
import { RootState } from '../store';

const initialState: TAuthState = {
	user: null,
	token: null
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { user, token } = action.payload;
			state.user = user;
			state.token = token;
		},
		logOut: (state) => {
			state.user = null;
			state.token = null;
			baseApi.util.invalidateTags([reduxTagTypes.user]);
		}
	}
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
