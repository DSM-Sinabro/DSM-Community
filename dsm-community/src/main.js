import Vue from 'vue'
import App from './App'

import router from './router'
import axios from 'axios'

import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar/dist/index.js'

import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon)

Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL = 'http://13.124.15.202:8080'

Vue.config.productionTip = false

Vue.use(vueEventCalendar, {locale: 'ko'})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
