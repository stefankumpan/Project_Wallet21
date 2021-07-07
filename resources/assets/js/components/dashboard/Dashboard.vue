<template>
    <div class="wrapper">
        <div class="action-nav">
            <ul>
                <li>
                    <router-link class="btn btn-success btn-icon" :to="{name:'accountCreate'}">
                        <i class="icon-add"></i> Konto <span class="visually-hidden">erstellen</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="btn btn-success btn-icon" :to="{name:'passbookCreate'}">
                        <i class="icon-add"></i> Sparkonto <span class="visually-hidden">erstellen</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="layout-dashboard">
            <accounts></accounts>
            <passbooks></passbooks>
        </div>
        <router-view></router-view>
        <new-user></new-user>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Accounts from './Accounts'
  import Passbooks from './Passbooks'
  import NewUser from '../partials/NewUser/NewUser'

  export default {
    name: "Dashboard",
    components:{
      'accounts':Accounts,
      'passbooks':Passbooks,
      'new-user':NewUser,
    },
    computed: mapGetters({
      refreshStatus: 'getRefreshStatus',
    }),
    created() {
      this.loadDashboard();
      this.$store.dispatch('loadIcons');
      this.$store.dispatch('loadUser');
    },
    watch: {
      refreshStatus() {
        this.loadDashboard()
      }
    },
    methods: {
      loadDashboard() {
        this.$store.dispatch('loadDashboard');
      },
    },
  }
</script>


