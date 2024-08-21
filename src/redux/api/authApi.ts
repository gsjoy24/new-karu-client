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
		confirmEmail: build.mutation({
			query: (token) => ({
				url: `/auth/confirm-email/?token=${token}`,
				method: 'POST'
			})
		}),
		login: build.mutation({
			query: (data) => ({
				url: '/auth/login',
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
		forgotPassword: build.mutation({
			query: (data) => ({
				url: '/auth/forgot-password',
				method: 'POST',
				data
			})
		}),
		resetPassword: build.mutation({
			query: (data) => ({
				url: `/auth/reset-password/?token${data.token}`,
				method: 'POST',
				data: { newPassword: data.password }
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
	useConfirmEmailMutation,
	useLogoutQuery,
	useChangePasswordMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation,
	useUpdateProfileMutation
} = authApi;
