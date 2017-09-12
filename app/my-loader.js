/*
	首先在工程的node_modules下面新建一个文件夹html-template-loader，
	在里面创建一个index.js做为这个loader的js文件。这样就可以在webpack.config.js里面添加一个loader了：

	loaders 应该只做一个任务
	loaders 能够被串联调用。为每一步创建 loaders，而不是在一个 loader 中做所有事情。
*/
// const loaderUtils = require("loader-utils");
module.exports = function(source) {
  	return source;
};