'use client';
import { useGetCategoriesQuery } from '@/redux/api/categoryApis';
import { TCategory } from '@/types/category.type';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Link from 'next/link';

const CategoryAccordion = () => {
	const { data } = useGetCategoriesQuery({});
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<span>Browse Categories</span>
			</AccordionSummary>
			<AccordionDetails>
				{data?.data?.map((category: TCategory) => (
					<Accordion
						key={category._id}
						sx={{
							boxShadow: 'none'
						}}
					>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<span>{category.name}</span>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: '0.5rem'
							}}
						>
							<Link href={`/products?category=${category.slug}`}>See All</Link>
							{category.subcategories.map((subcategory) => (
								<Link
									key={subcategory._id}
									href={`/products?category=${category.slug}&subcategory=${subcategory.slug}`}
								>
									<span>{subcategory.name}</span>
								</Link>
							))}
						</AccordionDetails>
					</Accordion>
				))}
			</AccordionDetails>
		</Accordion>
	);
};

export default CategoryAccordion;
