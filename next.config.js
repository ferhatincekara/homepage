const withPWA = require('next-pwa');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    pwa: {
      dest: 'public',
      disable: isDev,
    },
  };
};

module.exports = (phase) => withPWA(nextConfig(phase));
