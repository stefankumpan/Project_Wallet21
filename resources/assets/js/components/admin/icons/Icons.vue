<template>
    <div class="wrapper">
        <h2 class="admin-dashboard-headline">Icons</h2>
        <div class="admin-options-bar">
            <div class="pagination-select-box">
                <select v-model="pagination" name="pagination" title="pagination" id="pagination" @change="loadIcons">
                    <option v-for="option in paginationOptions"
                            :value="option"
                            :selected="option === pagination"
                    >{{option}}
                    </option>
                </select>
            </div>
            <div class="admin-icons-action">
                <router-link class="btn btn-success btn-icon" :to="{name:'adminIconsCreate'}">
                    <i class="icon-add"></i> Icon <span class="visually-hidden">erstellen</span>
                </router-link>
            </div>
        </div>
        <ul class="admin-icons-list">
            <li v-for="icon in icons.data">
                <router-link :to="{name:'adminIconsEdit',params:{iconId:icon.id}}">
                    <img :src="AppUrl+icon.path" :alt="icon.name">
                </router-link>
            </li>
        </ul>
        <div class="pagination">
            <div class="pagination-numbers">
                <ul class="pagination-number-list">
                    <li v-for="i in lastPage" :class="{'active':i === currentPage}">
                        <a   @click="handlePagination(i)">{{ i}}</a>
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
  import {mapGetters} from 'vuex'
  import {AppUrl} from '../../../utility/config'

  export default {
    name: "Icons",
    computed: mapGetters({
      icons: 'getAdminIcons',
      currentPage: 'getAdminIconsCurrentPage',
      lastPage: 'getAdminIconsLastPage',
      refreshStatus: 'getRefreshStatus',
    }),
    data() {
      return {
        testTrue: true,
        AppUrl,
        selectedPage: 0,
        pagination: 10,
        search: '',
        paginationOptions: ['10', '25', "50", "100"],
      }
    },
    methods: {
      loadIcons() {
        let payload = this.pagination;
        this.$store.dispatch('adminLoadIcons', payload);
      },
      handlePagination(page) {
        let payload = {
          'pagination': this.pagination,
          'page': page,
        };
        this.$store.dispatch('adminIconsPagination', payload);
      },
    },
    created() {
      this.loadIcons();
    }
  }
</script>

