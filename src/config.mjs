export const SITE = {
  name: "HuskerJS",

  origin: "https://huskerjs.dev",
  basePathname:'/',
  trailingSlash: false,

  title: 'HuskerJS | Its College Football Gameday With HuskerJS.dev',
  description: 'HuskerJS Dev is the blogging platform that let\'s writers take control of their content, creative developers create new interactive components, and fans cheer for their favorite school!',

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'APIKEY',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};