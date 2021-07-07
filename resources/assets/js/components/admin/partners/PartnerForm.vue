<template>
    <div class="wrapper">
        <div class="card bg-white">
            <h2>Partner Informationen</h2>
            <div class="card-body">
                <form>
                    <div class="form-group split-2">
                        <label for="name">Name</label>
                        <input class="form-control" type="text" id="name" v-model="partner.name">
                        <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="email">E-Mail</label>
                        <input class="form-control" type="email" id="email" v-model="partner.email">
                        <span class="error-msg" v-if="errors && errors.email">{{errors.email[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="share">Anteil in Prozent</label>
                        <input class="form-control" type="number" id="share" v-model="partner.share">
                        <span class="error-msg" v-if="errors && errors.share">{{errors.share[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="key">Partner Key</label>
                        <input class="form-control" type="text" id="key" v-model="partner.key">
                        <span class="error-msg" v-if="errors && errors.key">{{errors.key[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="active">Status</label>
                        <div>
                            <select class="form-control-select" v-model="partner.active"
                                    id="active">
                                <option :selected="partner.active === '1'" value="1">aktive</option>
                                <option :selected="partner.active === '0'" value="0">inaktive</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="editMode" class="form-group split-2">
                        <span>Diesen Monat Einnahmen</span>
                        <span>{{formatCurrency(partner.revenue_month,'EUR')}}</span>
                    </div>
                    <div v-if="editMode" class="form-group split-2">
                        <span>Gesamteinnahmen</span>
                        <span>{{formatCurrency(partner.revenue_total,'EUR')}}</span>
                    </div>
                    <div class="space-between">
                        <router-link class="btn btn-white" :to="{name:'adminPartners'}">Zurück</router-link>
                        <button v-if="!editMode" class="btn btn-primary" @click="createPartner">Erstellen</button>
                        <button v-if="editMode" class="btn btn-primary" @click="updatePartner">Speichern</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import mixins from "../../../utility/mixins";
  import _ from 'lodash'

  export default {
    name: "PartnerForm",
    mixins: [mixins],
    computed: mapGetters({
      errors: 'getErrors',
    }),
    data() {
      return {
        editMode: false,
        partner: {
          name: '',
          user_id: '',
          key: '',
          share: 0,
          active: 1,
        }
      }
    }, methods: {
      createPartner(event) {
        event.preventDefault();
        let payload = this.partner;
        this.$store.dispatch('adminCreatePartner', payload);
      },
      updatePartner(event) {
        event.preventDefault();
        let payload = this.partner;
        this.$store.dispatch('adminUpdatePartner', payload);
      },
    },
    created() {
      // console.log(this.$route.params.orderId);
      this.$store.commit('resetErrors');
      if (this.$route.params.partnerId !== undefined) {
        this.partner = _.clone(this.$store.getters.filterAdminPartnerById(this.$route.params.partnerId));
        this.editMode = true;
      }
    }
  }
</script>

