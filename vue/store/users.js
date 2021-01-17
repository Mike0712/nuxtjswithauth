import {
  fetchUsers,
  fetchOneUser
} from '@/api'

import {
  SSR_API_URL
} from '@/constants'

export const state = () => ({
  users: [],
  currentUser: null
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setUser(state, user) {
    state.currentUser = user
  }
}

export const actions = {
  async fetch({commit}, params) {
    let token = this.getters.getToken;
    if (params.item === 'users') {
      const users = await fetchUsers({token: token})
      commit('setUsers', users.data)
    }
    if (params.item === 'user') {
      const user = await fetchOneUser({id: params.id,token: token})
      commit('setUser', user.data)
    }
  }
}

export const getters = {
  users: state => state.users,
  currentUser: state => state.currentUser
}
