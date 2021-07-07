import router from '../../routes/router'
import moment from 'moment'

const state = {
  token: '',
  isAuthorized: false,
  userStatus: 'guest',
  forgotPasswordSend: false,
  forgotPasswordMessage: '',
  resetPasswordData: [],
};

const getters = {
  getClient(state) {
    return state;
  },
  getToken(state) {
    return state.token;
  },
  getUserStatus(state) {
    return state.userStatus;
  },
  getIsAuthorizedStatus(state) {
    return state.isAuthorized;
  },
  getForgotPasswordSend(state) {
    return state.forgotPasswordSend;
  },
  getForgotPasswordMessage(state) {
    return state.forgotPasswordMessage;
  },
  getResetPasswordData(state) {
    return state.resetPasswordData;
  },

};
const mutations = {
  //set the Token - setzt den token
  setToken(state, payload) {
    state.token = payload;
  },
  //set the group  - setzt die Gruppe von User
  setUserStatus(state, payload) {
    state.userStatus = payload;
  },
  //set the Authrized Status - Setzt den Authrized Status
  setIsAuthorizedStatus(state, payload) {
    state.isAuthorized = payload;
  },
  setForgotPasswordSend(state, payload) {
    state.forgotPasswordSend = payload;
  },
  setForgotPasswordMessage(state, payload) {
    state.forgotPasswordMessage = payload;
  },
  setResetPasswordData(state, payload) {
    state.resetPasswordData = payload;
  },

};

const actions = {

  //Handle SignUp User
  handleSignUp({commit}, payload) {
    axiosapp.post('api/signup', payload)
      .then(response => {
        // info from response Token,Expires,Msg and set the Stats - Infos vom Response und setz die states
        let token = response.data['token'];
        let expireDate = response.data['expire'];
        let userStatus = response.data['userStatus'];
        localStorage.setItem('token', token);
        localStorage.setItem('expire', expireDate);
        localStorage.setItem('newUser', 'true');
        commit('setIsAuthorizedStatus', true);
        commit('setToken', token);
        commit('setUserStatus', userStatus);
        router.go({name: 'dashboard'});
      })
      .catch(error => {
        let errors = error.response.data;
        commit('setErrors', errors);
      });
  },
  // Handle SignIn User
  handleSignIn({commit}, payload) {
    axiosapp.post('api/signin', payload)
      .then(response => {
          // info from response Token,Expires,Msg and set the Stats - Infos vom Response und setz die states
          let token = response.data['token'];
          let expireDate = response.data['expire'];
          let userStatus = response.data['userStatus'];
          commit('setIsAuthorizedStatus', true);
          commit('setToken', token);
          commit('setUserStatus', userStatus);
          localStorage.setItem('token', token);
          localStorage.setItem('expire', expireDate);
          AuthHeader = {'Authorization': token};
          router.push({name: 'home'});
        }
      )
      .catch(error => {
        let errors = error.response.data;
        commit('setErrors', errors);
      });
  },
  // Handle Password Forgot Mail
  handleForgotPassword({commit}, payload) {
    axiosapp.post('api/forgot-password/create', payload)
      .then(response => {
        let msg = response.data['message'];
        commit('setForgotPasswordMessage', msg);
        commit('setForgotPasswordSend', true);
      })
      .catch(error => {
        let errorMSG = error.response.data['message'];
        commit('setForgotPasswordMessage', errorMSG);
      });
  },
  // Handle get Reset Token and Check if is valid
  handlePasswordResetToken({commit}, payload) {
    axiosapp.get('api/reset-password/' + payload)
      .then(response => {
        let data = response.data;
        commit('setResetPasswordData', data);
      })
      .catch(error => {
        let errorMSG = error.response.data['message'];
        commit('setForgotPasswordMessage', errorMSG);
      });
  },
  handlePasswordReset({commit}, payload) {
    axiosapp.post('api/reset-password', payload)
      .then(response => {
        let msg = response.data['infoMsg'];
        commit('setInfoMessage', msg);
        router.push({name: 'signin'});
      })
      .catch(error => {
        let errorMSG = error.response.data['message'];
        commit('setForgotPasswordMessage', errorMSG);
      });
  },

  clientLogOut({commit}) {
    router.go({name: 'signin'});
    commit('setIsAuthorizedStatus', false);
    commit('setToken', '');
    localStorage.clear();
    axiosapp.post('api/logout', {
      headers: AuthHeader
    }).then(response => {
    }).catch(error => {
      console.error(error);
      commit('setLoadingStatus', false);
    })
  },
  setClientAtStart({commit}) {
    let expire = localStorage.getItem('expire');
    let token = localStorage.getItem('token');
    let today = moment().format('YYYY-MM-DD');
    if (token && expire) {
      if (expire > today) {
        axiosapp.post('api/check-token', token, {
          headers: AuthHeader
        }).then(response => {
          let userStatus = response.data['userStatus'];
          commit('setUserStatus', userStatus);
          commit('setIsAuthorizedStatus', true);
          commit('setToken', token);
          router.push({name: 'dashboard'});
        }).catch(error => {
          console.error(error);
          localStorage.clear();
        })
      } else {
        localStorage.clear();
      }
    } else {
      state.token = '';
      state.isAuthorized = false;
      localStorage.clear();
    }
  },
};


export default {
  state,
  getters,
  mutations,
  actions
}
