const path = require("path"); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("image", resolve("./src/assets"))
      .set("components", resolve("./src/components"))
  },
  
  publicPath: "./",
  outputDir: "dist", // 输出文件目录
  lintOnSave: true, // eslint 是否在保存时检查
  assetsDir: "static", // 配置js、css静态资源二级目录的位置
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "./src/style/index.scss";
            `,
      },
    },
    extract:process.env.NODE_ENV === "production"?{ignoreOrder:true}:false,
  },
  devServer:{
    host: '0.0.0.0',
    open:false,
    port:10001,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy:{
      '/api':{
        target: `https://soa.lonsid.cn/api`,
        pathRewrite: {
          '^/api': '/',
        }
      }
    }
  },
  configureWebpack: (config) => {
    // 为生产环境修改配置...
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
};
