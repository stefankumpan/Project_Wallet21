<template>
    <div class="wrapper">
        <div class="card bg-white">
            <h2>User Informationen</h2>
            <div class="card-body">
                <form>
                    <div class="form-group split-2">
                        <label for="name">Name</label>
                        <input class="form-control" type="text" id="name" v-model="user.name">
                    </div>
                    <div class="form-group split-2">
                        <label for="email">E-Mail</label>
                        <input class="form-control" type="email" id="email" v-model="user.email">
                    </div>
                    <div class="form-group split-2">
                        <span>Abo. Laufzeit</span>
                        <span>{{user.subscriptions[0].expire}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="role">User Status</label>
                        <select class="form-control-select" v-model="user.role_id"
                                id="role">
                            <option v-for="item  in roles"
                                    :selected="user.role_id === item.id" :value="item.id">{{item.name}}
                            </option>
                        </select>
                    </div>
                    <div class="form-group split-2">
                        <label for="active">Konto Status</label>
                        <select class="form-control-select" v-model="user.active"
                                id="active">
                            <option :selected="user.active === 1" :value="1">aktive</option>
                            <option :selected="user.active === 0" :value="0">inaktive</option>
                        </select>
                    </div>
                    <div class="form-group split-2">
                        <p>Erstellt:{{ user.created_at}}</p>
                        <p>Letztes Update: {{user.updated_at}}</p>
                    </div>
                    <div class="space-between">
                        <button class="btn btn-white" @click="handleGoAdminOverview">Zurück</button>
                        <button class="btn btn-primary" @click="updateUser">Speichern</button>
                    </div>
                </form>
            </div>
        </div>
        <h3 class="admin-dashboard-headline">User Konten</h3>
        <ul class="admin-user-accounts">
            <li v-for="account in user.accounts">
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
                <ul class="admin-user-categories">
                    <li v-for="category in account.categories">
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
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>

<script>
  import _ from 'lodash'
  import mixins from "../../../utility/mixins";

  export default {
    name: "UserEdit",
    mixins: [mixins],
    data() {
      return {
        roles: [],
        userStatus: null,
        user: {
          name: '',
          email: '',
        }
      }
    }, methods: {
      updateUser(event) {
        event.preventDefault();
        let payload = this.user;
        this.$store.dispatch('adminUpdateUser', payload);
      },
      changeUserStatus(event) {
        this.userStatus = event.target.value;
      }
    },
    created() {
      this.roles = _.clone(this.$store.getters.getRoles);
      this.user = _.clone(this.$store.getters.filterUserById(this.$route.params.userId));
    }
  }
</script>
