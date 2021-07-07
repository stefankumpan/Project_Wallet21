import router from "../../routes/router";

const state = {
  Users: [],
  Roles: [],
};

const getters = {
  getUsers(state) {
    return state.Users;
  },
  getUsersCurrentPage(state) {
    return state.Users.current_page;
  },
  getUsersLastPage(state) {
    return state.Users.last_page;
  },
  filterUserById: (state) => (id) => {
    return state.Users.data.find(user => user.id === id)
  },
  getRoles(state) {
    return state.Roles;
  },

};
const mutations = {
  setUsers(state, data) {
    state.Users = data;
  },
  setRoles(state, data) {
    state.Roles = data;
  }
};

const actions = {

  adminLoadUsers({commit}, payload) {
    axiosnls.get('/api-admin/users/' + + payload.pagination + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      let users = response.data['users'];
      let roles = response.data['roles'];
      commit('setUsers', users);
      commit('setRoles', roles);
    }).catch(error => {
      console.error(error);
      localStorage.clear();
      router.go({
        name: 'signin'
      })
    });
  },
  adminUsersPagination({commit}, payload) {
    axiosnls.get('api-admin/users/' + payload.pagination + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      commit('setRefreshStatus', true);
      let data = response.data['users'];
      commit('setUsers', data);
    }).catch(error => {
      console.error(error);
    });
  },
  adminUsersSearch({commit}, payload) {
    //
    axiosnls.get('api-admin/users/' + payload.pagination + '/s/' + payload.search + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      commit('setRefreshStatus', true);
      let data = response.data['users'];
      commit('setUsers', data);
    }).catch(error => {
      console.error(error);
    });
  },
  adminUpdateUser({commit}, payload) {
    //
    axiosnls.put('api-admin/users/update',payload, {
      headers: AuthHeader
    }).then(response => {
      commit('setRefreshStatus', true);
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setUsers', data);
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
