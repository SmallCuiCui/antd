const theme = require("./theme")
const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
	// 装饰器
   addDecoratorsLegacy(),
   // 按需加载的插件
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true
   }),
   // 自定义主题
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: theme
   })
 );