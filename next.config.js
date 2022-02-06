/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['avatars.githubusercontent.com'],
		minimumCacheTTL: 2592000
	}
}

module.exports = nextConfig
