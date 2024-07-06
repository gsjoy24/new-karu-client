import baseApi from './baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation({
			query: (data) => ({
				url: '/auth/login',
				method: 'POST',
				body: data
			})
		}),
		register: build.query({
			query: (data) => ({
				url: '/auth/register',
				method: 'POST',
				body: data
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

export const { useLoginMutation, useRegisterQuery, useLogoutQuery } = authApi;
