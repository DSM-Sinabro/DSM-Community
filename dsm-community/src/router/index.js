import Vue from 'vue'
import Router from 'vue-router'
import Main from '../containers/Main'
<<<<<<< HEAD
=======
// import Login from '../containers/Login'
>>>>>>> 780b57c802d1518a0277b982ac3ba94eb453cc74
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
