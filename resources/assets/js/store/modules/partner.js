import router from "../../routes/router";

const state = {
  partner: {},

};

const getters = {
  getPartner(state) {
    return state.partner
  },

};
const mutations = {
  setPartner(state, data) {
    state.partner = data;
  }
};

const actions = {
  loadPartner({commit}, payload) {
    axiosapp.get('api/partner/', {
      headers: AuthHeader
    }).then(response => {
      let partner = response.data['partner'];
      commit('setPartner', partner);
    }).catch(error => {
      console.error(error);
      router.push({name: 'dashboard'})
    })
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
