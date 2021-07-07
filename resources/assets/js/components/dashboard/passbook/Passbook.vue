<template>
    <div class="modal">
        <div class="modal-content" v-if="!addMode">
            <div class="modal-header">
                <h3>{{passbook.name}}</h3>
                <button @click="handleGoDashboard">&times;</button>
            </div>
            <div class="modal-body">
                <div class="passbook-action-nav">
                    <ul>
                        <li>
                            <a class="btn btn-success btn-icon link-size" @click="toggleAddMode"><i class="icon-add"></i>Betrag <span class="visually-hidden">hinzufügen</span></a>
                        </li>
                        <li>
                            <router-link :to="{name:'passbookEdit',params: {passbookId: passbook.id}}" class="btn btn-warning">
                                <i class="icon-pencil-edit-button"></i>  <span class="visually-hidden">Bearbeiten</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'passbookDelete',params: {passbookId: passbook.id}}" class="btn btn-danger">
                                <i class="icon-rubbish-bin-delete-button"></i>  <span class="visually-hidden">Löschen</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <ul class="passbook-stats">
                    <li>
                        <span>Aktuell</span>
                        <span class="highlight">{{formatCurrency(passbook.current_status,passbook.currency)}}</span>
                    </li>
                    <li>
                        <span>Ziel</span>
                        <span class="orange highlight">{{formatCurrency(passbook.savings_target,passbook.currency)}}</span>
                    </li>
                </ul>
                <app-progressbar
                        :value="calcProcent(passbook.current_status,passbook.savings_target,2)"
                        bar-class="bg-orange">
                    {{calcProcent(passbook.current_status,passbook.savings_target,2)}}%
                </app-progressbar>
                <h4>Beschreibung</h4>
                <p class="description">{{passbook.description}}</p>
            </div>
            <div class="modal-footer mt-1">
            </div>
        </div>
        <div class="modal-content" v-if="addMode">
            <div class="modal-header">
                <h3>{{passbook.name}} - Betrag Hinzufügen</h3>
                <button @click="handleGoBack">&times;</button>
            </div>
            <form>
                <div class="modal-body">
                    <span class="error-msg" v-if="amountError">Der Betrag übertrifft dein Sparziel!</span>
                  <div class="form-group split-2">
                      <label for="amount">Betrag Hinzufügen</label>
                      <input type="number" id="amount" name="amount" class="form-control" v-model="amount">
                  </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-white" @click="toggleAddMode">Zurück</button>
                    <button class="btn btn-primary" @click="updatePassbookCurrentStatus">Speicher</button>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
  import mixins from '../../../utility/mixins';
  import ProgressBar from '../../partials/Basic/ProgressBar';


  export default {
    name: "Passbook",
    mixins: [mixins],
    computed: {
      passbook() {
        return this.$store.getters.getPassbookById(this.$route.params.passbookId);
      }
    }, components: {
      'app-progressbar': ProgressBar,
    }, data() {
      return {
        addMode: false,
        amountError: false,
        amount: 0,
      }
    }, methods: {
      toggleAddMode() {
        this.addMode = !this.addMode
      },
      updatePassbookCurrentStatus(event){
        event.preventDefault();
        let maxValue = this.passbook.savings_target - this.passbook.current_status;
      // || this.amount + this.passbook.savings_target < 0
        if(this.amount >  maxValue ){
          this.amountError = true;
        }else {
          this.amountError = false;
          let payload = {
            'id':  this.passbook.id,
            'amount': this.amount
          };
          this.$store.dispatch('updatePassbookCurrentStatus',payload);
          this.addMode = false;
        }
      }
    },created() {
      this.$store.commit('resetErrors');
      let app = document.querySelector("#app");// add class for Overlay
      app.classList.add("overlay")
    },
    destroyed() {
      let app = document.querySelector("#app");// remove class for Overlay
      app.classList.remove("overlay");

    }
  }
</script>

