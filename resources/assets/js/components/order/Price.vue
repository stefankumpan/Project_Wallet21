<template>
    <div class="wrapper">
        <app-packages v-if="!buyProcessStatus"></app-packages>
        <app-buy-form v-if="buyProcessStatus && isAuthorized"></app-buy-form>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import mixins from "../../utility/mixins";
  import Packages from './Packages'
  import BuyFormu from './Checkout'


  export default {
    name: "Packages",
    mixins: [mixins],
    computed: mapGetters({
      packages: 'getPackages',
      selectedPackage: 'getSelectedPackage',
      buyProcessStatus: 'getBuyProcessStatus',
      isAuthorized: 'getIsAuthorizedStatus',
    }),
    components: {
      'app-packages': Packages,
      'app-buy-form': BuyFormu,
    },
    methods: {},
    created() {
      this.$store.dispatch('loadPackages');
    }
  }
</script>
