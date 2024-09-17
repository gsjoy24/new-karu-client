import { TCategory, TSubCategory } from './category.type';

export type TProduct = {
	_id?: string;
	slug: string;
	name: string;
	short_description: string;
	description: string;
	old_price: number;
	last_price: number;
	stock: number;
	images: string[];
	category: TCategory | string;
	sub_category?: TSubCategory | string;
	tags: string[];
	discountPercentage: number;
	isOutOfStock: boolean;
	createdAt?: Date;
	updatedAt?: Date;
};

export type TCart = {
	product: TProduct;
	quantity: number;
};
