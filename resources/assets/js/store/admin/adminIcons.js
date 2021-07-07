import router from "../../routes/router";

const state = {
  adminIcons: [],
  Roles: [],
};

const getters = {
  getAdminIcons(state) {
    return state.adminIcons;
  },
  getAdminIconsCurrentPage(state) {
    return state.adminIcons.current_page;
  },
  getAdminIconsLastPage(state) {
    return state.adminIcons.last_page;
  },
  filterAdminIconById: (state) => (id) => {
    return state.adminIcons.data.find(icon => icon.id === id)
  },


};
const mutations = {
  setAdminIcons(state, data) {
    state.adminIcons = data;
  },
};

const actions = {

  adminLoadIcons({commit}, payload) {
    axiosnls.get('/api-admin/icons/' + payload, {
      headers: AuthHeader
    }).then(response => {
      let icons = response.data['icons'];
      commit('setAdminIcons', icons);
    }).catch(error => {
      console.error(error);
      localStorage.clear();
      router.go({
        name: 'dashboard'
      })
    });
  },
  adminIconsPagination({commit}, payload) {
    axiosnls.get('api-admin/icons/' + payload.pagination + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      commit('setRefreshStatus', true);
      let icons = response.data['icons'];
      commit('setAdminIcons', icons);
    }).catch(error => {
      console.error(error);
    });
  },
  adminCreateIcon({commit}, payload) {
    axiosapp.post('api-admin/icon/create', payload, {
      headers: AuthHeader
    }).then(response => {
      commit('setRefreshStatus', true);
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      router.push({name: 'adminIcons'});
    }).catch(error => {
      console.error(error);
    });
  },

  adminUpdateIcon({commit}, payload) {
    axiosapp.put('api-admin/icon/update', payload, {
      headers: AuthHeader
    }).then(response => {
      commit('setRefreshStatus', true);
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
    }).catch(error => {
      console.error(error);
    });

  }, adminDeleteIcon({commit}, payload) {
    axiosapp.delete('api-admin/icon/delete',  {
      headers: AuthHeader,
      data:payload
    }).then(response => {
      commit('setRefreshStatus', true);
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      router.push({name: 'adminIcons'});
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
