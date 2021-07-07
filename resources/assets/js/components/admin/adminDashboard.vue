<template>
    <div class="admin-layout">
        <div class="admin-nav">
            <h3>Menu</h3>
            <ul>
                <li>
                    <router-link :to="{name:'adminOverview'}">Dashboard</router-link>
                </li>
                <li>
                    <router-link :to="{name:'adminUsers'}">Users</router-link>

                </li>
                <li>
                    <router-link :to="{name:'adminOrders'}">Bestellungen</router-link>
                </li>
                <li>
                    <router-link :to="{name:'adminPartners'}">Partners</router-link>
                </li>
                <li>
                    <router-link :to="{name:'adminPackages'}">Pakete</router-link>
                </li>

                <li>
                    <router-link :to="{name:'adminIcons'}">Icons</router-link>
                </li>
            </ul>
        </div>
        <div class="admin-content">
            <transition name="fade-in-down" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>

    </div>
</template>

<script>
  export default {
    name: "adminDashboard"
  }
</script>


