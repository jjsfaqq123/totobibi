// module.exports = {
//   publicPath:process.NODE_ENV === 'production'?'/public':'./',
//   // 输出打包目录 在 npm run build时 生成文件目录名称
//   outpuDir:"dist",
//   // 放置生成静态资源(js、css、img、fonts)的(相对于outputDir的)目录
//   assetsDir:"assets",
//   //是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
//   productionSourceMap: false,
//   /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
//   filenameHashing: false,
//   /* 代码保存时进行eslint检测 */
//   lintOnSave: true,
//   /* webpack-dev-server 相关配置 */
//   devServer:{
//     //自动打开浏览器
//     open:true,
//     /* 设置为0.0.0.0则所有的地址均能访问 */
//     host: '0.0.0.0',
//     port: 8066,
//     https: false,
//     hotOnly: false,
//     /* 使用代理 */
//     proxy: {
//       '/api':{
//         changeOrigin: true,
//       }
//     }
//   }
// }