import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'

Vue.use(FlagIcon)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
