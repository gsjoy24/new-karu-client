import { reduxTagList } from '@/constants/reduxTagTypes';
import axiosBaseQuery from '@/helpers/axios/axiosBaseQuery';
import config from '@/lib/config';
import { createApi } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: axiosBaseQuery({ baseUrl: config.server_url }),
	endpoints: () => ({}),
	tagTypes: reduxTagList
});

export default baseApi;
