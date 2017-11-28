// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import VueValidator from 'vue-validator'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar/dist/index.js'
// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/flag'

// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('icon', Icon)

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
