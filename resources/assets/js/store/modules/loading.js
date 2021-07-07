const state = {
  refCount: 0,
  loading: false,
};

const getters = {
  getLoadingStatus(state) {
    return state.loading;
  },
};
const mutations = {
  LoadingStart(state) {
    state.loading = true
  },
  LoadingEnd(state) {
    state.loading = false
  },

};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
