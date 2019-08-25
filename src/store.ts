import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},

  },
  mutations: {
    addUser(state, userPayload) {
      state.currentUser = { ...userPayload };
    },
  },
  actions: {
    addUser(context, userPayload) {
      context.commit('addUser', userPayload);
    },
  },
});
