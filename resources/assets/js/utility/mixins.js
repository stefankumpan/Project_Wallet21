import moment from 'moment';

export default {
  methods: {
    // Format Date to Year Month Day
    formatDateYMD(date) {
      return moment(date).format('YYYY/MM/DD');
    },
    // Format Date to Day Month Year
    formatDateDMY(date) {
      return moment(date).format('DD.MM.YYYY');
    },
    // Back Button Handle go Back
    handleGoBack() {
      this.$router.go(-1);
    },
    // Back to Dashboard
    handleGoDashboard() {
      this.$router.push({name: 'dashboard'});
    },
    // Back to Admin Overview
    handleGoAdminOverview() {
      this.$router.push({name: 'adminOverview'});
    },
    // Format Currency - Default EUR
    formatCurrency(value, currency = 'EUR') {
      //return value.toLocaleString('de-DE', {style: 'currency', currency: icon}); // format Currency - Formatiert die Währung
      return Intl.NumberFormat('de-DE', {style: 'currency', currency: currency}).format(value); // format Currency - Formatiert die Währung
    },
    // Replace hyphen
    spaceToHyphen(value) {
      return value.replace(/\s+/g, '-'); // replace space with hyphen "-" with regex - ersetztst space mit bindestrich
      // return value.split(" ").join("-").toLowerCase(); // without regex
    },

    // Calculation Discount for Packages
    calculationDiscount(price, discount) {
      if (price <= 0 || discount <= 0) {
        return 0
      }
      if (price === discount) {
        return 0
      }
      let percent = (discount * 100) / price;
      return (100 - percent);
    },
    //Calculation Procent for Procress Bar
    calcProcent(value, total, decimals) {
      if (value === 0) {
        return 0;
      }
      if (value < 0) {
        let value = value = value * -1;
      }
      if (total < 0) {
        let value = total = total * -1;
      }
      let newValue = ((value * 100) / total);

      return Number(Math.round(newValue + 'e' + decimals) + 'e-' + decimals);
    },

    // round number
    round(value, decimals) {
      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    },

    // get Cookie
    getCookie(name) {
      let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) return match[2]
    }

  },


};


