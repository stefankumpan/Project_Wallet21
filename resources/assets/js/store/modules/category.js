import router from '../../routes/router'

const state = {
  category: [],

};

const getters = {
  getCategory: (state) => {
    return state.category;
  },
};
const mutations = {
  setCategory(state, data) {
    state.category = data;
  },
};

const actions = {


  //Create Category - Kategorie erstellen
  createCategory({commit}, payload) {
    axiosapp.post('api/category/create', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setRefreshStatus', true);
      router.go(-1);

    }).catch(error => {
      let errors = error.response.data;
      commit('setErrors', errors);
    })
  },
  //Update Category - Konto Aktualisieren
  updateCategory({commit}, payload) {
    axiosapp.put('api/category/update', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setRefreshStatus', true);
      router.go(-1);

    }).catch(error => {
      let errors = error.response.data;
      commit('setErrors', errors);
    })
  },
  deleteCategory({commit}, payload) {
    axiosapp.delete('api/category/delete', {
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
  //Load Category - Kategorie Laden (Get)
  loadCategory({commit}, payload) {
    let accountId = payload.accountId;
    let categoryId = payload.categoryId;
    axiosapp.get('api/account/' + accountId + '/category/' + categoryId, {
      headers: AuthHeader
    }).then(response => {
      let data = response.data;
      commit('setCategory', data['category']);
    }).catch(error => {
      console.error(error);
      router.push({name: 'home'})
    });
  },

};

export default {
  state,
  getters,
  mutations,
  actions
}
