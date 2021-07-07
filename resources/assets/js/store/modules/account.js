import router from "../../routes/router";

const state = {
  account: [],
  categories: [],
};

const getters = {
  getAccount: (state) => {
    return state.account;
  },
  getAccountCurrency(state) {
    return state.account.currency;
  },
  getAccountId(state) {
    return state.account.id;
  },

  // filterAccountById: (state) => (id) => {
  //   return state.ac.data.find(bk => bk.id === id)
  // },
  getCategories: (state) => {
    return state.categories;
  },

};

const mutations = {
  setAccount(state, data) {
    state.account = data;
  },

  setCategories(state, data) {
    state.categories = data;
  },

};

const actions = {
  //Create new Account - neues Konto erstellen
  createAccount({commit}, payload) {
    axiosapp.post('api/account/create', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setRefreshStatus', true);
      router.go(-1)
    }).catch(error => {
      console.error(error);
    })
  },
  //Update Account - Konto Aktualisieren
  updateAccount({commit}, payload) {
    let id = payload.id;
    axiosapp.put('api/account/update', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      let acc = response.data['account'];
      commit('setInfoMessage', msg);
      commit('setAccount', acc);
      commit('setRefreshStatus', true);
      router.push({name: 'accountShow', params: {id: id}})
    }).catch(error => {
      console.error(error)
    })
  },
  // delete Account - Konto Löschen
  deleteAccount({commit}, payload) {
    axiosapp.delete('api/account/delete', {
      headers: AuthHeader,
      data: payload
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      router.push({name: 'dashboard'})
    }).catch(error => {
      console.error(error);
    })
  },
  //Load Account - Konto Laden
  loadAccount({commit}, payload) {
    axiosapp.get('/api/account/' + payload, {
      headers: AuthHeader
    }).then(response => {
      let data = response.data;
      //Save Account Data in create - Speichert die Daten in create
      commit('setAccount', data['account']);
      commit('setCategories', data['categories']);
      commit('setRefreshStatus', false);
    }).catch(error => {
      console.error(error);
      router.push({name: 'home'})
    });
  },
};


export default {
  state,
  getters,
  mutations,
  actions
}
