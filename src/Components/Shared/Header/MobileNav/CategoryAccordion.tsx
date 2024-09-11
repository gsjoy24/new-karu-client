'use client';
import { useGetCategoriesQuery } from '@/redux/api/categoryApis';
import { TCategory } from '@/types/category.type';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Link as MuiLink, Typography } from '@mui/material';
import Link from 'next/link';

const CategoryAccordion = () => {
	const { data } = useGetCategoriesQuery({});

	return (
		<Box
			sx={{
				width: '100%',
				bgcolor: 'background.paper',
				borderRadius: 1,
				overflowY: 'auto'
			}}
		>
			{data?.data?.map((category: TCategory) =>
				category.subcategories.length > 0 ? (
					<Accordion
						key={category._id}
						disableGutters
						elevation={0}
						sx={{
							bgcolor: 'background.default',
							borderBottom: '1px solid',
							borderColor: 'divider',
							boxShadow: 'none',
							'&:before': { display: 'none' }
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
							sx={{
								'& .MuiAccordionSummary-content': {
									my: 1
								}
							}}
						>
							<Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
								{category.name}
							</Typography>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								display: 'flex',
								flexDirection: 'column',
								ml: 1.5,
								py: 0,
								gap: '0.5rem'
							}}
						>
							{category.subcategories.map((subcategory) => (
								<MuiLink
									key={subcategory._id}
									component={Link}
									mb={0.5}
									href={`/category/${category.slug}/${subcategory.slug}`}
									underline='hover'
								>
									<Typography variant='body2'>{subcategory.name}</Typography>
								</MuiLink>
							))}
						</AccordionDetails>
					</Accordion>
				) : (
					<MuiLink
						key={category._id}
						component={Link}
						href={`/category=${category.slug}`}
						underline='none'
						sx={{
							display: 'block',
							py: 1,
							px: 1.5,
							borderBottom: '1px solid',
							borderColor: 'divider',
							bgcolor: 'background.default',
							'&:hover': {
								bgcolor: 'grey.100'
							}
						}}
					>
						<Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
							{category.name}
						</Typography>
					</MuiLink>
				)
			)}
		</Box>
	);
};

export default CategoryAccordion;
