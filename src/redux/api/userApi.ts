import { reduxTagTypes } from '@/constants/reduxTagTypes';
import baseApi from './baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query({
			query: () => ({
				url: '/auth/me',
				method: 'GET'
			}),
			providesTags: [reduxTagTypes.user]
		}),
		getUser: build.query({
			query: (id: string) => ({
				url: `/auth/${id}`,
				method: 'GET'
			})
		}),
		addToCart: build.mutation({
			query: (data: { product: string; quantity: number }) => ({
				url: '/users/add-to-cart',
				method: 'PATCH',
				data
			}),
			invalidatesTags: [reduxTagTypes.user]
		}),
		removeFromCart: build.mutation({
			query: (productId: string) => ({
				url: `/users/remove-from-cart/${productId}`,
				method: 'PATCH'
			}),
			invalidatesTags: [reduxTagTypes.user]
		}),
		manipulateQuantity: build.mutation({
			query: (data: { productId: string; quantity: number }) => ({
				url: `/users/manipulate-quantity/${data.productId}/${data.quantity}`,
				method: 'PATCH'
			}),
			invalidatesTags: [reduxTagTypes.user]
		}),
		placeOrder: build.mutation({
			query: (data) => ({
				url: `/orders`,
				method: 'POST',
				data
			}),
			invalidatesTags: [reduxTagTypes.user]
		})
	})
});

export const {
	useGetMeQuery,
	useAddToCartMutation,
	useRemoveFromCartMutation,
	useManipulateQuantityMutation,
	usePlaceOrderMutation
} = authApi;
