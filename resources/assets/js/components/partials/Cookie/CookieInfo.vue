<template>
    <div v-if="!cookieAllowed" class="cookie-info">
        <div class="cookie-box">
            <p>Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir
                Cookies.
                Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu. Weitere Informationen
                zu
                Cookies erhalten Sie in unserer
                <router-link :to="{name:'privacy'}">Datenschutzerklärung</router-link>
                .
            </p>
            <div class="cookie-btn">
                <button class="btn btn-white btn-full" @click="handleCookieAllowed">OK</button>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import mixins from "../../../utility/mixins";

  export default {
    name: "CookieInfo",
    mixins:[mixins],
    data() {
      return {
        cookieAllowed: false,
      }
    },
    methods: {
      handleCookieAllowed() {
        let cookieDate = new Date(moment().add(2, 'month').toDate());
        document.cookie = "cookieAllowed=true; expires=" + cookieDate;
        this.cookieAllowed = true;
      },
    },
    created() {
      // console.log(this.cookieAllowed);

      let cookieAllowed = mixins.methods.getCookie('cookieAllowed');
      // console.log(cookieAllowed);
      // console.log(cookieAllowed);
      if(cookieAllowed){
        this.cookieAllowed = true;
        // console.log('true');
      }else {
        this.cookieAllowed = false;
        // console.log('false');
      }
    }
  }
</script>

