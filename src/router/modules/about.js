export default [
  // 登录
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'about'
    },
    component: () => import(/* webpackChunkName: "view-[request]" */ `../../views/About.vue`)
  }
]
