import config from '@/lib/config';
import { MetadataRoute } from 'next';

// Step 1: Generate a static sitemap for core pages
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Static routes for main pages
	const staticSitemap: MetadataRoute.Sitemap = [
		{
			url: config.app_url,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1
		},
		{
			url: `${config.app_url}/products`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8
		},
		{
			url: `${config.app_url}/about`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5
		},
		{
			url: `${config.app_url}/terms`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5
		},
		{
			url: `${config.app_url}/privacy`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5
		},
		{
			url: `${config.app_url}/return`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5
		},
		{
			url: `${config.app_url}/order-process`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5
		}
	];

	// Step 2: Fetch dynamic products for the product pages sitemap
	const limit = 50000; // Limit of products per sitemap
	const response = await fetch(`${config.server_url}/products?limit=${limit}&page=1`);
	const data = await response.json();
	const products = data.data; // Array of products

	const categoryRes = await fetch(`${config.server_url}/categories`);
	const categoryData = await categoryRes.json();
	const categories = categoryData.data; // Array of categories

	// Map category URLs to sitemap format
	const categorySitemap = categories.map((category: { slug: string }) => ({
		url: `${config.app_url}/category/${category.slug}`,
		lastModified: new Date(),
		changeFrequency: 'daily',
		priority: 0.7
	}));

	// Map product URLs to sitemap format
	const productSitemap = products.map((product: { slug: string; updatedAt: string }) => ({
		url: `${config.app_url}/product/${product.slug}`,
		lastModified: new Date(product.updatedAt).toISOString(),
		changeFrequency: 'daily',
		priority: 0.7
	}));

	// Step 3: Combine static and dynamic routes
	return [...staticSitemap, ...categorySitemap, ...productSitemap];
}
