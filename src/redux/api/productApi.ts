import { reduxTagTypes } from '@/constants/reduxTagTypes';
import { TQueryParams } from '@/types';
import baseApi from './baseApi';

const productApis = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getNewArrivals: build.query({
			query: () => ({
				url: '/products/new-arrivals',
				method: 'GET'
			}),
			providesTags: [reduxTagTypes.categories]
		}),
		getProducts: build.query({
			query: (args) => {
				const params = new URLSearchParams();
				params.append('limit', '16');
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});
				return {
					url: `/products`,
					method: 'GET',
					params
				};
			},
			providesTags: [reduxTagTypes.product]
		}),
		getProductBySlug: build.query({
			query: (slug) => ({
				url: `/products/slug/${slug}`,
				method: 'GET'
			}),

			providesTags: [reduxTagTypes.product]
		})
	})
});

export const { useGetNewArrivalsQuery, useGetProductsQuery, useGetProductBySlugQuery } = productApis;
