<template>
    <div class="wrapper-sm">
        <div v-if="!sendStatus" class="card">
            <h2>Passwort Vergessen</h2>
            <div class="card-body">
                <form @submit="submitPasswordForgot">
                    <p class="text-center">
                        Bitte geben Sie ihre E-Mail-Adresse zur Kontowiederherstellung eingeben!
                    </p>
                    <hr>
                    <p v-if="message != null" class="red">{{message}}</p>
                    <div class="form-group">
                        <label for="email">E-Mail</label>
                        <input class="form-control" type="email" id="email" name="email" placeholder="E-Mail"
                               v-model="formForgotPassword.email">
                    </div>
                    <div>
                        <button :disabled="(!formForgotPassword.email)" type="submit"
                                class="btn btn-primary btn-full">Senden
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div v-if="sendStatus" class="card">
            <h2>E-Mail Versendet</h2>
            <div class="card-body">
                <p class="text-center highlight">
                    {{message}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "ForgotPassword",
    data() {
      return {
        formForgotPassword: {
          email: '',
        }
      }
    }, computed: mapGetters({
      'errors': 'getErrors',
      'sendStatus': 'getForgotPasswordSend',
      'message': 'getForgotPasswordMessage',
    }), methods: {
      submitPasswordForgot(event) {
        event.preventDefault();
        this.$store.dispatch('handleForgotPassword', this.formForgotPassword);
      }
    }, created() {
      this.$store.commit('resetErrors');
      this.$store.commit('setForgotPasswordSend',false);
      this.$store.commit('setForgotPasswordMessage',null)
    }
  }
</script>

<
