'use client';
import Loading from '@/app/loading';
import { useGetSubCategoriesCollectionQuery } from '@/redux/api/subCategoryApis';
import { TSubCategoryCollectionData } from '@/types/category.type';
import { Stack } from '@mui/material';
import SubCategoryItem from './SubCategoryItem';

const SubCategoryCollection = () => {
	const { data, isFetching } = useGetSubCategoriesCollectionQuery({});

	return isFetching ? (
		<Loading />
	) : (
		<Stack
			direction='row'
			flexWrap='wrap'
			gap={3}
			justifyContent='center'
			alignItems='center'
			py={{
				xs: 1.5,
				sm: 3
			}}
		>
			{data?.data?.map((subCategory: TSubCategoryCollectionData) => (
				<SubCategoryItem key={subCategory._id} item={subCategory} />
			))}
		</Stack>
	);
};

export default SubCategoryCollection;
