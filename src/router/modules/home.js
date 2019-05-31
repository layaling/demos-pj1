export default [
// 登录
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'home'
    },
    component: () => import(/* webpackChunkName: "view-[request]" */ `../../views/Home.vue`)
  }
]  
