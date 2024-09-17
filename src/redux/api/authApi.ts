import { reduxTagTypes } from '@/constants/reduxTagTypes';
import baseApi from './baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		register: build.mutation({
			query: (data) => ({
				url: '/users',
				method: 'POST',
				data
			})
		}),
		login: build.mutation({
			query: (data) => ({
				url: '/auth/login',
				method: 'POST',
				data
			})
		}),
		forgotPassword: build.mutation({
			query: (data) => ({
				url: '/auth/forgot-password',
				method: 'POST',
				data
			})
		}),
		resetPassword: build.mutation({
			query: (data) => ({
				url: `/auth/reset-password`,
				method: 'POST',
				data
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
	useRegisterMutation,
	useLoginMutation,
	useChangePasswordMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation,
	useUpdateProfileMutation
} = authApi;
