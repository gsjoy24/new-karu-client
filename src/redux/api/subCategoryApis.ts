import { reduxTagTypes } from '@/constants/reduxTagTypes';
import baseApi from './baseApi';

const subCategoryApis = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getSubCategoriesCollection: build.query({
			query: () => ({
				url: '/subcategories/collection',
				method: 'GET'
			}),
			providesTags: [reduxTagTypes.categories]
		})
	})
});

export const { useGetSubCategoriesCollectionQuery } = subCategoryApis;
