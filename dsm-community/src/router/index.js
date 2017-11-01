import Vue from 'vue'
import Router from 'vue-router'
import Main from '../containers/Main'
import Notice from '../containers/Notice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    }
  ]
})
