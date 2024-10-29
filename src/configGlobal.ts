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
			siteName: 'My Awesome Website',
		},
	},
	twitter: {
		card: 'summary_large_image',
		site: '@yourtwitterhandle',
		creator: '@yourtwitterhandle',
	},
};

// TODO: add menu items and props
// export const menuLarge = {}
// export const menuSmall = {}
// export const menuFooter = {}

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
