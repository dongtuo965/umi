// 路由文件
// 所有的路由在这里配置

export default [
    { path: '/login', component: '@/pages/login/Login.tsx' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', redirect: '/login' },
        { path: '/user/:id?', component: '@/pages/user/User.tsx', title:'用户',
          wrappers: [
            '@/wrappers/auth',
          ], },
        { component:'@/pages/notFind/Index.tsx' },
      ],
    },
    { component:'@/pages/notFind/Index.tsx' },
  ]

