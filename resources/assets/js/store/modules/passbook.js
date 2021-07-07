import router from "../../routes/router";

const state = {};

const getters = {};
const mutations = {};

const actions = {
  //Create Passbook - Erstellt Sparkonto
  createPassbook({commit}, payload) {
    axiosapp.post('api/passbook/create', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setRefreshStatus', true);
      router.push({name: 'dashboard'});
    }).catch(error => {
      console.error(error)
    })
  },
  //Update Passbook - Sparkonto Aktualisieren
  updatePassbook({commit}, payload) {
    axiosapp.put('api/passbook/update', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setRefreshStatus', true);
      router.push({name: 'dashboard'});
    }).catch(error => {
      let errors = error.response.data;
      commit('setErrors', errors);
    })
  },
  //Update Passbook Current Status - Sparkonto Status Aktualisieren
  updatePassbookCurrentStatus({commit}, payload) {
    axiosapp.put('api/passbook/updatecurrentstatus', payload, {
      headers: AuthHeader,crossdoamin:true,
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setRefreshStatus', true);
      commit('setInfoMessage', msg);
      router.push({name: 'dashboard'});
    }).catch(error => {
      let errors = error.response.data;
      commit('setErrors', errors);
    })
  },
  // delete Passbook - Sparkonto Löschen
  deletePassbook({commit}, payload) {
    axiosapp.delete('api/passbook/delete', {
      headers: AuthHeader,
      data: payload
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setRefreshStatus', true);
      router.push({name: 'dashboard'})
    }).catch(error => {
      console.error(error);
    })
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
