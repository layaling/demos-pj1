export default [
  // 登录
  {
    path: '/base',
    name: 'base',
    meta: {
      title: 'base'
    },
    component: () => import(/* webpackChunkName: "view-[request]" */ `../../views/Base.vue`)
  }
]
