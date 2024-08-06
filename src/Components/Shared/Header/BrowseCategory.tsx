'use client';
import { useGetCategoriesQuery } from '@/redux/api/categoryApis';
import { TCategory } from '@/types/category.type';
import { ClickAwayListener } from '@mui/material';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoGridOutline } from 'react-icons/io5';
import SubCategoryModal from './Category/SubCategoryModal';

const BrowseCategory = () => {
	const { data: categoryData, isFetching } = useGetCategoriesQuery({});
	const [categoryModalOpen, setCategoryModalOpen] = React.useState(false);
	const categoryModalRef = React.useRef<HTMLButtonElement>(null);

	const handleToggleCategoryModal = () => {
		setCategoryModalOpen((prevOpen) => !prevOpen);
	};

	const prevOpen = React.useRef(categoryModalOpen);
	React.useEffect(() => {
		if (prevOpen.current === true && categoryModalOpen === false) {
			categoryModalRef.current!.focus();
		}

		prevOpen.current = categoryModalOpen;
	}, [categoryModalOpen]);

	return (
		<Stack
			direction='row'
			spacing={2}
			sx={{
				zIndex: 1000
			}}
		>
			<div>
				<Button
					ref={categoryModalRef}
					id='composition-button'
					aria-controls={categoryModalOpen ? 'composition-menu' : undefined}
					aria-expanded={categoryModalOpen ? 'true' : undefined}
					aria-haspopup='true'
					onClick={handleToggleCategoryModal}
					disabled={isFetching || !categoryData?.data.length}
					sx={{
						textTransform: 'capitalize',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem'
					}}
				>
					<IoGridOutline size={18} /> <span>Browse Categories</span>{' '}
					<IoIosArrowDown className={`${categoryModalOpen && 'rotate-180'} duration-150`} />
				</Button>
				<Popper
					open={categoryModalOpen}
					anchorEl={categoryModalRef.current}
					placement='bottom-start'
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
							}}
						>
							<Paper className='w-[550px] p-3 mt-5 '>
								<ClickAwayListener onClickAway={handleToggleCategoryModal}>
									<Stack flexWrap='wrap' direction='row'>
										{categoryData?.data.slice(0, 10).map((category: TCategory) => (
											<div key={category?._id}>
												<MenuItem
													sx={{
														'&:hover': {
															backgroundColor: 'transparent'
														}
													}}
												>
													<SubCategoryModal category={category} />
												</MenuItem>
											</div>
										))}
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

export default BrowseCategory;
