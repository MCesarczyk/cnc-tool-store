/** @type {import('next').NextConfig} */
const nextConfig = {
	"output": "standalone",
	pageExtensions: ['ts', 'tsx', 'mdx'],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

const withMdxRs = require('@next/mdx')();
module.exports = withMdxRs(nextConfig);
