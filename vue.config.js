module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/chiens-demo/' // 將 <repository-name> 替換為你的存儲庫名稱
      : '/'
};