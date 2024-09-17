'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { IconButton } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchProduct = () => {
	const router = useRouter();
	const handleSubmit = (data: FieldValues) => {
		router.push(`/products?search=${data.search}`);
	};

	return (
		<KForm onSubmit={handleSubmit} styleClasses='w-[300px] md:w-[400px] flex border rounded-md py-[5px]'>
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
	);
};

export default SearchProduct;
