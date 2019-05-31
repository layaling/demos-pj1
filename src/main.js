import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import rawDisplayer from './components/infra/raw-displayer.vue';
import { DraggableTree } from 'vue-draggable-nested-tree'

Vue.config.productionTip = false

Vue.component('rawDisplayer', rawDisplayer);
Vue.component('DraggableTree', DraggableTree);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
