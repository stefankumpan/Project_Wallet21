<template>
    <div>
        <div class="data-table">
            <div class="data-table-action-bar">
                <div class="pagination-select-box">
                    <select v-model="pagination" name="pagination" title="pagination" id="pagination" @change="loadBookingRecords">
                        <option v-for="option in paginationOptions" :value="option" :selected="option === pagination"
                        >{{option}}
                        </option>
                    </select>
                </div>
                <div class="search-box">
                    <input v-model="search" type="text" id="search" class="search-field" placeholder="Rechnung Suchen">
                    <button @click="searchBookingRecords" type="button"><i class="icon-searching-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            <div v-if="bookingRecords.total === 0">
                <p>Sie haben keine Buchungen.</p>
            </div>

            <table class="table booking-records" v-if="bookingRecords.total > 0">
                <thead>
                <tr>
                    <th class="date">Datum</th>
                    <th class="name">Name</th>
                    <th class="amount">Betrag</th>
                    <th class="options">Optionen</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(bookingRecord) in bookingRecords.data">
                    <td class="date">{{ formatDateYMD(bookingRecord.date) }}</td>
                    <td class="name">
                        <router-link v-if="accountMode"
                                     :to="{name:'account.bookingRecordShow', params:{categoryId: bookingRecord.category_id ,bookingRecordId:bookingRecord.id}}">
                            {{bookingRecord.name}}
                        </router-link>
                        <router-link v-if="!accountMode"
                                     :to="{name:'category.bookingRecordShow', params:{bookingRecordId:bookingRecord.id}}">
                            {{bookingRecord.name}}
                        </router-link>
                    </td>
                    <td class="amount"
                        :class="{red: bookingRecord.revenue - bookingRecord.expenditure < 0, green: bookingRecord.revenue - bookingRecord.expenditure > 0}"
                    >{{formatCurrency((bookingRecord.revenue - bookingRecord.expenditure),account.currency)}}
                    </td>
                    <td class="options">
                        <template v-if="!accountMode">
                            <router-link
                                    :to="{name:'category.bookingRecordEdit', params:{bookingRecordId:bookingRecord.id}}">
                                <i class="icon-pencil-edit-button orange"></i> <span
                                    class="visually-hidden">Bearbeiten</span>
                            </router-link>
                            <router-link
                                    :to="{name:'category.bookingRecordDelete', params:{bookingRecordId:bookingRecord.id}}">
                                <i class="icon-rubbish-bin-delete-button red"></i> <span
                                    class="visually-hidden">Löschen</span>
                            </router-link>
                        </template>
                        <template v-if="accountMode">
                            <router-link
                                    :to="{name:'account.bookingRecordEdit', params:{categoryId: bookingRecord.category_id, bookingRecordId:bookingRecord.id}}">
                                <i class="icon-pencil-edit-button orange"></i> <span
                                    class="visually-hidden">Bearbeiten</span>
                            </router-link>
                            <router-link
                                    :to="{name:'account.bookingRecordDelete', params:{categoryId: bookingRecord.category_id,bookingRecordId:bookingRecord.id}}">
                                <i class="icon-rubbish-bin-delete-button red"></i> <span
                                    class="visually-hidden">Löschen</span>
                            </router-link>
                        </template>
                    </td>
                </tr>
                </tbody>
            </table>
            <!--Pagination-->
            <div class="pagination">
                <div class="pagination-numbers">
                    <ul class="pagination-number-list">
                        <li v-for="i in lastPage" :class="{'active':i === currentPage}">
                            <a @click="handlePagination(i)">{{ i}}</a>
                        </li>
                    </ul>
                </div>
                <div class="pagination-button">
                    <button class="btn btn-white back" :disabled="currentPage-1 === 0 "
                            @click="handlePagination(currentPage-1)">
                        <i class="icon-left-arrow"></i>
                        Zurück
                    </button>
                    <button class="btn btn-white  next" :disabled="currentPage === lastPage"
                            @click="handlePagination(currentPage+1)">
                        Weiter
                        <i class="icon-right-arrow"></i>
                    </button>
                </div>
            </div>

        </div>

    </div>
</template>


<script>
  import {mapGetters} from 'vuex'
  import mixins from '../../../utility/mixins';
  import _ from 'lodash'

  export default {
    name: "BookingRecords",
    mixins: [mixins],
    computed: mapGetters({
      account: 'getAccount',
      categories: 'getCategories',
      bookingRecords: 'getBookingRecords',
      currentPage: 'getCurrentPage',
      lastPage: 'getLastPage',
      refreshStatus: 'getRefreshStatus',
    }), watch: {
      refreshStatus() {
        this.loadBookingRecords();
      }
    },

    data() {
      return {
        accountMode: true,
        selectedPage: 0,
        pagination: 10,
        search: '',
        paginationOptions: ['10', '25', "50", "100"],
        categoryId: 'none',
      }
    },
    methods: {
      setCategoryId() {
        if (!this.$route.params.categoryId) {
          this.categoryId = 'none'
        } else {
          this.categoryId = this.$route.params.categoryId;
          this.accountMode = false;
        }
      },

      loadBookingRecords() {
        let payload = {
          'accountId': this.$route.params.accountId,
          'categoryId': this.categoryId,
          'pagination': this.pagination,
          'page': 0,
        };
        this.$store.dispatch('bookingRecordsPagination', payload)
      },
      searchBookingRecords() {
        if (this.search.length > 1 && this.search !== undefined) {
          let payload = {
            'accountId': this.$route.params.accountId,
            'categoryId': this.categoryId,
            'pagination': this.pagination,
            'page': 0,
            'search': this.search,
          };
          this.$store.dispatch('bookingRecordsSearch', payload)
        } else {
          this.loadBookingRecords();
        }
      },
      handlePagination(page) {
        let payload = {
          'accountId': this.$route.params.accountId,
          'categoryId': this.categoryId,
          'pagination': this.pagination,
          'page': page,
        };
        this.$store.dispatch('bookingRecordsPagination', payload)
      }
    }, created() {
      this.setCategoryId();
      this.loadBookingRecords();
    },
  }
</script>


