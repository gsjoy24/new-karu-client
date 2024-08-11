'use client';
import { TCategory, TSubCategory } from '@/types/category.type';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const SubCategoryModal = ({ category }: { category: TCategory }) => {
	const [subCategoryModalOpen, setSubCategoryModalOpen] = React.useState(false);
	const subCategoryModalRef = React.useRef<HTMLButtonElement>(null);

	const handleToggleCategoryModal = () => {
		setSubCategoryModalOpen((prevOpen) => !prevOpen);
	};

	const handleCloseCategoryModal = (event: Event | React.SyntheticEvent) => {
		if (subCategoryModalRef?.current && subCategoryModalRef?.current?.contains(event?.target as HTMLElement)) {
			return;
		}

		setSubCategoryModalOpen(false);
	};

	const prevOpen = React.useRef(subCategoryModalOpen);
	React.useEffect(() => {
		if (prevOpen.current === true && subCategoryModalOpen === false) {
			subCategoryModalRef.current!.focus();
		}

		prevOpen.current = subCategoryModalOpen;
	}, [subCategoryModalOpen]);

	return (
		<Stack direction='row' spacing={2}>
			<div>
				{category?.subcategories?.length > 0 ? (
					<Button
						ref={subCategoryModalRef}
						id='subCategory-button'
						aria-controls={subCategoryModalOpen ? 'subCategory-menu' : undefined}
						aria-expanded={subCategoryModalOpen ? 'true' : undefined}
						aria-haspopup='true'
						onClick={handleToggleCategoryModal}
						sx={{
							display: 'flex',
							alignItems: 'center',
							backgroundColor: '#fff',
							justifyContent: 'space-evenly',
							gap: '0.5rem',
							padding: '0.5rem',
							borderRadius: '0.375rem',
							width: '225px',
							'&:hover': {
								backgroundColor: '#f9f9f9'
							},
							boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
						}}
					>
						<Image src={category?.image} alt={category?.name} className='w-8 h-8' width={50} height={50} />
						<span className='font-[500]'>{category?.name}</span>
						<IoIosArrowDown className={`${subCategoryModalOpen && 'rotate-180'} duration-150`} />
					</Button>
				) : (
					<Button
						component={Link}
						href={`/category/${category?.slug}`}
						sx={{
							display: 'flex',
							alignItems: 'center',
							backgroundColor: '#fff',
							justifyContent: 'space-evenly',
							gap: '0.5rem',
							padding: '0.5rem',
							borderRadius: '0.375rem',
							width: '225px',
							'&:hover': {
								backgroundColor: '#f9f9f9'
							},
							boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
						}}
					>
						<Image src={category?.image} alt={category?.name} className='w-8 h-8' width={50} height={50} />
						<span className='font-[500]'>{category?.name}</span>
					</Button>
				)}
				<Popper
					open={subCategoryModalOpen}
					anchorEl={subCategoryModalRef.current}
					placement='bottom-start'
					transition
					disablePortal
					sx={{
						zIndex: 9999
					}}
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
							}}
						>
							<Paper className='w-[550px] p-3 mt-5'>
								<ClickAwayListener onClickAway={handleCloseCategoryModal}>
									<Stack flexWrap='wrap' direction='row' gap={2}>
										<Box
											component={Link}
											href={`/category/${category?.slug}`}
											className='flex items-center justify-center gap-2 py-2 px-4 border border-gray-400 rounded-md hover:border-gray-600 duration-150'
										>
											See All
										</Box>
										{category?.subcategories?.map((subCategory: TSubCategory) => (
											<Box
												component={Link}
												href={`/category/${category?.slug}/${subCategory?.slug}`}
												className='flex items-center justify-center gap-2 py-2 px-4 border border-gray-400 rounded-md hover:border-gray-600 duration-150'
												key={subCategory?._id}
											>
												{subCategory?.name}
											</Box>
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

export default SubCategoryModal;
