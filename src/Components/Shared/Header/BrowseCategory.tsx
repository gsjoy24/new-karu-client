'use client';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import * as React from 'react';
import { IoGridOutline } from 'react-icons/io5';

type TCategory = {
	_id: string;
	name: string;
	description: string;
	image: string;
};

const BrowseCategory = () => {
	const categories: TCategory[] = [
		{
			_id: '662d2a66c1f73d9085769cd5',
			name: 'Flower and verse',
			description: 'sdfsdf',
			image: 'https://i.ibb.co/0DGSkbD/Flower-and-verse.jpg'
		},
		{
			_id: '662d2be6ee1d4270c1d0bf72',
			name: 'Flavored Coffee',
			description: 'sdfs',
			image: 'https://i.ibb.co/zSZLt1x/Flavored-Coffee.jpg'
		},
		{
			_id: '662d2cd7ee1d4270c1d0bf76',
			name: 'Popular',
			description: 'dsfsdgf',
			image: 'https://i.ibb.co/p0xm8np/Popular.jpg'
		},
		{
			_id: '662d2a66c1f73d9085769cd5',
			name: 'Flower and verse',
			description: 'sdfsdf',
			image: 'https://i.ibb.co/0DGSkbD/Flower-and-verse.jpg'
		},
		{
			_id: '662d2be6ee1d4270c1d0bf72',
			name: 'Flavored Coffee',
			description: 'sdfs',
			image: 'https://i.ibb.co/zSZLt1x/Flavored-Coffee.jpg'
		},
		{
			_id: '662d2cd7ee1d4270c1d0bf76',
			name: 'Popular',
			description: 'dsfsdgf',
			image: 'https://i.ibb.co/p0xm8np/Popular.jpg'
		},
		{
			_id: '662d2be6ee1d4270c1d0bf72',
			name: 'Flavored Coffee',
			description: 'sdfs',
			image: 'https://i.ibb.co/zSZLt1x/Flavored-Coffee.jpg'
		},
		{
			_id: '662d2cd7ee1d4270c1d0bf76',
			name: 'Popular',
			description: 'dsfsdgf',
			image: 'https://i.ibb.co/p0xm8np/Popular.jpg'
		}
	];
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<Stack direction='row' spacing={2}>
			<div>
				<Button
					ref={anchorRef}
					id='composition-button'
					aria-controls={open ? 'composition-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-haspopup='true'
					onMouseEnter={handleToggle}
					sx={{
						textTransform: 'capitalize'
					}}
				>
					<IoGridOutline size={18} className='mr-2' /> <span>Browse Categories</span>
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					placement='bottom-start'
					transition
					disablePortal
					onMouseLeave={handleToggle}
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
							}}
						>
							<Paper className='w-[500px] p-3'>
								<Stack flexWrap='wrap' direction='row'>
									{categories.slice(0, 10).map((category: TCategory, index: number) => (
										<MenuItem key={index} onClick={handleClose}>
											{/* like a button with image and name */}
											<div className='flex items-center gap-2 p-2 border border-[#29A56C] rounded-md w-[200px]'>
												<Image src={category.image} alt={category.name} className='w-8 h-8' width={50} height={50} />
												<span className='font-[500]'>{category.name}</span>
											</div>
										</MenuItem>
									))}
								</Stack>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</Stack>
	);
};

export default BrowseCategory;
