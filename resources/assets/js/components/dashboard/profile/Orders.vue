<template>
    <div class="user-orders">
        <div class="user-order-options">
            <h2>Bestellungen</h2>
            <div class="pagination-select-box">
                <select v-model="pagination" name="pagination" title="pagination" id="pagination" @change="handleLoadOrders">
                    <option v-for="option in paginationOptions"
                            :value="option"
                            :selected="option === pagination"
                    >{{option}}
                    </option>
                </select>
            </div>
        </div>
        <div class="user-orders-overview">
            <ul class="user-orders-list">
                <li class="item" v-for="singleOrder in orders.data">
                    <div class="order-header">
                        <p class="date">
                            Bestellt am: <span>{{formatDateDMY(singleOrder.created_at)}}</span>
                        </p>
                        <p class="invoice-nr">
                            Rechnungs Nr.: <span>{{singleOrder.invoice_number}}</span>
                        </p>
                    </div>
                    <div class="order-info">
                        <!-- Client -->
                        <div class="order-client-info">
                            <div>
                                <span class="highlight info-text">Zahlungsart:</span>
                                <span v-if="singleOrder.payment_method === 'credit-card'">Kreditkarte</span>
                                <span v-if="singleOrder.payment_method === 'debits-card'">Lastschrift</span>
                            </div>
                            <span class="highlight info-text">Status:</span>
                            <span v-if="singleOrder.status === 1">Erfolgreich <i class="icon-checked green"></i></span>
                            <span v-if="singleOrder.status === 0">Storniert <i class="icon-clear-button red"></i></span>

                        </div>
                        <!-- Product -->
                        <div class="order-product-info">
                            <h4>{{singleOrder.product['name']}}</h4>

                            <ul class="description">
                                <li v-for="item in singleOrder.product['description']">
                                    <i class="icon-checked mr-1"></i> {{item}}
                                </li>
                            </ul>
                        </div>
                        <!-- Bill amount -->
                        <ul class="order-amount">
                            <li>{{formatCurrency(singleOrder.net_price,'EUR')}}</li>
                            <li>{{formatCurrency(singleOrder.tax,'EUR')}}</li>
                            <li>{{formatCurrency(singleOrder.price,'EUR')}}</li>
                        </ul>
                    </div>

                </li>
            </ul>
        </div>


        <!-- pagination-->
        <div class="pagination">
            <div class="pagination-numbers">
                <ul class="pagination-number-list">
                    <li v-for="i in lastPage" :class="{'active':i === currentPage}">
                        <a @click="handlePagination(i)">{{ i}}</a>
                    </li>
                </ul>
            </div>
            <div class="pagination-button">
                <button class="btn btn-white back" :disabled="currentPage-1 === 0"
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
</template>

<script>
  import {mapGetters} from 'vuex';
  import mixins from "../../../utility/mixins";

  export default {
    name: "Orders",
    mixins: [mixins],
    computed: mapGetters({
      orders: 'getOrders',
      currentPage: 'getCurrentPageOrders',
      lastPage: 'getLastPageOrders',
      refreshStatus: 'getRefreshStatus',
    }),
    data() {
      return {
        selectedPage: 0,
        pagination: 5,
        search: '',
        paginationOptions: ['5', '10', "25",],
      }
    },
    methods: {

      handleLoadOrders() {
        let payload = {
          'pagination': this.pagination,
          'page': 1,
        };
        this.$store.dispatch('loadOrders', payload);
      },

      handlePagination(page) {
        let payload = {
          'pagination': this.pagination,
          'page': page,
        };
        this.$store.dispatch('loadOrders', payload);
      },
    },
    created() {
      this.handleLoadOrders();
    }
  }
</script>

