const { defineConfig } = require("@vue/cli-service");
const port = process.env.port || 8090;
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port,
  },
});
