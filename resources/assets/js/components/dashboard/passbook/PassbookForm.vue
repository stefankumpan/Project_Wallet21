<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 v-if="editMode">Sparkonto Bearbeiten</h3>
                <h3 v-if="!editMode">Sparkonto Erstellen</h3>
                <button @click="handleGoDashboard">&times;</button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="name">Name <span class="red">*</span></label>
                        <input v-model="passbookForm.name" class="form-control" type="text" id="name" name="name"
                               placeholder="Sparkonto Name">
                        <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="amount">Ziel Betrag <span class="red">*</span></label>
                        <input v-model="passbookForm.amount"
                               class="form-control" type="number"
                               id="amount" name="amount">
                        <span class="error-msg" v-if="errors && errors.amount">{{errors.amount[0]}}</span>
                    </div>
                    <div class="form-group">
                        <div class="split-2">
                            <label for="currency">Währung <span class="red">*</span></label>
                            <select class="form-control-select" v-model="passbookForm.currency" id="currency">
                                <option v-for="(value, currency)  in currencies"
                                        :selected="passbookForm.currency === currency" :value="currency">{{currency}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="description">Beschreibung <span class="red">*</span></label>
                        <span class="error-msg" v-if="errors && errors.description">{{errors.description[0]}}</span>
                        <textarea name="description" placeholder="Beschreibung" id="description"
                                  v-model="passbookForm.description">
                        </textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-white" @click="handleGoDashboard">Abbrechen
                    </button>
                    <button v-if="!editMode" class="btn btn-primary " @click="createPassbook">Erstellen
                    </button>
                    <button v-if="editMode" class="btn btn-primary " @click="updatePassbook">Speichern
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
  import mixins from '../../../utility/mixins';
  import {mapGetters} from 'vuex'
  import _ from 'lodash'

  export default {
    name: "PassbookForm",
    mixins: [mixins],
    computed: mapGetters({
      errors: 'getErrors',
      currencies: 'getCurrencies',
    }),
    data() {
      return {
        editMode: false,
        fileSizeError: false,
        passbookForm: {
          name: '',
          amount: 0,
          description: '',
          currency: 'EUR',
        }
      }
    },
    methods: {
      //Create Passbook - Erstellt Sparkonto
      createPassbook(event) {
        event.preventDefault();
        let payload = this.passbookForm;
        this.$store.dispatch('createPassbook', payload)
      },
      //Update Passbook - Update Sparkonto
      updatePassbook(event) {
        event.preventDefault();
        let payload = this.passbookForm;
        this.$store.dispatch('updatePassbook', payload)
      },
    },

    created() {
      this.$store.commit('resetErrors');
      let app = document.querySelector("#app");// add class for Overlay
      app.classList.add("overlay");
      //set Form from passbook - setzt das Formular von Sparkonto
      if (this.$route.params.passbookId !== undefined) {
        let data = _.clone(this.$store.getters.getPassbookById(this.$route.params.passbookId));
        this.editMode = true;
        this.passbookForm = data;
        this.passbookForm.amount = data.savings_target;
      }

    },
    destroyed() {
      let app = document.querySelector("#app");// remove class for Overlay
      app.classList.remove("overlay");

    }
  }
</script>

