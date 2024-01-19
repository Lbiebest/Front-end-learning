const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 指定项目端口
  devServer: {
    port:7000
  }
})
