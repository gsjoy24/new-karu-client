import baseApi from './baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query({
			query: () => ({
				url: '/auth/me',
				method: 'GET'
			})
		}),
		getUser: build.query({
			query: (id: string) => ({
				url: `/auth/${id}`,
				method: 'GET'
			})
		})
	})
});

export const { useGetMeQuery } = authApi;
