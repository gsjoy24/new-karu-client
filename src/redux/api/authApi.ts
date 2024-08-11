import baseApi from './baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation({
			query: (data) => ({
				url: '/auth/login',
				method: 'POST',
				data
			})
		}),
		register: build.mutation({
			query: (data) => ({
				url: '/users',
				method: 'POST',
				data
			})
		}),
		logout: build.query({
			query: () => ({
				url: '/auth/logout',
				method: 'POST'
			})
		}),
		changePassword: build.mutation({
			query: (data) => ({
				url: '/auth/change-password',
				method: 'PATCH',
				data
			})
		})
	})
});

export const { useLoginMutation, useRegisterMutation, useLogoutQuery, useChangePasswordMutation } = authApi;
