<template>
    <div class="wrapper-sm">
        <div class="card">
            <h2>Passwort Reset</h2>
            <div class="card-body">
                <form @submit="handleResetPassword">
                    <p v-if="message != null">{{message}}</p>

                    <div class="form-group">
                        <label for="password">Passwort <span class="red">*</span></label>
                        <input class="form-control" type="password" id="password" name="password" placeholder="Passwort"
                               v-model="formResetPassword.password">
                        <span class="error-msg" v-if="errors && errors.password">{{errors.password[0]}}</span>
                    </div>
                    <div class="form-group">
                        <label for="passwordConfirm">Passwort Wiederholen <span class="red">*</span></label>
                        <input class="form-control" type="password" id="passwordConfirm" name="passwordConfirm"
                               placeholder="Passwort Wiederholen"
                               v-model="formResetPassword.password_confirmation">
                    </div>
                    <div>
                        <button :disabled="formResetPassword.password_confirmation !== formResetPassword.password"
                                type="submit" class="btn btn-primary btn-full">Neues Password
                            erstellen
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import _ from 'lodash';

  export default {
    name: "PasswordReset",
    computed: mapGetters({
      'errors': 'getErrors',
      'message': 'getForgotPasswordMessage',

    }),
    data() {
      return {
        formResetPassword: {
          password: '',
          password_confirmation: '',
          token: '',
        }
      }
    },
    methods: {
      handleGetResetPasswordToken() {
        let payload = this.formResetPassword.token;
        this.$store.dispatch('handlePasswordResetToken', payload);

      },
      handleResetPassword(event) {
        event.preventDefault();
        let payload = this.formResetPassword;
        this.$store.dispatch('handlePasswordReset', payload);
      },
    },
    created() {
      this.formResetPassword.token = this.$route.params.token;
      this.handleGetResetPasswordToken();
    }
  }
</script>

