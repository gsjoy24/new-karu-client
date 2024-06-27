'use client';
import { Box, FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

const SearchProduct = () => {
	const [age, setAge] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value);
	};

	return (
		<Box>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
				<FormHelperText>Without label</FormHelperText>
			</FormControl>
			<input type='text' placeholder='Search Product' />
		</Box>
	);
};

export default SearchProduct;
