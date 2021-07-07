<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 v-if="editMode">Konto Bearbeiten</h3>
                <h3 v-if="!editMode">Konto Erstellen</h3>
                <button @click="handleGoBack">&times;</button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="name">Name <span class="red">*</span></label>
                        <input v-model="accountForm.name" class="form-control" type="text"
                               placeholder="Konto Name" id="name" name="name">
                        <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label>Farbe <span class="red">*</span></label>
                        <color-picker v-model="accountForm.color"></color-picker>
                    </div>
                    <div class="form-group">
                        <div class="split-2">
                            <label for="currency">Währung</label>
                            <select class="form-control-select" v-model="accountForm.currency" @change="currencyChange"
                                    id="currency">
                                <option v-for="(value, currency)  in currencies"
                                        :selected="accountForm.currency === currency" :value="currency">{{currency}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div v-if="autoCalculationOption" class="form-group">
                        <div class="split-2">
                            <div>
                                <span class="block">Währung Umrechnen?</span>
                                <span class="orange">! <small>Wechselkurse von European Central Bank</small></span>
                            </div>
                            <div>
                                <label class="toggle-switch" for="autoCalc">
                                    <input type="checkbox" id="autoCalc" value="true" class="toggle-switch__input"
                                           v-model="accountForm.autoCalculation">
                                    <span class="toggle-switch__slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group ">
                        <label for="description">Beschreibung <span class="red">*</span></label>
                        <span class="error-msg" v-if="errors && errors.description">{{errors.description[0]}}</span>
                        <textarea name="description"
                                  placeholder="Beschreibung"
                                  id="description"
                                  cols="30" rows="10"
                                  v-model="accountForm.description">
                        </textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-white" @click="handleGoBack">Abbrechen</button>
                    <button v-if="!editMode" @click="createNewAccount" class="btn btn-primary">Erstellen
                    </button>
                    <button v-if="editMode" @click="updateAccount" class="btn btn-primary">Speichern
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  import ColorPicker from '../../partials/Basic/ColorPicker'
  import mixins from '../../../utility/mixins';
  import {mapGetters} from 'vuex'
  import _ from 'lodash';
  import account from "../../../store/modules/account";


  export default {
    name: 'accountForm',
    mixins: [mixins],
    components: {
      'color-picker': ColorPicker,
    },
    computed: mapGetters({
      errors: 'getErrors',
      currencies: 'getCurrencies'
    }),
    data() {
      return {
        editMode: false,
        autoCalculationOption: false,
        accountForm: {
          name: '',
          color: 'blue',
          currency: 'EUR',
          description: '',
          autoCalculation: false,
        },
      }
    }, watch: {}, methods: {
      //Create new Account
      createNewAccount(event) {
        event.preventDefault();

        let data = this.accountForm;
        this.$store.dispatch('createAccount', data);
      },
      //Update Account
      updateAccount(event) {
        event.preventDefault();

        let data = this.accountForm;
        data['currencies'] = this.currencies;

        this.$store.dispatch('updateAccount', data)
      },

      currencyChange() {
        if (this.editMode === true) {
          this.autoCalculationOption = true;
        }
      }

    },


    created() {
      this.$store.commit('resetErrors');
      if (this.$route.name === 'accountEdit') {
        this.editMode = true;
        if (this.$store.getters.getAccount.length < 1) {
          this.$router.push({name: 'dashboard'})
        } else {
          //Clone the State
          this.accountForm = _.clone(this.$store.getters.getAccount);
        }
      }
      let app = document.querySelector("#app");// add class for Overlay
      app.classList.add("overlay")
    }, destroyed() {
      let app = document.querySelector("#app");// remove class for Overlay
      app.classList.remove("overlay");
    }
  }
</script>


