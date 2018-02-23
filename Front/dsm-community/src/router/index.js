import Vue from 'vue'
import Router from 'vue-router'
import Main from '../containers/Main'
import SignUp from '../containers/SignUp'
import Post from '../containers/Post'
import Login from '../containers/Login'
import ModifiedInformation from '../components/Modify'
import MyPage from '../containers/MyPage'
import ChangePassword from '../components/ChangePassword'
import Writing from '../containers/Writing'
import PostDetail from '../containers/PostDetail'

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
      name: 'Post',
      component: Post,
      children: [
        {
          path: ':id',
          name: 'PostDetail'
        }
      ]
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
      path: '/mypage/changepassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/writing',
      name: 'Writing',
      component: Writing
    },
    {
      path: '/PostDetail/',
      name: 'PostDetail',
      component: PostDetail
    }
  ]
})
