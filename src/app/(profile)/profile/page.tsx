'use client';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Loading from '../../loading';

const Profile = () => {
	const PrivateRoute = dynamic(() => import('@/components/Shared/PrivateRoute'), {
		ssr: false
	});
	return <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eius veritatis iste!</div>;
};

export default Profile;
