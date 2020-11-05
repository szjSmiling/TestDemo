const path = require('path')
const glob = require("glob");

const resolve = function (dir) {
  return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === "production";

function proxyHandler () {
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
const pages = {};
glob.sync('./src/pages/**/main.js').forEach(path => {
  const entryKey = path.split('./src/pages/')[1].split('/')[0];
  pages[entryKey] = {
    entry: path,
    template: './public/index.html',
    filename:  process.env.NODE_ENV === 'production' ? resolve(`dist/${entryKey}.html`) : `${entryKey}.html`
  }
})

module.exports = {
  publicPath: '/', // 根路经  './'相对路径
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录（js,css,img,fonts）
  lintOnSave: true, // 是否开启eslint保存监测，有效值：true  ||  false  ||  'error'
  runtimeCompiler: false, // use the full build with in-browser compiler?
  productionSourceMap: false, // 打包不生成 js.map 文件
  pages,
  devServer: {
    host: proxyHandler().localHost,
    port: proxyHandler().localPort,
    open: true,
    https: false,
    hot: true, // 启动 HMR 热更新, 某些模块无法热更新时, 刷新页面
    hotOnly: false, // 某些模块无法热更新时, 不刷新页面, 控制台输出报错
    proxy: proxyHandler().proxy
  },
  // 调整内部的 webpack 配置
  configureWebpack: config => {
    const newResolve = {
      extensions: ["css", ".js", ".vue", ".less", ".json"], //文件优先解析后缀名顺序
      alias: {
        "@": resolve("src"),
        "@assets": resolve("src/assets"),
        "@components": resolve("src/components"),
        "@pages": resolve("src/pages"),
        "@utils": resolve("src/utils"),
      }
    }
    if (process.env.NODE_ENV === 'production') {
      // 生产环境配置
    } else {
      // 开发环境配置
    }
    Object.assign(config, {
      // externals: {
      //   vue: 'Vue',
      //   vuex: 'Vuex',
      //   'vue-router': 'VueRouter',
      //   axios: 'axios',
      //   vant: 'vant'
      // },
      resolve: newResolve,
    })
  },
  // 修改 Loader 选项
  chainWebpack: config => {
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