import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入共用sass
import '@/assets/scss/main.scss'

// 引入fontawesome
import '@/plugin/fontawesome.js'

// 引入 element
import '@/plugin/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
