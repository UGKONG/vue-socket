import Vue from 'vue';
import Vuex from 'vuex';
import Icon from './Icon';
import io from '../../back/node_modules/socket.io/client-dist/socket.io';

const socket = io();

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    socket,
    Icon,
    number: 0
  },
  mutations: {
    setNumber: (state, payload) => state.number = payload,
  },
  actions: {
    setNumber: ({ commit }, payload) => commit('setNumber', payload),
  }
});

export const eventBus = new Vue({
  methods: {

  }
});

export default store;
