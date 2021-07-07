<template>
    <div class="wrapper">
        <div class="card">
            <h2>Partner</h2>
            <div class="card-body">
                <form>
                    <!--User-->
                    <div class="form-group split-2">
                        <label for="userName">Name</label>
                        <input type="text" v-model="order.client.name" id="userName" class="form-control">
                    </div>
                    <div class="form-group split-2">
                        <label for="userEmail">E-Mail</label>
                        <input type="text" v-model="order.client.email" id="userEmail" class="form-control">
                    </div>
                    <!--Payment-->
                    <div class="form-group split-2">
                        <label for="invoiceNumber">Rechnung Nr.:</label>
                        <input type="text" v-model="order.invoice_number" id="invoiceNumber" class="form-control" readonly>
                    </div>
                    <div class="form-group split-2">
                        <label for="payment_method">Zahlungsart</label>
                        <div>
                            <select class="form-control-select" v-model="order.payment_method"
                                    id="payment_method">
                                <option :selected="order.payment_method === 'credit-card'" value="credit-card">Kreditkarte</option>
                                <option :selected="order.payment_method === 'debits-card'" value="debits-card">Lastschrift</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="order.payment_method === 'credit-card'">
                        <div class="form-group split-2">
                            <label for="paymentNumberCredit">Kartennummer <span class="red">*</span></label>
                            <input type="number" id="paymentNumberCredit" class="form-control"
                                   placeholder="Kartennummer" v-model="order.payment.creditCard">
                            <span class="error-msg" v-if="errors && errors.creditCard">{{errors.creditCard[0]}}</span>
                        </div>
                        <div class="form-group split-2">
                            <label for="expiryDate">Ablaufdatum <span class="red">*</span></label>
                            <input type="text" id="expiryDate" class="form-control" placeholder="08/2019"
                                   v-model="order.payment.expiryDate">
                            <span class="error-msg"
                                  v-if="errors && errors.expiryDate">{{errors.expiryDate[0]}}</span>
                        </div>
                    </div>
                    <div v-if="order.payment_method === 'debits-card'">
                        <div class="form-group split-2">
                            <label for="iban"> IBAN <span class="red">*</span></label>
                            <input class="form-control" type="text" id="iban" name="name"
                                   v-model="order.payment.iban"
                                   placeholder="International Bank Account Number (IBAN)">
                            <span class="error-msg" v-if="errors && errors.iban">{{errors.iban[0]}}</span>
                        </div>
                    </div>

                    <!--Order/Paket-->
                    <div class="form-group split-2">
                        <label for="price">Preis</label>
                        <input type="number" v-model="order.price" id="price" class="form-control">
                    </div>
                    <div class="form-group split-2">
                        <label for="netPrice">Netto Preis</label>
                        <input type="number" v-model="order.net_price" id="netPrice" class="form-control" readonly>
                    </div>
                    <div class="form-group split-2">
                        <label for="tax">Ust.:</label>
                        <input type="number" v-model="order.tax" id="tax" class="form-control" readonly>
                    </div>
                    <div class="form-group split-2">
                        <label for="productId">Paket Nr.:</label>
                        <input type="text" v-model="order.package_id" id="productId" class="form-control">
                    </div>
                    <div class="form-group split-2">
                        <label for="subscriptionId">Abonnement Id</label>
                        <input type="text" v-model="order.subscription_id" id="subscriptionId" class="form-control">
                    </div>
                    <div class="form-group split-2">
                        <label for="orderStatus">Bestell Status</label>
                        <div>
                            <select class="form-control-select" v-model="order.status"
                                    id="orderStatus" name="orderStatus">
                                <option :selected="order.status === 1" :value="1">Erfolgreich</option>
                                <option :selected="order.status === 0" :value="0">Storniert</option>
                            </select>
                        </div>
                    </div>
                    <!--Partner-->
                    <div class="form-group split-2">
                        <label for="partnerId">Partner Id</label>
                        <input type="text" v-model="order.partner_id" id="partnerId" class="form-control">
                    </div>
                    <div class="form-group split-2">
                        <label for="partnerkey">Support Key</label>
                        <input type="text" v-model="order.partner_key" id="partnerkey" class="form-control">
                    </div>
                    <!--Actions Buttons-->
                    <div class="space-between">
                        <router-link :to="{name:'adminOrders'}" class="btn btn-white">Zurück</router-link>
                        <button class="btn btn-primary" @click="updateOrder">Speichern</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
  import _ from 'lodash'
  import mixins from "../../../utility/mixins";
  import {mapGetters} from 'vuex'

  export default {
    name: "OrderForm",
    mixins: [mixins],
    computed: mapGetters({
      errors: 'getErrors',
    }), data() {
      return {
        order: null,
      }
    },
    methods: {
      updateOrder(event) {
        event.preventDefault();
        this.$store.dispatch('adminUpdateOrder', this.order);
      },
    },
    created() {
      // console.log(this.$route.params.orderId);
      this.order = _.clone(this.$store.getters.filterAdminOrderById(this.$route.params.orderId));
      this.$store.commit('resetErrors');
    }
  }
</script>

