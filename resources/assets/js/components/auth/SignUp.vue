<template>
    <div class="wrapper-sm">
        <div class="card">
            <h2>Registrieren</h2>
            <div class="card-body">
                <form @submit="submitSignUp">
                    <div class="form-group">
                        <label for="email">E-Mail <span class="red">*</span></label>
                        <input class="form-control" type="email" id="email" name="email" v-model="formSignUp.email"
                               placeholder="E-Mail">
                        <span class="error-msg" v-if="errors && errors.email">{{errors.email[0]}}</span>
                    </div>
                    <div class="form-group">
                        <label for="name">Name <span class="red">*</span></label>
                        <input class="form-control" type="text" id="name" name="name" v-model="formSignUp.name"
                               placeholder="Vollständiger Name">
                        <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>
                    </div>
                    <div class="form-group">
                        <label for="password">Passwort <span class="red">*</span></label>
                        <input class="form-control" type="password" id="password" name="password" placeholder="Passwort"
                               v-model="formSignUp.password">
                        <span class="error-msg" v-if="errors && errors.password">{{errors.password[0]}}</span>
                    </div>
                    <div class="form-group">
                        <p>
                            <small>Durch die Erstellung Ihres Kontos stimmen Sie unseren
                                <router-link :to="{name:'agbs'}" class="blue">Allgemeinen Geschäftsbedingungen
                                </router-link>
                                und
                                <router-link :to="{name:'privacy'}" class="blue">Datenschutzbestimmungen</router-link>
                                zu.
                            </small>
                        </p>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary btn-full">Registrieren</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

  import {mapGetters} from 'vuex'

  export default {
    name: "SignUp",
    computed: mapGetters({
      errors: 'getErrors'
    }),
    data() {
      return {
        title: '',
        formSignUp: {
          email: '',
          name: '',
          password: '',
        },
      }
    },
    methods: {
      submitSignUp(event) {
        event.preventDefault();
        this.$store.dispatch('handleSignUp', this.formSignUp);
      }

    }, created() {
      this.$store.commit('resetErrors')
    }
  }
</script>


