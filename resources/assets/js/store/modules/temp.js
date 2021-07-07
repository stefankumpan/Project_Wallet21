const state = {
  accounts: {},

};

const getters = {};
const mutations = {
  setDashboardItems(state, data) {
    state.dashboard.accounts.push(data);
  }
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
