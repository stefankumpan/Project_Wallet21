<template>
    <div class="wrapper checkout">
        <h2>Kassa</h2>

        <div class="checkout-box">
            <div class="checkout-info">
                <div class="checkout-product">
                    <h3>{{checkoutForm.product.name}}</h3>
                    <ul class="price_overview">
                        <li><span>Preis:</span> <span>{{formatCurrency(checkoutForm.net_price,'EUR')}}</span>
                        </li>
                        <li><span>Ust.:</span> <span>{{formatCurrency(checkoutForm.tax,'EUR')}}</span>
                        </li>
                        <li><span>Summe:</span> <span>{{formatCurrency(checkoutForm.price,'EUR')}}</span>
                        </li>
                    </ul>
                    <p class="discount_notic" v-if="discountInfo.newPrice < discountInfo.oldPrice">
                        Sie Sparen <span class="highlight">{{ formatCurrency((discountInfo.oldPrice - discountInfo.newPrice),'EUR') }}</span>
                        | <span class="line-through red">{{formatCurrency(discountInfo.oldPrice,'EUR')}}</span>
                        {{formatCurrency(discountInfo.newPrice,'EUR')}}
                    </p>
                </div>
                <div class="checkout-client">
                    <h3>Ihre Informationen</h3>
                    <ul class="client_overview">
                        <li><span>Name:</span> <span>{{checkoutForm.client.name}}</span></li>
                        <li><span>E-mail:</span><span> {{checkoutForm.client.email}}</span></li>
                        <li v-if="runningSub">
                            <p class="info-text">Sie haben bereits ein Laufendes Abonnement bis
                                <span class="highlight">{{formatDateDMY(checkoutForm.client.sub_expire)}}</span>. Durch
                                diesen Kauf wird die Zeit auf
                                ihr Abonnement Hinzugefügt.
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="checkout-partner">
                    <h4>Support Informationen</h4>
                    <p class="info-text">Sie möchten ihren <span class="highlight">Lieblieng Influencer</span>
                        Unterstützen dann geben Sie seinen Support-Key ein.</p>
                    <div class="form-group">
                        <label for="partnerKey">Support Key</label>
                        <input type="text" class="form-control" id="partnerKey" name="partner_key"
                               v-model="checkoutForm.partner_key" placeholder="Support Key von Influencer">
                    </div>
                </div>
            </div>
            <div class="checkout-payment">
                <form>
                    <div class="payment-methods">
                        <div class="payment_option" :class="{active: checkoutForm.paymentMethod === 'credit-card'}"
                             @click="$refs.credit.click()">
                            <label for="credit-card">
                                <input type="radio" id="credit-card" value="credit-card" ref="credit"
                                       class="visually-hidden" v-model="checkoutForm.paymentMethod" checked>
                                Kreditkarte
                            </label>
                            <i class="icon-master-card"></i> <i class="icon-visa"></i>
                        </div>
                        <div class="payment_option" :class="{active: checkoutForm.paymentMethod === 'debits-card'}"
                             @click="$refs.debits.click()">
                            <label for="debits-card">
                                <input type="radio" id="debits-card" value="debits-card" ref="debits"
                                       class="visually-hidden" v-model="checkoutForm.paymentMethod">
                                Lastschrift
                            </label>
                            <i class="icon-bank-card"></i>
                        </div>
                    </div>
                    <div class="payment_data">
                        <div class="form" v-if="checkoutForm.paymentMethod === 'credit-card'">
                            <div class="form-group">
                                <label for="card-number">Kartennummer <span class="red">*</span></label>
                                <input type="number" id="card-number" name="card-number" class="form-control"
                                       placeholder="Kartennummer" v-model="checkoutForm.paymentInfo.creditCard">
                                <span class="error-msg"
                                      v-if="errors && errors.creditCard">{{errors.creditCard[0]}}</span>

                            </div>
                            <div class=" split-2">
                                <div class="form-group">
                                    <label for="expiry-date">Ablaufdatum <span class="red">*</span></label>
                                    <input type="text" id="expiry-date" name="expiry-date" class="form-control" placeholder="08/2019"
                                           v-model="checkoutForm.paymentInfo.expiryDate">
                                    <span class="error-msg"
                                          v-if="errors && errors.expiryDate">{{errors.expiryDate[0]}}</span>
                                </div>
                                <div class="form-group">
                                    <label for="security-code">Sicherheitscode <span class="red">*</span></label>
                                    <input type="number" id="security-code" name="security-code" class="form-control"
                                           placeholder="Sicherheitscode"
                                           v-model="checkoutForm.paymentInfo.securityCode">
                                    <span class="error-msg" v-if="errors && errors.securityCode">{{errors.securityCode[0]}}</span>

                                </div>
                            </div>
                            <div class="form-group">
                                <label for="credit-card-name">Name <span class="red">*</span></label>
                                <input type="text" id="credit-card-name" name="credit-card-name" class="form-control"
                                       placeholder="Name auf der Karte" v-model="checkoutForm.paymentInfo.name">
                                <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>

                            </div>
                        </div>
                        <div class="form" v-if="checkoutForm.paymentMethod === 'debits-card'">
                            <div class="form-group">
                                <label for="debits-card-name">Name <span class="red">*</span></label>
                                <input type="text" id="debits-card-name" name="debits-card-name" class="form-control"
                                       placeholder="Vollständiger Name" v-model="checkoutForm.paymentInfo.name">
                                <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>
                            </div>
                            <div class="form-group">
                                <label for="iban"> IBAN <span class="red">*</span></label>
                                <input class="form-control" type="text" id="iban" name="iban"
                                       v-model="checkoutForm.paymentInfo.iban"
                                       placeholder="International Bank Account Number (IBAN)">
                                <span v-if="ibanError" class="error-msg">Der eingegebene IBAN ist keine International Bank Account Number (IBAN)</span>
                                <span class="error-msg" v-if="errors && errors.iban">{{errors.iban[0]}}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <p class="info-text">Mehr Informationen erhalten Sie unter
                                <router-link :to="{name:'privacy'}" class="blue">Datenschutzbestimmungen</router-link>
                                und
                                <router-link :to="{name:'agbs'}" class="blue">Allgemeinen Geschäftsbedingungen
                                </router-link>
                            </p>
                        </div>
                        <div class="checkout-payment_options">
                            <button type="button" class="btn btn-white" @click="handleCancel">Abbrechen</button>
                            <button type="submit" class="btn btn-primary" @click="handleCheckOut">Jetzt bezahlen
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import _ from 'lodash';
  import moment from 'moment';
  import mixins from "../../utility/mixins";

  export default {
    name: "BuyForm",
    mixins: [mixins],
    computed: mapGetters({
      errors: 'getErrors',
      user: 'getUser',
    }),
    data() {
      return {
        runningSub: false,
        ibanError: false,
        discountInfo: {
          oldPrice: 0,
          newPrice: 0,
        },
        checkoutForm: {
          client: {},
          product: {},
          paymentMethod: 'credit-card',
          paymentInfo: {
            name: '',
            creditCard: '',
            securityCode: '',
            expiryDate: '',
            iban: '',
          },
          price: null,
          tax: null,
          net_price: null,
          package_id: null,
          partner_key: null
        }
      }
    }, methods: {
      handleCancel() {
        this.$store.commit('setBuyProcessStatus', false);
      },
      handleCheckOut(event) {
        event.preventDefault();
        let payload = this.checkoutForm;
        this.$store.dispatch('createOrder', payload);
      },
      calculationPrice() {
        this.checkoutForm.net_price = (this.checkoutForm.product.discount_price * this.checkoutForm.product.run_time * 0.8);
        this.checkoutForm.tax = (this.checkoutForm.product.discount_price * this.checkoutForm.product.run_time * 0.2);
        this.checkoutForm.price = (this.checkoutForm.product.discount_price * this.checkoutForm.product.run_time);

        //discount Offer Info
        this.discountInfo.oldPrice = (this.checkoutForm.product.price * this.checkoutForm.product.run_time);
        this.discountInfo.newPrice = this.checkoutForm.price;
      },


    },
    created() {
      this.checkoutForm.client = _.clone(this.$store.getters.getUser);
      this.checkoutForm.package_id = _.clone(this.$store.getters.getSelectedPackage);
      this.checkoutForm.product = _.clone(this.$store.getters.filterPackageById(this.checkoutForm.package_id));
      let today = moment().format('YYYY-MM-DD');
      this.runningSub = !(this.checkoutForm.client.sub_expire === 0 || this.checkoutForm.client.sub_expire < today);
      this.calculationPrice();
      this.$store.commit('resetErrors');
      if(mixins.methods.getCookie('partnerKey')){
        this.checkoutForm.partner_key = mixins.methods.getCookie('partnerKey');
      }
    }
  }
</script>
