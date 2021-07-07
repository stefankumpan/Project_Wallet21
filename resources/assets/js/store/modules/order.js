import router from "../../routes/router";

const state = {
  orders: {},

};

const getters = {
  getOrders(state) {
    return state.orders
  },
  getCurrentPageOrders(state) {
    return state.orders.current_page;
  },
  getLastPageOrders(state) {
    return state.orders.last_page;
  },
};
const mutations = {
  setOrders(state,data) {
     state.orders = data;
  }
};

const actions = {
  createOrder({commit}, payload) {
    axiosapp.post('api/order/create', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setBuyProcessStatus',false);
      commit('setInfoMessage', msg);
      commit('setRefreshStatus', true);
      router.push({name: 'userProfile'})
    }).catch(error => {
      let errors = error.response.data;
      commit('setErrors', errors);
    })
  },
  loadOrders({commit}, payload) {
    axiosapp.get('api/orders/user/' + payload.pagination + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      let orders = response.data['orders'];
      commit('setOrders', orders);
      // router.push({name: 'dashboard'})
    }).catch(error => {
      let errors = error.response.data;
      commit('setErrors', errors);
    })
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
