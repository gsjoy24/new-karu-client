import { reduxTagList } from '@/constants/reduxTagTypes';
import config from '@/lib/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: config.server_url }),
	endpoints: () => ({}),
	tagTypes: reduxTagList
});

export default baseApi;
