<template>
    <div class="wrapper">
        <h3 class="admin-dashboard-headline">Partner Übersicht</h3>
        <div class="justify-content-right">
            <router-link :to="{name:'adminPartnerCreate'}" class="btn btn-success btn-icon">
                <i class="icon-add"></i> Partner <span class="visually-hidden">erstellen</span>
            </router-link>
        </div>
        <div class="data-table">
            <div class="data-table-action-bar">
                <div class="pagination-select-box">
                    <select v-model="pagination" name="pagination" title="pagination" id="pagination" @change="loadPartners">
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
                    <button @click="searchPartner" type="button"><i class="icon-searching-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            <table class="table book">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Key</th>
                    <th>Erstellt Datum</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="partner in partners.data">
                    <td>
                        {{partner.name}}
                    </td>
                    <td>
                        <router-link :to="{name:'adminPartnerEdit',params:{partnerId: partner.id}}">
                            {{partner.email}}
                        </router-link>
                    </td>
                    <td>
                        {{partner.key}}
                    </td> <td>
                        {{partner.created_at}}
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
    name: "Partners",
    computed: mapGetters({
      partners: 'getAdminPartners',
      currentPage: 'getAdminPartnersCurrentPage',
      lastPage: 'getAdminPartnersLastPage',
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
      loadPartners() {
        let payload = {
          'pagination': this.pagination,
          'page': 1,
        };
        this.$store.dispatch('adminPartnersPagination', payload);
      },
      handlePagination(page) {
        let payload = {
          'pagination': this.pagination,
          'page': page,
        };
        // console.log(payload);
        this.$store.dispatch('adminPartnersPagination', payload);
      },
      searchPartner(event) {
        // console.log('search', this.search.length);
        if (this.search.length > 1 && this.search !== undefined) {
          let payload = {
            'pagination': this.pagination,
            'search': this.search,
            'page': this.currentPage,
          };
          this.$store.dispatch('adminPartnersSearch', payload);
        } else {
          this.loadPartners();
        }

      }
    },
    created() {
      this.loadPartners();
    }
  }
</script>

