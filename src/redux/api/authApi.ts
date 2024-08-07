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
		})
	})
});

export const { useLoginMutation, useRegisterMutation, useLogoutQuery } = authApi;
