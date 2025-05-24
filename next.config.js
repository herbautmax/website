module.exports = {
  async redirects() {
    return [
      {
        source: "/apropros",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
