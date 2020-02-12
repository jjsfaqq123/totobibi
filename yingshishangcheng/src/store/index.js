import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import * as mutations  from './mutations';

Vue.use(Vuex);
const state = {
  Alertstate:null,
  userHome:null,
}
export default new Vuex.Store({
  state,
  mutations,
  plugins: [createPersistedState()]
})
