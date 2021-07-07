<template>
    <header class="site-header">
        <div class="site-header-container">
            <router-link :to="{name:'home'}" class="site-name-link">
                <img class="site-logo" :src="siteLogo" alt="Wallet 21 Logo">
                <h1 class="site-name">Wallet 21</h1>
            </router-link>
            <nav>
                <button @click="handleNavigation"
                class="main-nav-btn"> <i class="icon-menu"></i><span class="visually-hidden">menu</span></button>
                <ul class="main-nav" :class="{'main-nav-show': navShow}">
                    <li v-if="isAuthorized" class="main-nav-item">
                        <router-link :to="{name:'dashboard'}" class="main-nav-link">Dashboard</router-link>
                    </li>
                    <li v-if="isAuthorized" class="main-nav-item">
                        <router-link :to="{name:'userProfile'}" class="main-nav-link">Profil</router-link>
                    </li>
                    <li v-if="!isAuthorized" class="main-nav-item">
                        <router-link :to="{name:'home'}" class="main-nav-link">Home</router-link>
                    </li>
                    <li class="main-nav-item">
                        <router-link :to="{name:'price'}" class="main-nav-link">Preise</router-link>
                    </li>
                    <li v-if="!isAuthorized" class="main-nav-item">
                        <router-link :to="{name:'signin'}" class="main-nav-link">Login</router-link>
                    </li>
                    <li v-if="!isAuthorized" class="main-nav-item">
                        <router-link :to="{name:'signup'}" class="main-nav-link">Registrieren</router-link>
                    </li>

                    <li v-if="userStatus === 'admin'" class="main-nav-item">
                        <router-link :to="{name:'adminOverview'}" class="main-nav-link">Admin</router-link>
                    </li>
                    <li v-if="isAuthorized" class="main-nav-item">
                        <a href="javascript:void(0)" @click="handleLogout" class="main-nav-link">Logout</a>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<script>
  import {AppUrl} from '../../../utility/config'
  import {mapGetters} from 'vuex'

  export default {
    name: "DefaultHeader",
    data(){
      return{
        siteLogo: AppUrl +'images/wallet-21-logo.svg',
        navShow:false,
      }
    },
    computed: mapGetters({
      isAuthorized: 'getIsAuthorizedStatus',
      userStatus: 'getUserStatus',
    }),watch:{
      '$route'(){
        this.navShow = false;
      }
    },
    methods: {
      handleNavigation() {
        this.navShow = !this.navShow;
      },
      handleLogout() {
        this.$store.dispatch('clientLogOut');
      },

    }
  }
</script>

