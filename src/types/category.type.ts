export type TCategory = {
	_id?: string;
	name: string;
	description: string;
	image: string;
	subcategories: TSubCategory[];
};

export type TSubCategory = {
	_id?: string;
	name: string;
	description: string;
	category: string;
};

export type TSubCategoryCollectionData = {
	_id: string;
	name: string;
	slug: string;
	category_slug: string;
	products: string[][];
	productCount: number;
};
