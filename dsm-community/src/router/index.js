import Vue from 'vue'
import Router from 'vue-router'
import Main from '../containers/Main'
import SignUp from '../containers/SignUp'
import Notice from '../containers/Notice'
import Login from '../containers/Login'
<<<<<<< HEAD
import ModifiedInformation from '../components/ModifiedInformation'
=======
import MyPage from '../containers/MyPage'
import ChangePassword from '../containers/ChangePassword'
>>>>>>> 84cd2a3f83e131be220ae2d5ef7821b1ad16266e

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
<<<<<<< HEAD
      path: '/modifiedinformation',
      name: 'ModifiedInformation',
      component: ModifiedInformation
=======
      path: '/mypage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/changepassword',
      name: 'ChangePassword',
      component: ChangePassword
>>>>>>> 84cd2a3f83e131be220ae2d5ef7821b1ad16266e
    }
  ]
})
