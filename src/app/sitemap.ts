import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'http://karukon.vercel.app',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1
		},
		{
			url: 'http://karukon.vercel.app/about-us',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: 'http://karukon.vercel.app/contact',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5
		}
	];
}
