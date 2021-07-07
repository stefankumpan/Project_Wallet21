import router from "../../routes/router";

const state = {
  adminOverview: {},

};

const getters = {
  getAdminOverview(state){
    return state.adminOverview;
  }

};
const mutations = {
  setAdminOverview(state,data){
     state.adminOverview = data;
  }
};

const actions = {

  loadAdminOverview({commit}) {
    axiosapp.get('/api-admin/overview', {
      headers: AuthHeader
    }).then(response => {
      let data = response.data;
      commit('setAdminOverview', data);
    }).catch(error => {
      console.error(error);
      localStorage.clear();
      router.go({
        name: 'signin'
      })
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
