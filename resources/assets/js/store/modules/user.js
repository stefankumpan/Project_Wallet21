import router from "../../routes/router";

const state = {
  user: {},
  userEditMode:false,
};

const getters = {
  getUser: (state) => {
    return state.user;
  },
  getUserEditMode: (state) => {
    return state.userEditMode;
  },

};
const mutations = {
  setUser(state, data) {
    state.user = data;
  },
  setUserEditMode: (state,data) => {
     state.userEditMode = data;
  },
};

const actions = {
  loadUser({commit}) {
    axiosapp.get('api/user/', {
        headers: {
          common: {
            'Authorization': localStorage.getItem('token'),
          }
        }
      }
    ).then(response => {
      let data = response.data;
      commit('setUser', data['user']);
    }).catch(error => {
      console.error(error);
      router.push({name: 'dashboard'})
    });
  },
  updateUser({commit},payload) {
    axiosapp.put('api/user/update',payload, {
        headers: {
          common: {
            'Authorization': localStorage.getItem('token'),
          }
        }
      }
    ).then(response => {
      let data = response.data;
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setUser', data['user']);
      commit('setUserEditMode', false);
    }).catch(error => {
      console.error(error);
    });
  },
  updateUserPassword({commit},payload) {
    axiosapp.put('api/user/password-update',payload, {
        headers: {
          common: {
            'Authorization': localStorage.getItem('token'),
          }
        }
      }
    ).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      router.push({name: 'dashboard'})
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
