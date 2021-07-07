<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>{{bookingRecord.name}} Löschen?</h3>
                <button @click="handleGoBack">&times; <span class="visually-hidden">close</span></button>
            </div>
            <div class="modal-body">
                <p class="error-msg">Sie sind dabei <span class="highlight">"{{bookingRecord.name}}"</span> zu Löschen, möchten sie fortfahren?</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-white" @click="handleGoBack">Abbrechen</button>
                <button class="btn btn-danger" @click="deleteBookingRecord">Löschen</button>
            </div>
        </div>
    </div>
</template>

<script>
  import mixins from '../../../utility/mixins';
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters({
      currency: 'getAccountCurrency'
    }),
    mixins: [mixins],
    data() {
      return {
        accountId: null,
        bookingRecord: [
        ],
      }
    },
    methods:{
      deleteBookingRecord(){
        let payload = {
          bookingRecord: this.bookingRecord,
          accountId: this.accountId,
        };
        this.$store.dispatch('deleteBookingRecord',payload)
      }
    },
    created() {
      let app = document.querySelector("#app");// add class for Overlay
      app.classList.add("overlay");
      let id = this.$route.params.bookingRecordId;
      this.bookingRecord = this.$store.getters.filterBookingRecordsById(id);
      this.accountId = this.$route.params.accountId;

    },
    destroyed() {
      let app = document.querySelector("#app");// remove class for Overlay
      app.classList.remove("overlay")
    }
  }
</script>


