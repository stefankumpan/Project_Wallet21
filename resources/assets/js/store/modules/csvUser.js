import router from "../../routes/router";

const state = {
  csvExport: {},
};

const getters = {
  getCsvExport(state){
    return state.csvExport;
  }
};
const mutations = {

  setCsvExport(state,payload){
    state.csvExport = payload
  }

};

const actions = {
  importCSV({commit}, payload) {
    axiosapp.post('api/csv-import', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setRefreshStatus', true);
      commit('setInfoMessage', msg);
     router.go(-1);
    }).catch(error => {
      let errors = error.response.data;
      commit('setErrors', errors);
    });
  },
  exportCSV({commit},payload){
    axiosapp.post('api/csv-export', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      let bks = response.data['bookingRecords'];
      commit('setCsvExport', bks);
      commit('setInfoMessage', msg);
    }).catch(error => {
      let errors = error.response.data;
      commit('setErrors', errors);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
