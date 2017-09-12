/*
	webpack插件的组成：

	一个JavaScript命名函数。
	在它的原型上定义一个apply方法。
	指定挂载的webpack事件钩子。
	处理webpack内部实例的特定数据。
	功能完成后调用webpack提供的回调。

	compiler 对象代表了完整的 webpack 环境配置。
	这个对象在启动 webpack 时被一次性建立，并在所有可操作的设置中被配置，包括原始配置，loader 和插件。
	当在 webpack 环境中应用一个插件时，插件将收到一个编译器对象的引用。可以使用它来访问 webpack 的主环境。

	compilation 对象代表了一次单一的版本构建和生成资源。
	当运行 webpack 开发环境中间件时，每当检测到一个文件变化，一次新的编译将被创建，从而生成一组新的编译资源。
	一个编译对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。编译对象也提供了很多关键点回调供插件做自定义处理时选择使用。

*/
// 命名函数
function HelloWorldPlugin() {

};
HelloWorldPlugin.prototype.apply = function(compiler) {
  // 指定挂载的webpack事件钩子。
  compiler.plugin('webpacksEventHook', function(compilation /* 处理webpack内部实例的特定数据。*/, callback) {
    console.log("This is an example plugin!!!");
    // 功能完成后调用webpack提供的回调。
    callback();
  });
};
module.exports = HelloWorldPlugin;