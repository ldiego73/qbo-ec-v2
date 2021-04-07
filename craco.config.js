const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@core": path.resolve(__dirname, "src/core"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@screes": path.resolve(__dirname, "src/screens"),
      "@utils": path.resolve(__dirname, "src/utils"),

      "@home": path.resolve(__dirname, "src/screens/home"),
      "@cart": path.resolve(__dirname, "src/screens/cart"),
      "@checkout": path.resolve(__dirname, "src/screens/checkout"),
      "@notFound": path.resolve(__dirname, "src/screens/not-found"),
      "@oauth": path.resolve(__dirname, "src/screens/oauth"),
      "@store": path.resolve(__dirname, "src/screens/store"),
    },
  },
};
