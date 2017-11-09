// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueValidator from 'vue-validator'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar/dist/index.js'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false
// Vue.use(VueValidator)
Vue.use(vueEventCalendar, {locale: 'ko'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
