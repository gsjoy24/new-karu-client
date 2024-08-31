'use client';
import { setUser } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { removeFromLocalStorage } from '@/utils/local-storage';
import { Avatar, Button, ClickAwayListener, Grow, IconButton, Paper, Popper, Stack } from '@mui/material';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';

const ProfileMenu = () => {
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(setUser({ user: null, token: null }));
		removeFromLocalStorage('accessToken');
	};
	const [menuOpen, setMenuOpen] = useState(false);
	const modalRef = useRef<HTMLButtonElement>(null);

	const handleToggleModal = () => {
		setMenuOpen((prevOpen) => !prevOpen);
	};

	const prevOpen = useRef(menuOpen);
	useEffect(() => {
		if (prevOpen.current === true && menuOpen === false) {
			modalRef.current!.focus();
		}

		prevOpen.current = menuOpen;
	}, [menuOpen]);

	const handleScrollToTop = () => {
		handleToggleModal();
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<Stack
			direction='row'
			spacing={2}
			sx={{
				zIndex: 1000
			}}
		>
			<div>
				<IconButton
					ref={modalRef}
					id='menu-button'
					aria-controls={menuOpen ? 'menu-menu' : undefined}
					aria-expanded={menuOpen ? 'true' : undefined}
					aria-haspopup='true'
					onClick={handleToggleModal}
					sx={{
						textTransform: 'capitalize',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem'
					}}
				>
					<Avatar sizes='60' />
				</IconButton>
				<Popper open={menuOpen} anchorEl={modalRef.current} placement='bottom-start' transition disablePortal>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
							}}
						>
							<Paper className='w-[8rem] py-2 mt-5'>
								<ClickAwayListener onClickAway={handleToggleModal}>
									<Stack flexWrap='wrap' direction='row' justifyContent='center'>
										<Button
											fullWidth
											variant='text'
											sx={{
												color: 'gray'
											}}
											startIcon={<FiUser />}
											LinkComponent={Link}
											href='/profile'
											onClick={handleScrollToTop}
										>
											Profile
										</Button>
										<Button
											fullWidth
											variant='text'
											sx={{
												color: 'red'
											}}
											endIcon={<IoIosLogOut />}
											onClick={handleLogout}
										>
											Logout
										</Button>
									</Stack>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</Stack>
	);
};

export default ProfileMenu;
