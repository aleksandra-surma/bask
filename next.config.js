/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const nextConfig = (phase) => {
  const reactStrictMode = true;
  const swcMinify = true;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    IS_PROD: isProd,
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
      // {
      //   source: '/polityka-prywatnosci',
      //   destination: '/policy',
      // },
    ];
  };

  return { reactStrictMode, swcMinify, rewrites, env };
};

module.exports = nextConfig;
