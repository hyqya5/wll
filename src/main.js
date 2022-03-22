import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FooterBar from './components/FooterBar'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.component('FooterBar', FooterBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
