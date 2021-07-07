import router from "../../routes/router";

const state = {
  adminPartners: [],
};

const getters = {
  getAdminPartners(state) {
    return state.adminPartners;
  },
  getAdminPartnersCurrentPage(state) {
    return state.adminPartners.current_page;
  },
  getAdminPartnersLastPage(state) {
    return state.adminPartners.last_page;
  },
  filterAdminPartnerById: (state) => (id) => {
    return state.adminPartners.data.find(partner => partner.id === id)
  },


};
const mutations = {
  setAdminPartners(state, data) {
    state.adminPartners = data;
  },
};

const actions = {

  adminPartnersPagination({commit}, payload) {
    axiosnls.get('api-admin/partners/' + payload.pagination + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      let partners = response.data['partners'];
      commit('setAdminPartners', partners);
    }).catch(error => {
      console.error(error);
    });
  },
  adminPartnersSearch({commit}, payload) {
    axiosnls.get('api-admin/partners/' + payload.pagination+'/search/'+ payload.search + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      let partners = response.data['partners'];
      commit('setAdminPartners', partners);
    }).catch(error => {
      console.error(error);
    });
  },

  adminCreatePartner({commit}, payload) {
    axiosapp.post('api-admin/partner/create',payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      router.push({name:'adminPartners'});
    }).catch(error => {
      console.error(error);
    });
  },

  adminUpdatePartner({commit}, payload) {
    axiosapp.put('api-admin/partner/update',payload, {
      headers: AuthHeader
    }).then(response => {
      commit('setRefreshStatus', true);
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('resetErrors');
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
