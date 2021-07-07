import router from "../../routes/router";


const state = {
  accounts: {},
  passbooks: {},
};

const getters = {
  getDashboard(state) {
    return state.accounts;
  },
  getAccounts(state) {
    return state.accounts;
  }, getPassbooks(state) {
    return state.passbooks;
  },
  getPassbookById: (state) => (id) => {
    return state.passbooks.find(passbook => passbook.id === id)
  }
  // getAccountById: (state) => () => {
  //   return state.accounts.filter(account => account.id === 2);
  // },

};
const mutations = {
  setAccounts(state, data) {
    state.accounts = data
  },
  setPassbooks(state, data) {
    state.passbooks = data
  },


};

const actions = {

  loadDashboard({commit}) {
    axiosapp.get('/api/accounts', {
      headers: AuthHeader
    }).then(response => {
      let accounts = response.data['accounts'];
      commit('setAccounts', accounts);
      commit('setRefreshStatus', false)
    }).catch(error => {
      console.error(error);
      localStorage.clear();
      router.go({
        name: 'signin'
      })
    });

    axiosapp.get('/api/passbooks', {
      headers: AuthHeader
    }).then(response => {
      let passbooks = response.data['passbooks'];
      commit('setPassbooks', passbooks);
      commit('setRefreshStatus', false)
    }).catch(error => {
      console.error(error);
      localStorage.clear();
      router.go({
        name: 'signin'
      })
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
