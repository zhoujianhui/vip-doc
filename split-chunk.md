splitChunks 常用参数
https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks

name 打包的 chunks 的名字
test 匹配到的模块将被打进这个缓存组
chunks 代码块类型 必须三选一： “initial”（初始化） | “all”(默认就是 all) | “async”（动态加载）默认 Webpack 4 只会对按需加载的代码做分割。如果我们需要配置初始加载的代码也加入到代码分割中，可以设置为 ‘all’
priority ：缓存组打包的先后优先级，数值大的优先
minSize （默认是30000）形成一个新代码块最小的体积
minChunks （默认是1）在分割之前，这个代码块最小应该被引用的次数
maxInitialRequests （默认是3）一个入口最大的并行请求数
maxAsyncRequests（默认是5）按需加载时候最大的并行请求数
reuseExistingChunk 如果当前的 chunk 已被从 split 出来，那么将会直接复用这个 chunk 而不是重新创建一个
enforce 告诉 webpack 忽略 splitChunks.minSize, splitChunks.minChunks, splitChunks.maxAsyncRequests and splitChunks.maxInitialRequests，总是为这个缓存组创建 chunks