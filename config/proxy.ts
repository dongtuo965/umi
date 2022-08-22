export default {
  dev:{
    '/api': {
      'target': 'http://192.168.0.197:8888/',
      'changeOrigin': true,
      // 'pathRewrite': { '^/api' : '' },
    },
  },
  test:{
    '/api': {
      'target': 'http://192.168.0.197:8888/',
      'changeOrigin': true,
      // 'pathRewrite': { '^/api' : '' },
    },
  }
}
