
const state = {
  icons: {},

};

const getters = {
  getIcons(state) {
    return state.icons;
  }
};
const mutations = {
  setIcons(state, data) {
    state.icons = data;
  }
};

const actions = {
  loadIcons({commit}) {
    axiosapp.get('/api/icons', {
      headers: AuthHeader
    }).then(response => {
      let icons = response.data['icons'];
      commit('setIcons', icons);
    }).catch(error => {
      console.error(error);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
