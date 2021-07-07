<template>
    <div class="wrapper">
        <div class="action-nav">
        <ul>
            <li>
                <router-link :to="{name:'bookingRecordCreate'}" class="btn btn-success btn-icon">
                  <i class="icon-add"></i>   Buchung <span class="visually-hidden">erstellen</span>
                </router-link>
            </li>
            <li class="mobile-hidden">
                <router-link class="btn btn-success btn-icon" :to="{name:'importCSV'}">
                    <i class="icon-upload"></i>
                    CSV Import
                </router-link>
            </li>     <li class="mobile-hidden">
                <router-link class="btn btn-success btn-icon" :to="{name:'exportCSV',params:{accountId: category.account_id, categoryId: category.id}}">
                    <i class="icon-download"></i>
                    CSV Export
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'categoryEdit'}" class="btn btn-warning btn-icon">
                    <i class="icon-pencil-edit-button"></i>
                    Bearbeiten
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'categoryDelete'}" class="btn btn-danger btn-icon">
                    <i class="icon-rubbish-bin-delete-button"></i>
                    Löschen
                </router-link>
            </li>
        </ul>


        </div>
        <div class="layout-dashboard">
            <div class="main-content">
                <div class="overview">
                    <h2 :class="'bg-'+category.color">
                        {{category.name}}
                    </h2>
                    <ul class="stats">
                        <li class="revenue">
                            <span>Einnahmen</span>
                            <span>{{formatCurrency(category.revenue,category.currency)}}</span>
                        </li>
                        <li class="expenditure">
                            <span>Ausgaben</span>
                            <span>{{formatCurrency(category.expenditure,category.currency)}}</span>
                        </li>
                        <li class="total">
                            <span>Summe</span>
                            <span>{{formatCurrency(category.total,category.currency)}}</span>
                        </li>
                    </ul>
                </div>
                <app-booking-records></app-booking-records>
            </div>
            <div class="sidebar">
                <div class="card">
                    <h3>Einnahmen | Ausgaben</h3>
                    <ul class="statistic">
                        <li>
                            <app-progressbar :value="calcProcent(category.revenue,(category.revenue+category.expenditure),2)"
                                             bar-class="bg-green">
                                {{calcProcent(category.revenue,(category.revenue+category.expenditure),2)}}%
                            </app-progressbar>
                        </li>
                        <li>
                            <app-progressbar
                                    :value="calcProcent(category.expenditure,(category.revenue+category.expenditure),2)"
                                    bar-class="bg-red">
                                {{calcProcent(category.expenditure,(category.revenue+category.expenditure),2)}}%
                            </app-progressbar>
                        </li>
                    </ul>

                </div>
                <div class="card">
                    <h3>Beschreibung</h3>
                    <p class="description card-body"> {{category.description}} </p>
                </div>

            </div>
        </div>
        <router-view></router-view>
    </div>

</template>
<script>
  import mixins from '../../../utility/mixins';
  import ProgressBar from '../../partials/Basic/ProgressBar'
  import BookingRecords from '../booking-records/BookingRecords'
  import {mapGetters} from 'vuex'

  export default {
    name: "Category",
    mixins: [mixins],
    computed: mapGetters({
      category: 'getCategory',
      refreshStatus: 'getRefreshStatus'
    }), data() {
      return {
        selectedPage: 0,
      }
    }, watch: {
      refreshStatus() {
        this.loadCategory();
      }
    }, components: {
      'app-progressbar': ProgressBar,
      'app-booking-records': BookingRecords,
    },
    methods: {
      loadCategory() {
        let payload = {
          'accountId': this.$route.params.accountId,
          'categoryId': this.$route.params.categoryId
        };
        this.$store.dispatch('loadCategory', payload)
      },
    },
    created() {
      this.loadCategory();
    },
  }
</script>

