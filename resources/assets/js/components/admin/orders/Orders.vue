<template>
    <div class="wrapper">
        <h3 class="admin-dashboard-headline">Bestellungen</h3>
        <div class="data-table">
            <div class="data-table-action-bar">
                <div class="pagination-select-box">
                    <select v-model="pagination" name="pagination" title="pagination" id="pagination" @change="loadOrders">
                        <option v-for="option in paginationOptions"
                                :value="option"
                                :selected="option === pagination"
                        >{{option}}
                        </option>
                    </select>
                </div>
                <div class="search-box">
                    <input v-model="search" type="text" id="search" class="search-field"
                           placeholder="Bestellung Suchen">
                    <button @click="searchOrder" type="button"><i class="icon-searching-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            <table class="table book">
                <thead>
                <tr>
                    <th>Rechnung Nr.</th>
                    <th>E-Mail</th>
                    <th>Erstellt Datum</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="order in orders.data">
                    <td>
                        {{order.invoice_number}}
                    </td>
                    <td>
                        <router-link :to="{name:'adminOrdersEdit',params:{orderId: order.id}}">
                            {{order.client.email}}
                        </router-link>
                    </td>
                    <td>
                        {{order.created_at}}
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

  export default {
    name: "Orders",
    computed: mapGetters({
      orders: 'getAdminOrders',
      currentPage: 'getAdminOrdersCurrentPage',
      lastPage: 'getAdminOrdersLastPage',
      refreshStatus: 'getRefreshStatus',
    }),
    data() {
      return {
        pagination: 10,
        search: '',
        paginationOptions: ['10', '25', "50", "100"],
      }
    },
    methods: {
      loadOrders() {
        let payload = {
          'pagination': this.pagination,
          'page': 1,
        };
        this.$store.dispatch('adminOrdersPagination', payload);
      },
      handlePagination(page) {
        let payload = {
          'pagination': this.pagination,
          'page': page,
        };
        this.$store.dispatch('adminOrdersPagination', payload);
      },
      searchOrder(event) {
        if (this.search.length > 1 && this.search !== undefined) {
          let payload = {
            'pagination': this.pagination,
            'search': this.search,
            'page': this.currentPage,
          };
          this.$store.dispatch('adminOrdersSearch', payload);
        } else {
          this.loadOrders();
        }

      }
    },
    created() {
      this.loadOrders();
    }
  }
</script>

