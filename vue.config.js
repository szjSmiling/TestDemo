const path = require('path')
const glob = require("glob");

const resolve = function (dir) {
  return path.join(__dirname, dir)
}
const isProduction = process.env.NODE_ENV === "production"

function proxy () {
  // localHost 可选值 'localhost'  ||  '127.0.0.1'  ||  '0.0.0.0'( 本机ip)
  const localHost = '0.0.0.0';
  const localPort = '8080';
  const context = ['/api', '/images'];
  // devServer 的代理
  let proxy = {};
  for (let val of context) {
    proxy[val] = {
      target: `http://172.16.16.8:8080`,
      changeOrigin: true,
      secure: false
    }
  }
  return { localHost, localPort, proxy: { ...proxy } }
}

// 配置多页面
let pages = getEntry('src/pages/**/main.js');
function getEntry(globPath) {
  let entries = {},
      entryKey,
      dirList;
  glob.sync(globPath).forEach(entry => {
    // 获取后缀 path.extname(entry) 的文件名
    // const basename = path.basename(entry, path.extname(entry));
    dirList = entry.split('/').splice(-3); // ['pages', 'home', 'main'], temp[1] === entryKey
    entryKey = entry.split('src/pages/')[1].split('/')[0];
    entries[entryKey] = {
      entry: entry,
      template: 'public/index.html',
      title: `${dirList[1]}`,
      filename:  isProduction ? resolve(`dist/${entryKey}.html`) : `${entryKey}.html`,
      chunks: ['chunk-vendors', 'chunk-common', entryKey]
    }
  })
  return entries;
}
module.exports = {
  runtimeCompiler: true,
  publicPath: isProduction ? '/' : '/', // 根路经  './'相对路径
  outputDir: './dist',   // 构建输出目录
  assetsDir: 'assets', // 静态资源目录（js,css,img,fonts）
  lintOnSave: true,    // 是否开启eslint保存监测，有效值：true  ||  false  ||  'error'
  productionSourceMap: false, // 打包不生成 js.map 文件, 加快生产环境的打包速度，也能避免源码暴露在浏览器端
  pages, // 多页面需要
  devServer: {
    // index: 'home.html', // 指定页面入口, 多页面且首页不是index.html时需要
    host: proxy().localHost,
    port: proxy().localPort,
    open: true,
    https: false,
    hot: true, // 启动 HMR 热更新, 某些模块无法热更新时, 刷新页面
    hotOnly: false, // 某些模块无法热更新时, 不刷新页面, 控制台输出报错
    proxy: proxy().proxy
  },
  // 调整内部的 webpack 配置
  configureWebpack: config => {
    const newResolve = {
      extensions: ["css", ".js", ".vue", ".less", ".json"], //文件优先解析后缀名顺序
      alias: {
        /*  "vue": "vue/dist/vue.js"
         * 运行时构建不包含模板编译器，因此不支持 template 选项，只能用 render 选项，
         * 但即使使用运行时构建，在单文件组件中也依然可以写模板，因为单文件组件的模板会在构建时预编译为 render 函数。
         * 上面一段是官方api中的解释。就是说，如果我们想使用template，我们不能直接在客户端使用npm install之后的vue
        */
        "vue": "vue/dist/vue.js",
        "@": resolve("src"),
        "@assets": resolve("src/assets"),
        "@components": resolve("src/components"),
        "@config": resolve("src/config"),
        "@pages": resolve("src/pages"),
        "@utils": resolve("src/utils"),
      }
    }
    Object.assign(config, {
      resolve: newResolve
    })
  },
  // 修改 Loader 选项
  chainWebpack: config => {
    // config.module.rule('images')
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .tap(options => {
    //     // 修改它的选项
    //     options.limit = 100;
    //     return options;
    //   })
    // 移除prefetch
    Object.keys(pages).forEach(entryName => {
      // config.plugins.delete(`prefetch-${entryName}`);
      // config.plugins.delete(`prefetch`);
    })
    if(isProduction) {
      // config.plugin('extract-css').tap(() => [{
      //   path: resolve("./dist/css"),
      //   fileName: "[name][contenthash:8].css"
      // }])
    }
    // 引入 less 全局变量
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  // 第三方插件配置
  pluginOptions: {},
  css: { /* px to rem(这里可以配置, 也可以在package.json中配置) */
    // loaderOptions: {
    //   postcss: {
    //     plugins: [
    //       require('postcss-pxtorem')({
    //         rootValue: 36,
    //         unitPrecision: 2,
    //         minPixelValue: 10,
    //         propList: ["*"],
    //         selectorBlackList: [ // 忽略转换的匹配
    //           ".ignore"
    //         ],
    //         exclude: /node_modules|.gitignore/i
    //       })
    //     ]
    //   }
    // }
  },
}
function addStyleResource (rule) {
  rule.use('style-resource')
  .loader('style-resources-loader')
  .options({
    patterns: [
      resolve('./src/assets/css/theme.less'),
    ]
  })
}