<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>{{account.name}} Löschen?</h3>
                <button @click="handleGoBack">&times; <span class="visually-hidden">close</span></button>
            </div>
            <div class="modal-body">
                <p class="error-msg">Sie sind dabei <span class="highlight">"{{account.name}}"</span> zu Löschen,
                    möchten sie fortfahren?</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-white" @click="handleGoBack">Abbrechen</button>
                <button class="btn btn-danger" @click="deleteAccount">Löschen</button>
            </div>
        </div>
    </div>
</template>

<script>
  import mixins from '../../../utility/mixins';
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters({
      account: 'getAccount',
    }),
    mixins: [mixins],
    methods: {
      deleteAccount() {
        let payload = this.account;
        this.$store.dispatch('deleteAccount', payload);
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


