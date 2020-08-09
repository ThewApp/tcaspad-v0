module.exports = {
  async rewrites() {
    return [
      {
        source: "/:404",
        destination: "/", // Matched parameters can be used in the destination
      },
    ];
  },
};
