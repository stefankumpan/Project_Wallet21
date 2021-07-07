import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


//modules imports
import client from './modules/client';
import settings from './modules/settings';
import icons from './modules/icons';
import loading from './modules/loading';

import dashboard from './modules/dashboard';
import account from './modules/account';
import category from './modules/category';
import bookingRecords from './modules/bookingRecords';
import passbook from './modules/passbook';
import csvUser from './modules/csvUser';
import user from './modules/user';
import packages from './modules/packages';
import order from './modules/order';
import partner from './modules/partner';
//Admin modules import
import adminOverview from './admin/adminOverview'
import adminUsers from './admin/adminUsers'
import adminIcons from './admin/adminIcons'
import adminOrders from './admin/adminOrders'
import adminPackages from './admin/adminPackages'
import adminPartners from './admin/adminPartners'

export default new Vuex.Store({
  strict: true,
  state: {
    errors: {},
    infoMessage: [],
  },
  getters: {
    getErrors(state) {
      return state.errors['errors'];
    },
    getErrorMessage(state) {
      return state.errors['message'];
    },
    getInfoMessage(state) {
      return state.infoMessage;
    }
  }, mutations: {
    setErrors(state, errors) {
      state.errors = errors;
    },
    resetErrors(state) {
      state.errors = [];
    },
    setInfoMessage(state, data) {
      state.infoMessage.push(data);
    },
    deleteInfoMessage(state, data) {
      state.infoMessage.splice(data, 1);
    },
  },
  actions: {}, modules: {
    client, settings, loading, icons, user, dashboard, account, category, bookingRecords, passbook, csvUser,
    packages, order, partner,
    //Admin Modules
    adminOverview, adminUsers, adminIcons, adminOrders, adminPackages, adminPartners
  }
});
