/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['avatars.githubusercontent.com', 'mjtbkh.github.io', 'localhost'],
		deviceSizes: [320, 420, 768, 1024, 1200],
		minimumCacheTTL: 2592000,
		loader: 'imgix',
		path: '', //'https://mjtbkh.imgix.net'
	},
};

module.exports = nextConfig;
