import router from "../../routes/router";

const state = {

  bookingRecords: [],
};

const getters = {

  getBookingRecords: (state) => {
    return state.bookingRecords;
  },
  getCurrentPage(state) {
    return state.bookingRecords.current_page;
  },
  getLastPage(state) {
    return state.bookingRecords.last_page;
  },

  filterBookingRecordsById: (state) => (id) => {
    return state.bookingRecords.data.find(bk => bk.id === id)
  }


};
const mutations = {
  setSingleBookingRecord(state, data) {
    state.singleBookingRecord = data;
  },
  setBookingRecords(state, data) {
    state.bookingRecords = data;
  },
};

const actions = {

  createBookingRecord({commit}, payload) {
    axiosnls.post('api/booking-record/create', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setRefreshStatus', true);
      router.go(-1);
    }).catch(error => {
      let errors = error.response.data;
      commit('setErrors', errors);
    });
  },
  updateBookingRecord({commit}, payload) {
    axiosnls.put('api/booking-record/update', payload, {
      headers: AuthHeader
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setRefreshStatus', true);
      router.go(-1);
    }).catch(error => {
      let errors = error.response.data;
      commit('setErrors', errors);
    });
  },
  deleteBookingRecord({commit}, payload) {
    axiosnls.delete('api/booking-record/delete',  {
      headers: AuthHeader,
      data: payload
    }).then(response => {
      let msg = response.data['infoMsg'];
      commit('setInfoMessage', msg);
      commit('setRefreshStatus', true);
      router.go(-1);
    }).catch(error => {
      console.error(error);
    });
  },


  bookingRecordsPagination({commit}, payload) {
    axiosnls.get('api/booking-records/' + payload.pagination + '/' + payload.accountId + '/' + payload.categoryId + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      let data = response.data;
      commit('setRefreshStatus', false);
      commit('setBookingRecords', data['bookingRecords']); // set BookingRecords State
    }).catch(error => {
      console.error(error);
    });
  },
  bookingRecordsSearch({commit}, payload) {
    //
    axiosnls.get('api/booking-records/' + payload.pagination + '/' + payload.accountId + '/' + payload.categoryId + '/s/' + payload.search + '?page=' + payload.page, {
      headers: AuthHeader
    }).then(response => {
      let data = response.data;
      commit('setRefreshStatus', false);
      commit('setBookingRecords', data['bookingRecords']); // set BookingRecords State
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


