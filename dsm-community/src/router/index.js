import Vue from 'vue'
import Router from 'vue-router'
import Main from '../containers/Main'
// import Login from '../containers/Login'
import SignUp from '../containers/SignUp'
import Notice from '../containers/Notice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    }
  ]
})
