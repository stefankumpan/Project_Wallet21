<template>
    <div class="wrapper">
        <div class="profile-layout">
            <ul class="profile-navigation">
                <li @click="handleView('user')"><a>Profile</a></li>
                <li @click="handleView('orders')"><a>Bestellung</a></li>
                <li @click="handleView('partner')" v-if="userStatus ==='partner'"><a>Partner</a></li>
            </ul>
            <div class="content">
                <transition name="fade-in-down" mode="out-in">
                    <app-user v-if="view === 'user'"></app-user>

                    <app-orders v-if="view === 'orders'"></app-orders>
                    <app-partner v-if="view === 'partner'"></app-partner>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import mixins from "../../utility/mixins";
  import User from "./profile/User";
  import Orders from "./profile/Orders";
  import Partner from "./profile/Partner";

  export default {
    name: "Profile",
    mixins: [mixins],
    components: {
      'app-user': User,
      'app-orders': Orders,
      'app-partner': Partner,
    },computed:mapGetters({userStatus:'getUserStatus'})
    ,data() {
      return {
        view: 'user'
      }
    },
    methods: {
      handleView(event) {
        this.view = event;
      }
    }
  }
</script>
