'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { useGetCategoriesQuery } from '@/redux/api/categoryApis';
import TCategory from '@/types/category.type';
import { Divider, IconButton, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchProduct = () => {
	const [categoryId, setCategoryId] = useState<string>('');

	const { data: categoryData, isFetching } = useGetCategoriesQuery({});

	const handleChange = (event: SelectChangeEvent) => {
		setCategoryId(event.target.value);
	};

	const handleSubmit = (data: FieldValues) => {
		// handle search
		console.log({ categoryId, search: data.search });
	};

	const categories =
		categoryData?.data?.map((category: TCategory) => ({
			id: category._id,
			name: category.name
		})) || [];
	return (
		<Stack
			direction='row'
			alignItems='center'
			spacing={1}
			sx={{
				border: '1px solid #29A56C',
				margin: '0 auto',
				borderRadius: '5px',
				maxWidth: '600px',
				width: {
					xs: '95%',
					md: '100%'
				},
				padding: '5px 0'
			}}
		>
			<Select
				inputProps={{ 'aria-label': ' select Category to search products' }}
				value={categoryId}
				onChange={handleChange}
				displayEmpty
				size='small'
				disabled={isFetching || !categoryData?.data?.length}
				sx={{
					'& .MuiOutlinedInput-notchedOutline': {
						border: 'none'
					},

					display: {
						xs: 'none',
						md: 'block'
					}
				}}
			>
				<MenuItem value=''>All Categories</MenuItem>
				{categories.map(({ id, name }: { id: string; name: string }) => (
					<MenuItem key={id} value={id}>
						{name}
					</MenuItem>
				))}
			</Select>
			<Divider
				orientation='vertical'
				sx={{
					height: '25px',
					bgcolor: '#d6d6d6',
					display: {
						xs: 'none',
						md: 'block'
					}
				}}
			/>

			<KForm onSubmit={handleSubmit} styleClasses='w-full flex'>
				<KInput
					name='search'
					placeholder='Search for items...'
					sx={{
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								border: 'none'
							}
						},
						width: '100%'
					}}
				/>
				<IconButton aria-label='search' type='submit'>
					<HiMagnifyingGlass />
				</IconButton>
			</KForm>
		</Stack>
	);
};

export default SearchProduct;
