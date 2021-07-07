<template>
    <div id="app" :class="{'loading':loading}">
        <router-view name="header"></router-view>
        <app-spinner v-if="loading"></app-spinner>
        <transition name="fade-in-down" mode="out-in">
            <div v-if="infoMsg.length > 0" class="info-msg-box">
                <div v-for="(msg,index) in infoMsg" class="notification">
                    <span> {{msg}}</span> <span class="close" @click="removeInfoMsg(index)">&times;</span>
                </div>
            </div>
        </transition>
        <main class="content-wrapper">
            <transition name="fade-in-down" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
        <router-view name="footer"></router-view>
        <cookie-info></cookie-info>
    </div>


</template>

<script>
  import LoadingSpinner from './components/partials/Loading/LoadingSpinner'
  import {mapGetters} from 'vuex'
  import CookieInfo from './components/partials/Cookie/CookieInfo'


  export default {
    name: "App",
    components: {
      'app-spinner': LoadingSpinner,
      'cookie-info': CookieInfo
    }, created() {
      this.$store.dispatch('setClientAtStart');
      this.$store.dispatch('loadCurrencies');
    },
    computed:mapGetters({
      loading: 'getLoadingStatus',
      infoMsg: 'getInfoMessage',
      newUserStatus:'getNewUserStatus',
    }),
    methods: {
      changeLoadingStatus() {
        this.$store.commit('setLoadingStatus', true);
      },
      removeInfoMsg(event){
        this.$store.commit('deleteInfoMessage',event)
      }
    }
  };
</script>

