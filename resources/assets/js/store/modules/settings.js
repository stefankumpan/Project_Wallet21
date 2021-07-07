const state = {
  colors: ["blue", "red", "green", "orange", "black", "pink"],
  currencies: [],
  refreshStatus: false,
  currencyCalculation: [],
};

const getters = {
  getColors(state) {
    return state.colors;
  },
  getRefreshStatus(state) {
    return state.refreshStatus;
  },
  getCurrencies(state) {
    return state.currencies;
  },
  getCurrencyCalculation(state) {
    return state.currencyCalculation;
  },
  filterCurrency: (state) => (key) => {
    return state.currencies.find(currency => currency === 'USD')
  }

};
const mutations = {
  setRefreshStatus(state, data) {
    state.refreshStatus = data;
  },
  setCurrencies(state, data) {
    state.currencies = data;
  },
  setCurrencyCalculation(state, data) {
    state.currencies = data;
  },
};

const actions = {
  loadCurrencies({commit}, payload) {
    exchangerates.get('latest', {
        baseURL: 'https://api.exchangeratesapi.io/',
        header: {
          common: {
            'access-control-allow-credentials': 'true',
            'access-control-allow-methods': 'GET',
            'access-control-allow-origin': '*'
          }
        }
      }
    ).then(response => {
      let data = response.data.rates;
      data['EUR'] = 1000;
      commit('setCurrencies', data);
    }).catch(error => {
      console.error(error);
    })
  },
  loadCurrencyCalculation({commit}, payload) {
    exchangerates.get('latest?base=' + payload).then(response => {
      let data = response.data.rates;
      data[payload] = 1;
      commit('setCurrencies', data);
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
