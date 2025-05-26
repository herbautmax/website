module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  changefreq: "weekly",
  sitemapSize: 5000,
  exclude: ["/404", "/admin"],
};
