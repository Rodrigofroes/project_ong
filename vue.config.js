const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    host: '192.168.200.146',
    port: 8080,
  },
  transpileDependencies: true,
  lintOnSave:false

})
