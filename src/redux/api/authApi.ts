import { reduxTagTypes } from '@/constants/reduxTagTypes';
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
		confirmEmail: build.mutation({
			query: (token) => ({
				url: `/auth/confirm-email/?token=${token}`,
				method: 'POST'
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
		}),
		updateProfile: build.mutation({
			query: (data) => ({
				url: `/users/${data.id}`,
				method: 'PUT',
				data: data?.data
			}),
			invalidatesTags: [reduxTagTypes.user]
		})
	})
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useConfirmEmailMutation,
	useLogoutQuery,
	useChangePasswordMutation,
	useUpdateProfileMutation
} = authApi;
