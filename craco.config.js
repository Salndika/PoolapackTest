const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@ai-modules-homepage": path.resolve(__dirname, "src/modules/Homepage"),
      "@ai-modules-login": path.resolve(__dirname, "src/modules/Login"),
      "@ai-components-navbar": path.resolve(__dirname, "src/components/Navbar"),
      "@ai-components-charts": path.resolve(__dirname, "src/components/Charts"),
      "@ai-components-login": path.resolve(__dirname, "src/components/Login"),
      "@ai-components-tombol": path.resolve(__dirname, "src/components/Tombol"),
      "@ai-components-carousel": path.resolve(__dirname, "src/components/Carousel"),
      "@ai-components-header": path.resolve(__dirname, "src/components/Header"),
      "@ai-components-transbox": path.resolve(__dirname, "src/components/Transbox"),
    },
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
