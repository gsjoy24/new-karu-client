'use client';
import Loading from '@/app/loading';
import NewArrivals from '@/components/Home/NewArrivals/NewArrivals';
import { useGetMeQuery } from '@/redux/api/userApi';
import { Email, Home, LocationCity, LocationOn, Phone } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material';

const Profile = () => {
	const { data, isLoading } = useGetMeQuery({});

	if (isLoading) return <Loading />;

	const userData = data?.data;
	const fullName = userData?.name?.first_name || userData?.full_name;
	const email = userData?.email;
	const mobileNumber = userData?.mobile_number ?? 'N/A';
	const address = userData?.address ?? 'N/A';
	const district = userData?.district ?? 'N/A';
	const city = userData?.city ?? 'N/A';

	return (
		<>
			<Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, px: 2 }}>
				<Card>
					<CardContent>
						<Stack direction='row' alignItems='center' spacing={2} mb={3}>
							<Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>{fullName?.charAt(0) ?? 'User'}</Avatar>
							<Typography variant='h5' component='h2' fontWeight='bold'>
								Welcome, {fullName ?? 'User'}!
							</Typography>
						</Stack>

						{/* Divider */}
						<Divider sx={{ mb: 3 }} />

						{/* Information Section */}
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<Stack direction='row' alignItems='center' spacing={1}>
									<Email color='primary' />
									<Typography variant='body1'>
										<strong>Email:</strong> {email}
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12} md={6}>
								<Stack direction='row' alignItems='center' spacing={1}>
									<Phone color='primary' />
									<Typography variant='body1'>
										<strong>Phone:</strong> {mobileNumber}
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12} md={6}>
								<Stack direction='row' alignItems='center' spacing={1}>
									<Home color='primary' />
									<Typography variant='body1'>
										<strong>Address:</strong> {address}
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12} md={6}>
								<Stack direction='row' alignItems='center' spacing={1}>
									<LocationCity color='primary' />
									<Typography variant='body1'>
										<strong>City:</strong> {city}
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12}>
								<Stack direction='row' alignItems='center' spacing={1}>
									<LocationOn color='primary' />
									<Typography variant='body1'>
										<strong>District:</strong> {district}
									</Typography>
								</Stack>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Box>
			<NewArrivals />
		</>
	);
};

export default Profile;
