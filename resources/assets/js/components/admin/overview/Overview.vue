<template>
    <div class="wrapper admin-overview">
        <h2 class="admin-dashboard-headline">Admin Übersicht</h2>
        <ul class="statistic">
            <li>
                <span class="highlight">Bestellungen</span>
                <span class="highlight red">{{round(overview.ordersTotal,0)}}</span>
            </li>
            <li>
                <span class="highlight">Bestellungs Einnahmen</span>
                <span class="highlight green">{{formatCurrency(overview.ordersRevenue,'EUR')}}</span>
            </li>
            <li>
                <span class="highlight"> Angemeldet Users</span>
                <span class="highlight">{{round(overview.usersCount,0)}}</span>
            </li>
            <li>
                <span class="highlight"> Erstellte Konten </span>
                <span class="highlight">{{round(overview.accountsCount,0)}}</span>

            </li>
            <li>
                <span class="highlight">Erstellte Kategorien</span>
                <span class="highlight">{{round(overview.categoriesCount,0)}}</span>

            </li>
            <li>
                <span class="highlight"> Erstellte Buchungen</span>
                <span class="highlight">{{round(overview.bookingRecordsCount,0)}}</span>

            </li>
                      <li>
                <span class="highlight">Avg. Einnahmen Betrag</span>
                <span class="highlight green">{{round(overview.revenueAvg,2)}}</span>

            </li>
            <li>
                <span class="highlight">Avg. Ausgaben Betrag</span>
                <span class="highlight red">{{round(overview.expenditureAvg,2)}}</span>

            </li>
        </ul>
        <users-table></users-table>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import mixins from "../../../utility/mixins";
  import Users from '../users/Users'

  export default {
    name: "Overview",
    mixins: [mixins],
    computed: mapGetters({
      overview: 'getAdminOverview'
    }), components: {
      'users-table': Users,
    },
    methods: {
      loadOverview() {
        this.$store.dispatch('loadAdminOverview')
      }
    },
    created() {
      this.loadOverview();
    }
  }
</script>

