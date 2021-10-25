const withPWA = require("next-pwa");

// console.log(process.env.API_URL);
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
  // },S
  {
    key: "Content-Security-Policy",
    value: `default-src https://m-one.kalbe.co.id:8243/t/kalbe.co.id https://sakamor.sakafarma.com http://sakamor-web-staging-kf-asd-sakamor-staging.apps.alpha.kalbe.co.id/ http://localhost:3000 'self'; connect-src * data: ws: wss:; style-src 'self' fonts.googleapis.com 'unsafe-inline' ; font-src fonts.gstatic.com; img-src 'self' blob: data:;`,
    // connect-src * data: ws: wss:;
    //  "style-src 'self' 'unsafe-inline' ; connect-src * data: ws: wss:;",
    // "default-src * ; script-src * ; style-src 'self' 'unsafe-hashes' 'sha256-nMxMqdZhkHxz5vAuW/PAoLvECzzsmeAxD/BNwG15HuA=' ; img-src *",
    // "default-src 'self' kalbe.co.id *.kalbe.co.id googleapis.com *.googleapis.com gstatic.com *.gstatic.com; img-src 'self' ",
  },
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
process.env.NODE_ENV === "development" ? settings : withPWA(settingsProd);
// module.exports = withPWA(settingsProd);
