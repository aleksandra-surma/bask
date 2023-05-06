/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const { pathsMap } = require('./data/pathMap');

const nextConfig = (phase) => {
  const reactStrictMode = true;
  const swcMinify = true;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    IS_PROD: isProd,
    // NEXT_PUBLIC_EMAIL_USER_DEV: process.env.NEXT_PUBLIC_EMAIL_USER_DEV,
    // NEXT_PUBLIC_EMAIL_PASS_DEV: process.env.NEXT_PUBLIC_EMAIL_PASS_DEV,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    NEXT_PUBLIC_STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    AIRTABLE_PRODUCTS_BASE: process.env.AIRTABLE_PRODUCTS_BASE,
    AIRTABLE_PAYMENTS_BASE: process.env.AIRTABLE_PAYMENTS_BASE,
    AIRTABLE_USERS_BASE: process.env.AIRTABLE_USERS_BASE,
    AIRTABLE_API_TOKEN: process.env.AIRTABLE_API_TOKEN,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ACCESS_TOKEN_DRAW: process.env.CONTENTFUL_ACCESS_TOKEN_DRAW,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_APP_STAGE: process.env.NEXT_PUBLIC_APP_STAGE,
    EMAIL_CONTACT_PROD: process.env.EMAIL_CONTACT_PROD,
    EMAIL_SHOPPING_PROD: process.env.EMAIL_SHOPPING_PROD,
    EMAIL_PASS_PROD: process.env.EMAIL_PASS_PROD,
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
