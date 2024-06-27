'use client';
import { Divider, IconButton, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchProduct = () => {
	const [category, setCategory] = useState<string>('');

	const handleChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value);
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

			<TextField
				placeholder='Search for items...'
				variant='outlined'
				size='small'
				sx={{
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: 'none'
						}
					},
					width: '100%'
				}}
			/>
			<IconButton aria-label='search'>
				<HiMagnifyingGlass />
			</IconButton>
		</Stack>
	);
};

export default SearchProduct;
