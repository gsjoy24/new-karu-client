'use client';
import { useGetCategoriesQuery } from '@/redux/api/categoryApis';
import TCategory from '@/types/category.type';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import * as React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoGridOutline } from 'react-icons/io5';

const BrowseCategory = () => {
	const { data: categoryData, isFetching } = useGetCategoriesQuery({});

	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (anchorRef?.current && anchorRef?.current?.contains(event?.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};

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
					onClick={handleToggle}
					disabled={isFetching || !categoryData?.data.length}
					sx={{
						textTransform: 'capitalize',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem'
					}}
				>
					<IoGridOutline size={18} /> <span>Browse Categories</span>{' '}
					<IoIosArrowDown className={`${open && 'rotate-180'} duration-150`} />
				</Button>
				<Popper open={open} anchorEl={anchorRef.current} placement='bottom-start' transition disablePortal>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
							}}
						>
							<Paper className='w-[550px] p-3 mt-5 '>
								<Stack flexWrap='wrap' direction='row'>
									{categoryData?.data.slice(0, 10).map((category: TCategory) => (
										<ClickAwayListener onClickAway={handleClose} key={category?._id}>
											<MenuItem
												onClick={handleClose}
												sx={{
													'&:hover': {
														backgroundColor: 'transparent'
													}
												}}
											>
												{/* like a button with image and name */}
												<div className='flex items-center gap-2 p-2 border border-[#29A56C] rounded-md w-[225px] hover:scale-105 duration-150'>
													<Image src={category.image} alt={category?.name} className='w-8 h-8' width={50} height={50} />
													<span className='font-[500]'>{category?.name}</span>
												</div>
											</MenuItem>
										</ClickAwayListener>
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
