import type { Props as SEOProps } from 'astro-seo';

export const metadataGlobal: SEOProps = {
	noindex: true, // switch or delete on launch
	nofollow: true, // switch or delete on launch
	titleDefault: 'Default Title',
	description: 'A brief description of your website content goes here.',
	openGraph: {
		basic: {
			title: 'My Awesome Website',
			type: 'website', // required, allow optional override in pageConfig
			image: new URL('/og/placeholder.png', import.meta.env.SITE).toString(),
		},
		optional: {
			siteName: 'Astro Core',
		},
	},
	twitter: {
		card: 'summary_large_image',
		site: '@yourtwitterhandle',
		creator: '@yourtwitterhandle',
	},
};

// Menu item type definition (simplified without children)
export type MenuItem = {
	label: string;
	href: string;
};

// Define menu configurations
export const menuLarge: MenuItem[] = [
	{
		label: 'Services',
		href: '/services',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
];

export const menuSmall: MenuItem[] = [
	{
		label: 'Services',
		href: '/services',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
];

export const menuFooter: MenuItem[] = [
	{
		label: 'Services',
		href: '/services',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
];

export const configSocial = {
	linkedin: {
		url: 'https://www.linkedin.com/company/yourcompany',
		handle: 'yourcompany',
	},
	reddit: {
		url: 'https://www.reddit.com/r/yoursubreddit',
		handle: 'u/yourusername',
	},
	facebook: { url: 'https://www.facebook.com/yourpage', handle: 'yourpage' },
	instagram: {
		url: 'https://www.instagram.com/yourusername',
		handle: 'yourusername',
	},
};
