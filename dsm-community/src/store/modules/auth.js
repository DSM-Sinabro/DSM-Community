import * as types from '../mutation-types'

const state = {
  jwt: '',
  isLogin: false
}

const getters = {
  getJWT: state => state.jwt
}

const actions = {
  authUser ({commit}, payload) {
    this.$http.post('/auth/login', JSON.stringify({name: payload.email, password: payload.pw}), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      commit(types.SET_JWT, {jwt: response.data.jwt})
    }).catch(function (error) {
      console.log(error)
    })
  }
}

const mutations = {
  [types.SET_JWT] (state, payload) {
    state.jwt = payload.jwt
    state.isLogin = true
  }
}