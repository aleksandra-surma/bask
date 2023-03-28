/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const { pathsMap } = require('./data/pathMap');

const nextConfig = (phase) => {
  const reactStrictMode = true;
  const swcMinify = true;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    IS_PROD: isProd,

    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE: process.env.AIRTABLE_BASE,
  };

  const rewrites = () =>
    pathsMap.map(({ source, destination }) => {
      return {
        source,
        destination,
      };
    });

  const images = {
    domains: ['v5.airtableusercontent.com'],
  };

  const typescript = {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  };

  return {
    images,
    reactStrictMode,
    swcMinify,
    rewrites,
    env,
    typescript,
  };
};

module.exports = nextConfig;
