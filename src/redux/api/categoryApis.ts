import baseApi from './baseApi';

const categoryApis = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getCategories: build.query({
			query: () => ({
				url: '/categories',
				method: 'GET'
			}),
			providesTags: ['categories']
		})
	})
});

export const { useGetCategoriesQuery } = categoryApis;
