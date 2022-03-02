/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['avatars.githubusercontent.com', 'localhost'],
		minimumCacheTTL: 2592000,
		loader: 'imgix',
		path: 'https://mjtbkh.imgix.net',
	},
};

module.exports = nextConfig;
