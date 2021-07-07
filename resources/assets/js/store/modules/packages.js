import router from "../../routes/router";

const state = {
  packages: {},
  selectedPackage:null,
  buyProcessStatus: false,
};

const getters = {
  getPackages(state){
    return state.packages
  },
  getSelectedPackage(state){
    return state.selectedPackage
  },
  getBuyProcessStatus(state){
    return state.buyProcessStatus
  },
  filterPackageById: (state) => (id) => {
    return state.packages.find(single => single.id === id)
  },
};
const mutations = {
  setPackages(state, data) {
    state.packages = data;
  },
  setSelectedPackage(state, data) {
    state.selectedPackage = data;
  },
  setBuyProcessStatus(state,data){
     state.buyProcessStatus = data;
  }
};

const actions = {
  loadPackages({commit}){
    axiosapp.get('api/packages').then(response => {
      let packages = response.data['packages'];
      // console.log(packages);
      commit('setPackages', packages);
    }).catch(error => {
      console.error(error)
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
