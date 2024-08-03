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
		})
	})
});

export const { useGetNewArrivalsQuery } = productApis;
