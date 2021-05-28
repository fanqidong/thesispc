module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/thesispc/dist/" : "/",
  css: {
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      less: {
        javascriptEnabled: true, //less 配置
      },
    },
  },
};
