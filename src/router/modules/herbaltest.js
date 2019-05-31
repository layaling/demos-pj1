export default [
  // 登录
  {
    path: '/herbalDrug',
    name: 'herbalDrug',
    meta: {
      title: 'herbalDrug'
    },
    component: () => import(/* webpackChunkName: "view-[request]" */ `../../views/dragherbal.vue`)
  }
]
