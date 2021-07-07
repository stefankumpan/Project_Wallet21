<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>{{passbook.name}} Löschen?</h3>
                <button @click="handleGoDashboard">&times; <span class="visually-hidden">close</span></button>
            </div>
            <div class="modal-body">
                <p class="error-msg">Sie sind dabei <span class="highlight">"{{passbook.name}}"</span> zu Löschen, möchten sie Fortfahren?</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-white" @click="handleGoDashboard">Abbrechen</button>
                <button class="btn btn-danger" @click="deleteBookingRecord">Löschen</button>
            </div>
        </div>
    </div>
</template>

<script>
  import mixins from '../../../utility/mixins';
  import {mapGetters} from 'vuex'

  export default {
    mixins: [mixins],
    computed: {
      passbook() {
        return this.$store.getters.getPassbookById(this.$route.params.passbookId)
      }
    },
    methods:{
      deleteBookingRecord(){
        let payload = this.passbook;
        this.$store.dispatch('deletePassbook',payload)
      }
    },
    created() {
      let app = document.querySelector("#app");// add class for Overlay
      app.classList.add("overlay");
    },
    destroyed() {
      let app = document.querySelector("#app");// remove class for Overlay
      app.classList.remove("overlay")
    }
  }
</script>


