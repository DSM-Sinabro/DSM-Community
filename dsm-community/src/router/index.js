import Vue from 'vue'
import Router from 'vue-router'
import Main from '../containers/Main'
import SignUp from '../containers/SignUp'
import Notice from '../containers/Notice'
import Login from '../containers/Login'
import MyPage from '../containers/MyPage'

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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage
    }
  ]
})
