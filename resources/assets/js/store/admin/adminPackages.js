import router from "../../routes/router";

const state = {
  adminPackages: [],
};

const getters = {
  getAdminPackages(state) {
    return state.adminPackages;
  },
  getAdminPackagesCurrentPage(state) {
    return state.adminPackages.current_page;
  },
  getAdminPackagesLastPage(state) {
    return state.adminPackages.last_page;
  },
  filterAdminPackageById: (state) => (id) => {
    return state.adminPackages.data.find(p => p.id === id)
  },


};
const mutations = {
  setAdminPackages(state, data) {
    state.adminPackages = data;
  },
};

const actions = {

  adminPackagesPagination({commit}, payload) {
    axiosnls.get('api-admin/packages/' + payload.pagination + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      let packages = response.data['packages'];
      commit('setAdminPackages', packages);
    }).catch(error => {
      console.error(error);
    });
  },

  adminCreatePackage({commit}, payload) {
    axiosapp.post('api-admin/package/create',payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('resetErrors');
      router.push({name:'adminPackages'})
    }).catch(error => {
      console.error(error);
    });
  },
  adminUpdatePackage({commit}, payload) {
    axiosapp.put('api-admin/package/update',payload, {
      headers: AuthHeader
    }).then(response => {
      // commit('setRefreshStatus', true);
      commit('resetErrors');
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
    }).catch(error => {
      console.error(error);
    });
  },
  adminDeletePackage({commit}, payload) {
    axiosapp.delete('api-admin/package/delete', {
      headers: AuthHeader,
      data:payload
    }).then(response => {
      // commit('setRefreshStatus', true);
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      router.push({name:'adminPackages'})
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
