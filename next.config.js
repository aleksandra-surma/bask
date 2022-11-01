/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const nextConfig = (phase) => {
  const reactStrictMode = true;
  const swcMinify = true;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    IS_PROD: isProd,

    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE: process.env.AIRTABLE_BASE,
  };

  const rewrites = () => {
    return [
      {
        source: '/sklep',
        destination: '/storeBask',
      },
      {
        source: '/edukacja-uv',
        destination: '/uvEducation',
      },
      {
        source: '/o-firmie',
        destination: '/aboutCompany',
      },
      {
        source: '/kontakt',
        destination: '/contact',
      },
      {
        source: '/moje-konto/zaloguj',
        destination: '/userAccount/logIn',
      },
      {
        source: '/moje-konto/nowe-konto',
        destination: '/userAccount/createAccount',
      },
      {
        source: '/moje-konto/odzyskanie-hasla',
        destination: '/userAccount/passwordRecovery',
      },
      {
        source: '/koszyk',
        destination: '/cardSummary',
      },

      // {
      //   source: '/polityka-prywatnosci',
      //   destination: '/policy',
      // },
    ];
  };

  return { reactStrictMode, swcMinify, rewrites, env };
};

module.exports = nextConfig;
