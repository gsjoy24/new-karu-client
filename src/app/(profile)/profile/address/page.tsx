'use client';
import Loading from '@/app/loading';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { useUpdateProfileMutation } from '@/redux/api/authApi';
import { useGetMeQuery } from '@/redux/api/userApi';
import { useAppSelector } from '@/redux/hooks';
import { UserAddressSchema } from '@/validationSchemas/user.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const AddressPage = () => {
	const user = useAppSelector((state) => state.auth.user);
	const { data, isFetching } = useGetMeQuery({});
	const [updateProfile, { isLoading }] = useUpdateProfileMutation();
	const defaultAddress = {
		address: data?.data?.address,
		city: data?.data?.city,
		district: data?.data?.district,
		mobile_number: data?.data?.mobile_number
	};

	const handleSubmit = async (data: FieldValues) => {
		try {
			const res = await updateProfile({
				id: user?.id,
				data
			}).unwrap();

			if (res?.success) {
				toast.success(res?.message);
			} else {
				toast.error(res?.message);
			}
		} catch (error: any) {
			toast.error(error.data?.message ?? error.error.message ?? 'An error occurred! Please try again later.');
		}
	};

	return isFetching ? (
		<Loading />
	) : (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			gap={3}
			py={5}
			sx={{
				minHeight: '80vh'
			}}
		>
			<Typography
				variant='h1'
				sx={{
					textAlign: 'center',
					fontSize: {
						xs: '1.5rem',
						md: '2rem'
					}
				}}
			>
				Update your default address
			</Typography>

			<KForm
				onSubmit={handleSubmit}
				resolver={zodResolver(UserAddressSchema)}
				defaultValues={defaultAddress}
				styleClasses='p-4 md:p-12 border max-w-[600px] w-full flex flex-col gap-4'
			>
				<KInput label='Address' placeholder='Your detail address' name='address' />
				<KInput label='City' placeholder='Dhaka' name='city' />
				<KInput label='District' placeholder='Dhaka' name='district' />
				<KInput label='Mobile Number' placeholder='01xxxxxxxxx' name='mobile_number' />

				<LoadingButton type='submit' loading={isLoading} loadingIndicator='Loading' variant='contained'>
					Submit
				</LoadingButton>
			</KForm>
		</Stack>
	);
};

export default AddressPage;
