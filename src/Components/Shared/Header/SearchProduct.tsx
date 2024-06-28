'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { Divider, IconButton, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchProduct = () => {
	const [category, setCategory] = useState<string>('');

	const handleChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value);
	};

	const handleSubmit = (data: FieldValues) => {
		// handle search
		console.log({ category, search: data.search });
	};

	const categories = [
		'Electronics',
		'Clothing',
		'Shoes',
		'Bags',
		'Watches',
		'Jewelry',
		'Books',
		'Toys',
		'Furniture',
		'Home Appliances'
	];
	return (
		<Stack
			direction='row'
			alignItems='center'
			spacing={1}
			sx={{
				border: '1px solid #29A56C',
				borderRadius: '5px',
				maxWidth: '600px',
				width: '100%',
				padding: '5px 0'
			}}
		>
			<Select
				inputProps={{ 'aria-label': ' select Category to search products' }}
				value={category}
				onChange={handleChange}
				displayEmpty
				size='small'
				sx={{
					'& .MuiOutlinedInput-notchedOutline': {
						border: 'none'
					}
				}}
			>
				<MenuItem value=''>All Categories</MenuItem>
				{categories.map((category, index) => (
					<MenuItem key={index} value={category}>
						{category}
					</MenuItem>
				))}
			</Select>
			<Divider orientation='vertical' sx={{ height: '25px', bgcolor: '#d6d6d6' }} />

			<KForm onSubmit={handleSubmit} styleClasses='w-full flex '>
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
