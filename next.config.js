const withPWA = require("next-pwa");
const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Cache-Control",
    value: "public,  must-revalidate",
  },
];

const settings = {
  devIndicators: {
    autoPrerender: false,
  },
};

const settingsProd = {
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: "public",
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settingsProd);
