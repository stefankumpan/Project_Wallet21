<template>
    <div class="wrapper">
        <h3 class="admin-dashboard-headline">Users</h3>
        <div class="data-table">
            <div class="data-table-action-bar">
                <div class="pagination-select-box">
                    <select v-model="pagination" title="pagination" name="pagination" id="pagination" @change="loadUsers">
                        <option v-for="option in paginationOptions"
                                :value="option"
                                :selected="option === pagination"
                        >{{option}}
                        </option>
                    </select>
                </div>
                <div class="search-box">
                    <input v-model="search" type="text" id="search" class="search-field" placeholder="User Suchen">
                    <button @click="searchUsers" type="button"><i class="icon-searching-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            <table class="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Registrierungs Datum</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(user) in users.data">
                    <td>
                        {{user.id}}
                    </td>
                    <td>
                        {{user.name}}
                    </td>
                    <td>
                        <router-link :to="{name:'adminUsersEdit',params:{userId: user.id}}">
                            {{user.email}}
                        </router-link>
                    </td>
                    <td>
                        {{user.created_at}}
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
  import mixins from "../../../utility/mixins";

  export default {
    name: "Users",
    mixins: [mixins],
    computed: mapGetters({
      users: 'getUsers',
      currentPage: 'getUsersCurrentPage',
      lastPage: 'getUsersLastPage',
      refreshStatus: 'getRefreshStatus',
    }),
    data() {
      return {
        selectedPage: 0,
        pagination: 10,
        search: '',
        paginationOptions: ['10', '25', "50", "100"],
      }
    }, methods: {
      loadUsers() {
        let payload = {
          'pagination': this.pagination,
          'page': 1,
        };
        this.$store.dispatch('adminLoadUsers', payload);
      },
      handlePagination(page) {
        let payload = {
          'pagination': this.pagination,
          'page': page,
        };
        this.$store.dispatch('adminUsersPagination', payload);
      },
      searchUsers() {
        if (this.search.length > 1 && this.search !== undefined) {
          let payload = {
            'pagination': this.pagination,
            'page': this.currentPage,
            'search': this.search,
          };
          this.$store.dispatch('adminUsersSearch', payload);
        } else {
          this.loadUsers();
        }

      }

    }, created() {
      this.loadUsers();
    }
  }
</script>

