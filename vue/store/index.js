import {
  singIn
} from '@/api'

const cookieparser = process.server ? require('cookieparser') : undefined


export const state = () => ({
  token: null
});

export const getters = {
  hasToken: state => !!state.token,
  getToken: state => state.token
};

export const actions = {
  nuxtServerInit({commit}, context) {
    console.log('nuxt server init')
    let req = context.ssrContext.req;
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        token = parsed.token
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setToken', token)
  },
  async login({commit, auth}, params) {
    const res = await singIn(params.email, params.password);
    if (res.status === 200) {
      const token = res.data;
      commit('setToken', token);
    }
  },
  logout({commit}) {
    commit('clearToken')
  },
  async fetch({commit}, params) {

  }
};
export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  }
}

