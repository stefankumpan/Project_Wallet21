<template>
    <div class="accounts">
        <ul class="accounts-list">
            <li v-for="account in accounts">
                <div class="overview">
                    <router-link
                            :to="{name:'accountShow',params: {accountId: account.id}}">
                        <h2 :class="'bg-'+account.color">
                            {{account.name}}
                        </h2>
                        <ul class="stats">
                            <li class="revenue">
                                <span>Einnahmen</span>
                                <span>{{formatCurrency(account.revenue,account.currency)}}</span>
                            </li>
                            <li class="expenditure">
                                <span>Ausgaben</span>
                                <span>{{formatCurrency(account.expenditure,account.currency)}}</span>
                            </li>
                            <li class="total">
                                <span>Summe</span>
                                <span>{{formatCurrency(account.total,account.currency)}}</span>
                            </li>
                        </ul>
                    </router-link>
                </div>
                <ul class="category-list">
                    <li v-for="category in account.categories">
                        <router-link
                                :to="{name:'categoryShow',params: {accountId:account.id,categoryId: category.id }}">
                            <h3 :class="'bg-'+category.color">
                                <span>{{category.name}} </span>
                                <i class="fas fa-angle-right"></i>
                            </h3>
                        <div class="category-stats">
                            <img :src="AppUrl+category.icon.path" :alt="category.name">
                            <span class="highlight" :class="{'green': category.total > 0, 'red':category.total < 0}">{{formatCurrency(category.total, account.currency)}}</span>
                        </div>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
  import {AppUrl} from '../../utility/config'
  import {mapGetters} from 'vuex'
  import mixins from '../../utility/mixins'


  export default {
    name: "Accounts",
    mixins: [mixins],computed: mapGetters({
      accounts: 'getAccounts',
      refreshStatus: 'getRefreshStatus'
    }),
    data(){
      return{
        AppUrl,
      }
    },
  }
</script>

