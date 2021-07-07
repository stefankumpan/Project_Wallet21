<template>
    <div class="wrapper">
        <div class="card">
            <h2>Packet Übersicht</h2>
            <div class="card-body">
                <form>

                    <div class="form-group split-2">
                        <label for="packageName">Paket Name</label>
                        <input type="text" v-model="package.name" id="packageName" class="form-control"
                               placeholder="Paket Name">
                        <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="packageRunTime">Laufzeit [Monat]</label>
                        <input type="number" v-model="package.run_time" id="packageRunTime" class="form-control"
                               placeholder="1">
                        <span class="error-msg" v-if="errors && errors.rune_time">{{errors.run_time[0]}}</span>

                    </div>
                    <div class="form-group split-2">
                        <label for="numbering">Ordnungs Nr </label>
                        <input type="number" v-model="package.numbering" id="numbering" class="form-control"
                               placeholder="1">
                    </div>
                    <div class="form-group split-2">
                        <label for="price">Preis (Preis pro Monat)</label>
                        <input type="number" v-model="package.price" id="price" class="form-control">
                        <span class="error-msg" v-if="errors && errors.price">{{errors.price[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="discountPrice">Rabbat Preis (Preis pro Monat)</label>
                        <input type="number" v-model="package.discount_price" id="discountPrice" class="form-control">
                        <span class="error-msg"
                              v-if="errors && errors.discount_price">{{errors.discount_price[0]}}</span>
                    </div>

                    <div class="form-group split-2">
                        <div>
                            <input type="hidden" v-model="reRenderFeature">
                            <ul class="admin-package-feature">
                                <li v-for="(item,index) in package.info" :key="index" class="feature-item">
                                    {{item}}
                                    <span @click="removeFeature(index)" class="close">&times;</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <label for="featureInfo">Feature</label>
                            <input type="text" v-model="newFeature" id="featureInfo" class="form-control">
                            <button type="button" @click="addFeatureInfo" class="btn btn-success mt-1 text-right">
                                Hinzufügen
                            </button>
                        </div>
                    </div>
                    <div v-if="editMode" class="form-group">
                        <p>Möchten Sie das Paket Löschen?</p>
                        <button class="btn btn-danger btn-icon" @click="deletePackage"><i
                                class="icon-rubbish-bin-delete-button"></i>Löschen
                        </button>
                    </div>

                    <!--Actions Buttons-->
                    <div class="space-between">
                        <router-link :to="{name:'adminPackages'}" class="btn btn-white">Zurück</router-link>
                        <button v-if="!editMode" class="btn btn-primary" @click="createPackage">Erstellen</button>
                        <button v-if="editMode" class="btn btn-primary" @click="updatePackage">Speichern</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
  import _ from 'lodash'
  import {mapGetters} from 'vuex'
  import mixins from "../../../utility/mixins";


  export default {
    name: "PackageForm",
    mixins: [mixins],
    computed: mapGetters({errors: 'getErrors'}),
    data() {
      return {
        editMode: false,
        reRenderFeature: 0,
        package: {
          "id": 1,
          "name": "",
          "info": {},
          "run_time": 0,
          "numbering": 0,
          "price": "0.00",
          "discount_price": "0.00",
        }
        ,
        newFeature: '',
      }
    },
    methods: {
      createPackage(event) {
        event.preventDefault();
        this.$store.dispatch('adminCreatePackage', this.package);
      },
      updatePackage(event) {
        event.preventDefault();
        this.$store.dispatch('adminUpdatePackage', this.package);
      },
      deletePackage(event) {
        event.preventDefault();
        this.$store.dispatch('adminDeletePackage', this.package);
      },
      addFeatureInfo() {
        let idx = _.size(this.package.info) + 1;
        // console.log(idx);
        // console.log(this.newFeature);
        this.package.info[idx] = this.newFeature;
        this.reRenderFeature += 1
      },
      removeFeature(e) {
        delete this.package.info[e];
        this.reRenderFeature += 1
      }
    },
    created() {
      // console.log(this.$route.params.packageId);
      if (this.$route.params.packageId !== undefined) {
        this.package = _.clone(this.$store.getters.filterAdminPackageById(this.$route.params.packageId));
        this.editMode = true;
      } else {
        this.editMode = false;
      }
    }
  }
</script>

