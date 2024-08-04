import { reduxTagTypes } from '@/constants/reduxTagTypes';
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
		getProductBySlug: build.query({
			query: (slug: string) => ({
				url: `/products/slug/${slug}`,
				method: 'GET'
			}),
			providesTags: [reduxTagTypes.product]
		})
	})
});

export const { useGetNewArrivalsQuery, useGetProductBySlugQuery } = productApis;
