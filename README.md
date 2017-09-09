webpack插件尝试
--
开发插件最重要的两个资源就是 compiler 和 compilation 对象，理解他们的是扩展Webpack重要的一步

 * compiler对象包涵了Webpack环境所有的的配置信息，这个对象在Webpack启动时候被构建，
 并配置上所有的设置选项包括 options，loaders，plugins。当启用一个插件到Webpack环境的时候，
 这个插件就会接受一个指向compiler的参数。运用这个参数来获取到Webpack环境
 * compilation代表了一个单一构建版本的物料。在webpack中间件运行时，
 每当一个文件发生改变时就会产生一个新的compilation从而产生一个新的变异后的物料集合。
 compilation列出了很多关于当前模块资源的信息，编译后的资源信息，改动过的文件，以及监听过的依赖。compilation也提供了插件需要自定义功能的回调点。
