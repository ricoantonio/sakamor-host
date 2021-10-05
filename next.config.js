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
  // {
  //   key: "X-Content-Type-Options",
  //   value: "nosniff",
  // },
  // {
  //   key: "X-Frame-Options",
  //   value: "DENY",
  // },
];

const settings = {
  devIndicators: {
    autoPrerender: false,
  },
};

const settingsProd = {
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

// module.exports =
//   process.env.NODE_ENV === "development" ? settings : withPWA(settingsProd);
module.exports = withPWA(settingsProd);
