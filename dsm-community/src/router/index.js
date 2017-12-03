import Vue from 'vue'
import Router from 'vue-router'
import Main from '../containers/Main'
import SignUp from '../containers/SignUp'
import Notice from '../containers/Notice'
import Login from '../containers/Login'
import ModifiedInformation from '../components/Modify'
import MyPage from '../containers/MyPage'
<<<<<<< HEAD
=======
import ChangePassword from '../components/ChangePassword'
>>>>>>> a8c123c356e9388e51f6a84ee133b63264b8ed82
import Post from '../containers/Post'

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
      path: '/post/:category',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mypage/modify',
      name: 'ModifiedInformation',
      component: ModifiedInformation
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage
    },
    {
<<<<<<< HEAD
=======
      path: '/mypage/changepassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
>>>>>>> a8c123c356e9388e51f6a84ee133b63264b8ed82
      path: '/post',
      name: 'Post',
      component: Post
    }
  ]
})
