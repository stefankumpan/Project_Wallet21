<template>
    <div class="price">
        <h2>Preise</h2>
        <ul class="price-list">
            <li v-for="singlePackage in packages" class="item" :class="{'active':singlePackage.id === selectedPackage}">
                <div class="offer">
                    <h3>{{singlePackage.name}}</h3>
                    <ul class="package">
                        <li v-for="item in singlePackage.info"><i class="icon-checked"></i>{{item}}</li>
                    </ul>
                </div>

                <div class="price-info">
                    <span class="amount">{{formatCurrency(singlePackage.discount_price,'EUR')}}</span>
                    <span class="interval">pro Monat</span>
                    <span class="discount">Sparen Sie {{round(calculationDiscount(singlePackage.price,singlePackage.discount_price),0)}}%</span>
                    <p class="summe" v-if="singlePackage.discount_price < singlePackage.price">
                        <span class="line-through red">{{formatCurrency((singlePackage.price*singlePackage.run_time),'EUR')}}</span> {{formatCurrency((singlePackage.discount_price*singlePackage.run_time),'EUR')}}
                    </p>
                    <p class="summe" v-if="singlePackage.discount_price >= singlePackage.price">
                        Summe {{formatCurrency((singlePackage.discount_price*singlePackage.run_time),'EUR')}}
                    </p>
                    <button @click="handleSelectPackage(singlePackage.id)" :disabled="singlePackage.price <= 0" class="btn btn-primary btn-full">Auswählen</button>
                </div>
            </li>
        </ul>
        <transition name="fade-in-down" mode="out-in">
            <div v-if="selectedPackage !== null" class="continue-buy-process">

                <p v-if="!isAuthorized" class="text-center">Sie müssen Angemeldet sein um weiter Fortzufahren.</p>
                <p v-if="!isAuthorized" class="text-center">
                    <router-link :to="{name:'signin'}" class="blue">Einloggen</router-link> oder
                    <router-link :to="{name:'signup'}" class="blue">Registrieren
                    </router-link>
                </p>
                <p v-if="isAuthorized">
                    Sie haben ein Paket Ausgewählt möchten Sie mit den Kauf Fortfahren?
                </p>
                <button v-if="isAuthorized" @click="handleBuyProcessStatus"  class="btn btn-primary">Weiter</button>
            </div>
        </transition>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import mixins from "../../utility/mixins";

  export default {
    name: "Price",
    mixins: [mixins],
    computed: mapGetters({
      packages: 'getPackages',
      selectedPackage: 'getSelectedPackage',
      isAuthorized: 'getIsAuthorizedStatus',

    }),
    data(){
      return{
        buyProcessStatus: false,
      }
    },
    methods: {

      handleSelectPackage(event){
        this.$store.commit('setSelectedPackage',event);
      },
      handleBuyProcessStatus(){
        this.$store.commit('setBuyProcessStatus',true);
      }
    },
    created() {
      this.$store.dispatch('loadPackages')
    }
  }
</script>
