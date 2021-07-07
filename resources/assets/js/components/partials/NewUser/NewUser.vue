<template>
    <div class="gift-box" v-if="isNewUser">
        <h3>Geschenk</h3>
        <img :src="giftImage" alt="Geschenkt">
        <p>Vielen Dank für deine Anmeldung als Geschenk bekommen Sie <span
                class="highlight">1 Monate gratis Premium!</span></p>
        <!--<p>Nach Ablauf des Premium Parketes wird es nicht automatisch verlängert.</p>-->
        <p>Wir Wünschen ihnen viel Erfolg!</p>
        <p class="highlight">Ihr Wallet 21 Team</p>
        <button type="button" class="btn btn-primary btn-full" @click="handleConfirmation">OK</button>
    </div>
</template>

<script>
  import {AppUrl} from '../../../utility/config'

  export default {
    name: "NewUser",
    data() {
      return {
        isNewUser: false,
        giftImage: AppUrl + 'images/other/gift.svg'
      }
    },
    methods: {
      handleConfirmation() {
        localStorage.removeItem('newUser');
        this.isNewUser = false;

      }
    }, created() {
      if (localStorage.getItem('newUser')) {
        this.isNewUser = true;
      }
    }
  }
</script>

