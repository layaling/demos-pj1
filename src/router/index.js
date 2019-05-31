import Vue from 'vue'
import ElementUI from 'element-ui'
import Router from 'vue-router'
import RouterConfig from './modules'

Vue.use(Router)
Vue.use(ElementUI)
const router = new Router({
// mode: 'history',
  base: process.env.BASE_URL,
  routes: RouterConfig
})
  
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log(next)
  window.document.title = to.meta.title
  next()
})
  
router.afterEach((to, from) => {
  // console.log(to)
  // console.log(from)
  
  window.scrollTo(0, 0)
})

export default router
