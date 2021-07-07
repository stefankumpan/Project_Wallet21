<template>
    <div>
        <div class="user-profile">
            <h2>Partner</h2>
            <ul class="user-partner-info">

                <li class="revenue">
                    <span>Einnahmen diesen Monat</span>
                    <span class="highlight">{{formatCurrency(partner.revenue_month,'EUR')}}</span>
                </li>
                <li class="revenue">
                    <span>Gesamteinnahmen</span>
                    <span class="highlight">{{formatCurrency(partner.revenue_total,'EUR')}}</span>
                </li>

                <li>
                    <span>Partner Name:</span>
                    <span class="highlight">{{partner.name}}</span>
                </li>
                <li>
                    <span>Partner E-Mail:</span>
                    <span class="highlight">{{partner.email}}</span>
                </li>
                <li>
                    <span>Partner Key:</span>
                    <span class="share-key">{{partner.key}}</span>
                </li>
                <li>
                    <span>Partner Link:</span>
                    <span class="share-key">{{partner.link}}</span>
                </li>

                <li>
                    <span>Partner Anteil in Prozent</span>
                    <span>{{partner.share}}%</span>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import _ from 'lodash'
  import mixins from "../../../utility/mixins";

  export default {
    name: "Partner",
    mixins: [mixins],
    computed: mapGetters({
      partner: 'getPartner',
    }),
    data() {
      return {}
    },
    created() {
      this.$store.commit('resetErrors');
      this.$store.dispatch('loadPartner');
    }
  }
</script>
