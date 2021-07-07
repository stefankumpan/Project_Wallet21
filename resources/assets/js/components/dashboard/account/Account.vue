<template>
    <div class="wrapper">
        <div class="action-nav">
            <ul>
                <li>
                    <router-link
                            class="btn btn-success btn-icon"
                            :to="{name:'categoryCreate'}">
                        <i class="icon-add"></i> Kategorie <span class="visually-hidden">erstellen</span>
                    </router-link>
                </li>
                <li class="mobile-hidden">
                    <router-link class="btn btn-success btn-icon"
                                 :to="{name:'exportCSV',params:{accountId: account.id, categoryId: 0}}">
                        <i class="icon-download"></i>
                        CSV Export
                    </router-link>
                </li>
                <li>
                    <router-link
                            class="btn btn-warning btn-icon"
                            :to="{name:'accountEdit'}">
                        <i class="icon-pencil-edit-button"></i>
                        Bearbeiten
                    </router-link>
                </li>

                <li>
                    <router-link
                            class="btn btn-danger btn-icon"
                            :to="{name:'accountDelete'}">
                        <i class="icon-rubbish-bin-delete-button"></i>
                        Konto <span class="visually-hidden">Löschen</span>
                    </router-link>
                </li>
            </ul>

        </div>


        <div class="layout-dashboard">
            <div>
                <div class="overview">
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
                </div>
                <div>
                    <app-booking-records>
                    </app-booking-records>
                </div>
            </div>

            <!-- Side Statistic -->
            <div class="sidebar">
                <div class="card">
                    <h3>Einnahmen | Ausgaben</h3>
                    <ul class="statistic">
                        <li>
                            <app-progressbar
                                    :value="calcProcent(account.revenue,(account.revenue+account.expenditure),2)"
                                    bar-class="bg-green">
                                {{calcProcent(account.revenue,(account.revenue+account.expenditure),2)}}%
                            </app-progressbar>
                        </li>
                        <li>
                            <app-progressbar
                                    :value="calcProcent(account.expenditure,(account.revenue+account.expenditure),2)"
                                    bar-class="bg-red">
                                {{calcProcent(account.expenditure,(account.revenue+account.expenditure),2)}}%
                            </app-progressbar>
                        </li>
                    </ul>

                </div>
                <div class="card">
                    <h3>Beschreibung</h3>
                    <p class="description card-body"> {{account.description}} </p>
                </div>

                <ul class="category-list">
                    <li v-for="category in categories">
                        <router-link
                                :to="{name:'categoryShow',params: {accountId:account.id,categoryId: category.id }}">
                            <h3 :class="'bg-'+category.color">
                                <span>{{category.name}} </span>
                                <i class="fas fa-angle-right"></i>
                            </h3>
                            <div class="category-stats">
                                <img :src="AppUrl+category.icon.path" :alt="category.name">
                                <span class="highlight"
                                      :class="{'green': category.total > 0, 'red':category.total < 0}">
                                {{formatCurrency(category.total, account.currency)}}
                            </span>
                            </div>
                        </router-link>
                    </li>
                </ul>

            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  import mixins from '../../../utility/mixins';
  import ProgressBar from '../../partials/Basic/ProgressBar';
  import BookingRecords from '../booking-records/BookingRecords';
  import {mapGetters} from 'vuex';
  import {AppUrl} from '../../../utility/config';

  export default {
    name: "Account",
    mixins: [mixins], components: {
      'app-progressbar': ProgressBar,
      'app-booking-records': BookingRecords,
    },
    computed: mapGetters({
      account: 'getAccount',
      categories: 'getCategories',
      bookingRecords: 'getBookingRecords',
      currentPage: 'getCurrentPage',
      refreshStatus: 'getRefreshStatus',
    }),
    watch: {
      refreshStatus() {
        this.loadAccount();
      },
      account() {
        this.$store.dispatch('loadCurrencyCalculation', this.account.currency);
      }
    },
    data() {
      return {
        selectedPage: 0,
        pagination: 25,
        paginationOptions: ['25', "50", "100"],
        AppUrl,
      }
    }
    , methods: {
      loadAccount() {
        let id = this.$route.params.accountId;
        this.$store.dispatch('loadAccount', id);
      },
      deleteAccount() {
        let payload = this.account;
        this.$store.dispatch('deleteAccount', payload);
      }
    }, created() {
      this.loadAccount();
    },
  }
</script>
