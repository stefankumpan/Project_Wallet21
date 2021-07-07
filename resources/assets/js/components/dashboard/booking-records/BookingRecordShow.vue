<template>
    <div class="modal">
        <div class="modal-content-lg">
            <div class="modal-header">
                <h3>{{bookingRecord.name}}</h3>
                <button @click="handleGoBack">&times; <span class="visually-hidden">close</span></button>
            </div>
            <div class="modal-body">
                <div class="booking-records-overview">
                    <div class="booking-records-info">
                        <ul class="booking-records-stats">
                            <li class="highlight">
                                <span>Datum: </span>
                                <span>{{formatDateDMY(bookingRecord.date)}}</span>
                            </li>
                            <li class="highlight">
                                <span>Betrag: </span>
                                <span :class="{red: bookingRecord.revenue - bookingRecord.expenditure < 0, green: bookingRecord.revenue - bookingRecord.expenditure > 0}">
                            {{formatCurrency((bookingRecord.revenue - bookingRecord.expenditure),currency)}}</span>
                            </li>
                            <li><span class="highlight">Ust.: </span>{{bookingRecord.tax}}%</li>
                            <li><span class="highlight">Ust. Betrag: </span>
                                {{formatCurrency(bookingRecord.tax_amount,currency)}}
                            </li>
                            <li>
                                <h4>Beschreibung:</h4>
                                <p class="description">{{bookingRecord.description}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="booking-records-image-box">
                        <img :src="AppUrl+bookingRecord.image" :alt="bookingRecord.name"
                             :class="{'booking-records-image-full':imgFullSize}"
                             @click="handleImageSize"
                        >
                        <a :href="AppUrl+bookingRecord.image" download>Downloaden</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import mixins from '../../../utility/mixins';
  import {mapGetters} from 'vuex';
  import {AppUrl} from '../../../utility/config';


  export default {
    computed: mapGetters({
      currency: 'getAccountCurrency'
    }),
    mixins: [mixins],
    data() {
      return {
        bookingRecord: [],
        AppUrl: AppUrl,
        imgFullSize:false,
      }
    },methods:{
      handleImageSize(){
        console.log('cliock');
        console.log(this.imgFullSize);
        this.imgFullSize =! this.imgFullSize;
      }
    },
    created() {
      let app = document.querySelector("#app");// add class for Overlay
      app.classList.add("overlay");
      let id = this.$route.params.bookingRecordId;
      this.bookingRecord = this.$store.getters.filterBookingRecordsById(id);
    },
    destroyed() {
      let app = document.querySelector("#app");// remove class for Overlay
      app.classList.remove("overlay")
    }
  }
</script>

