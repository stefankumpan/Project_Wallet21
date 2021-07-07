import Vue from 'vue'
import Router from 'vue-router'
import guest from './guest/guest'
import user from './user/user'
import admin from './admin/admin'
Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass:'',
  linkExactActiveClass: 'is-active',
  routes: [
    ...guest,
    ...user,
    ...admin
  ],
})
