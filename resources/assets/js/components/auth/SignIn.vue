<template>
    <div class="wrapper-sm">
        <div class="card">
            <h2>Login</h2>
            <div class="card-body">
                <div v-if="errors !== ''" class="alert-box">
                    <span v-for="error in errors">{{error[0]}}</span>
                </div>
                <form @submit="submitSignIn">

                    <div class="form-group">
                        <label for="email">E-Mail</label>
                        <input class="form-control" type="email" id="email" name="email" v-model="formSignIn.email"
                               placeholder="E-Mail">

                    </div>
                    <div class="form-group">
                        <label for="password">Passwort</label>
                        <input class="form-control" type="password" id="password" name="password" placeholder="Passwort"
                               v-model="formSignIn.password">
                    </div>
                    <div class="form-group">
                        <button :disabled="(!formSignIn.email||!formSignIn.password )" type="submit"
                                class="btn btn-primary btn-full">Anmelden
                        </button>
                    </div>
                </form>
                <router-link :to="{name:'forgotPassword'}" class="text-center blue">Passwort vergessen</router-link>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "SignIn",
    data() {
      return {
        formSignIn: {
          email: '',
          password: '',
        }
      }
    }, computed: mapGetters({
      'errors': 'getErrors',
    }), methods: {
      submitSignIn(event) {
        event.preventDefault();
        this.$store.dispatch('handleSignIn', this.formSignIn);

      }
    }, created() {
      this.$store.commit('resetErrors')
    }
  }
</script>

