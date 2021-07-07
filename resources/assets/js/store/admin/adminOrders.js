import router from "../../routes/router";

const state = {
  adminOrders: [],
  Roles: [],
};

const getters = {
  getAdminOrders(state) {
    return state.adminOrders;
  },
  getAdminOrdersCurrentPage(state) {
    return state.adminOrders.current_page;
  },
  getAdminOrdersLastPage(state) {
    return state.adminOrders.last_page;
  },
  filterAdminOrderById: (state) => (id) => {
    return state.adminOrders.data.find(icon => icon.id === id)
  },


};
const mutations = {
  setAdminOrders(state, data) {
    state.adminOrders = data;
  },
};

const actions = {

  adminOrdersPagination({commit}, payload) {
    axiosnls.get('api-admin/orders/' + payload.pagination + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      commit('setRefreshStatus', true);
      let orders = response.data['orders'];
      commit('setAdminOrders', orders);
    }).catch(error => {
      console.error(error);
    });
  },
  adminOrdersSearch({commit}, payload) {
    axiosnls.get('api-admin/orders/' + payload.pagination + '/search/' + payload.search + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      commit('setRefreshStatus', true);
      let orders = response.data['orders'];
      commit('setAdminOrders', orders);
    }).catch(error => {
      console.error(error);
    });
  },

  adminUpdateOrder({commit}, payload) {
    axiosapp.put('api-admin/order/update', payload, {
      headers: AuthHeader
    }).then(response => {
      commit('setRefreshStatus', true);
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
    }).catch(error => {
      console.error(error);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
