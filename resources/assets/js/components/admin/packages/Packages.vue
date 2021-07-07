<template>
    <div class="wrapper">
        <h3 class="admin-dashboard-headline">Pakete</h3>
        <div class="data-table">
            <div class="admin-options-bar">
                <div class="pagination-select-box">
                    <select v-model="pagination" name="pagination" title="pagination" id="pagination" @change="loadPackages">
                        <option v-for="option in paginationOptions"
                                :value="option"
                                :selected="option === pagination"
                        >{{option}}
                        </option>
                    </select>
                </div>
                <div>
                    <router-link class="btn btn-success btn-icon" :to="{name:'adminPackagesCreate'}">
                        <i class="icon-add"></i> Paket <span class="visually-hidden">erstellen</span>
                    </router-link>
                </div>
            </div>
            <!--Packages-->
            <div>
                <ul class="price-list">
                    <li v-for="singlePackage in packages.data" class="item">
                        <div class="offer">
                            <h3>{{singlePackage.name}}</h3>
                            <ul class="package">
                                <li v-for="item in singlePackage.info"><i class="icon-checked"></i>{{item}}</li>
                            </ul>
                        </div>

                        <div class="price-info">
                            <span class="amount">{{formatCurrency(singlePackage.discount_price,'EUR')}}</span>
                            <span class="interval">pro Monat</span>
                            <span class="discount">Sparen Sie {{round(calculationDiscount(singlePackage.price,singlePackage.discount_price),0)}}%</span>
                            <p class="summe" v-if="singlePackage.discount_price < singlePackage.price">
                                <span class="line-through red">{{formatCurrency((singlePackage.price*singlePackage.run_time),'EUR')}}</span> {{formatCurrency((singlePackage.discount_price*singlePackage.run_time),'EUR')}}
                            </p>
                            <p class="summe" v-if="singlePackage.discount_price >= singlePackage.price">
                                Summe {{formatCurrency((singlePackage.discount_price*singlePackage.run_time),'EUR')}}
                            </p>
                            <router-link :to="{name:'adminPackagesEdit', params:{packageId:singlePackage.id}}" class="btn btn-primary btn-full">Bearbeiten</router-link>
                        </div>
                    </li>
                </ul>
            </div>
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
  import mixins from "../../../utility/mixins";

  export default {
    name: "Packages",
    mixins:[mixins],
    computed: mapGetters({
      packages: 'getAdminPackages',
      currentPage: 'getAdminPackagesCurrentPage',
      lastPage: 'getAdminPackagesLastPage',
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
      loadPackages() {
        let payload = {
          'pagination': this.pagination,
          'page': 1,
        };
        this.$store.dispatch('adminPackagesPagination', payload);
      },
      handlePagination(page) {
        let payload = {
          'pagination': this.pagination,
          'page': page,
        };
        // console.log(payload);
        this.$store.dispatch('adminPackagesPagination', payload);
      },
      searchOrder(event) {
        // console.log('search', this.search.length);
        if (this.search.length > 1 && this.search !== undefined) {
          let payload = {
            'pagination': this.pagination,
            'search': this.search,
            'page': this.currentPage,
          };
          this.$store.dispatch('adminPackagesSearch', payload);
        } else {
          this.loadPackages();
        }

      }
    },
    created() {
      this.loadPackages();
    }
  }
</script>

