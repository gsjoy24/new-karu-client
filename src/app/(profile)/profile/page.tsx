'use client';
import Loading from '@/app/loading';
import NewArrivals from '@/components/Home/NewArrivals/NewArrivals';
import { useGetMeQuery } from '@/redux/api/userApi';
import { Email } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material';

const Profile = () => {
	const { data, isLoading } = useGetMeQuery({});
	const userData = data?.data;
	const fullName = userData?.name ?? 'User';
	const email = userData?.email;

	if (isLoading) return <Loading />;
	return (
		<>
			<Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, px: 2 }}>
				<Card>
					<CardContent>
						<Stack direction='row' alignItems='center' spacing={2} mb={3}>
							<Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>{fullName?.charAt(0) ?? 'User'}</Avatar>
							<Typography variant='h5' component='h2' fontWeight='bold'>
								Welcome, {fullName}!
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
						</Grid>
					</CardContent>
				</Card>
			</Box>
			<NewArrivals />
		</>
	);
};

export default Profile;
