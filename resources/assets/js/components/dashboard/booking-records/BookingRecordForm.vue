<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 v-if="editMode">Buchung Bearbeiten</h3>
                <h3 v-if="!editMode">Buchung Erstellen</h3>
                <button @click="handleGoBack">&times;</button>
            </div>
            <form enctype="multipart/form-data">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="name">Buchungssatz Name <span class="red">*</span></label>
                        <input v-model="bookingRecordForm.name" class="form-control" type="text"
                               id="name" name="name" placeholder="Buchungssatz Name">
                        <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>
                    </div>
                    <div class="form-group">
                        <label for="date">Datum <span class="red">*</span></label>
                        <input v-model="bookingRecordForm.date" class="form-control" type="date"
                               id="date" name="date">
                        <span class="error-msg" v-if="errors && errors.date">{{errors.date[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="amount">Betrag <span class="red">*</span></label>
                        <input v-model="bookingRecordForm.amount"
                               @input="handleTaxCalculation"
                               class="form-control" type="number"
                               id="amount" name="amount">
                        <span class="error-msg" v-if="errors && errors.amount">{{errors.amount[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="tax">Ust. in Prozent</label>
                        <input v-model="bookingRecordForm.tax"
                               @input="handleTaxCalculation"
                               class="form-control" type="number" id="tax" name="tax">
                        <span class="error-msg" v-if="errors && errors.amount">{{errors.amount[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label for="taxAmount">USt Betrag</label>
                        <input v-model="bookingRecordForm.tax_amount" class="form-control" type="number"
                               id="taxAmount" name="taxAmount">
                    </div>
                    <div class="form-group">
                        <label for="file">Rechnung Anhang</label>
                        <span v-if="fileSizeError" class="error-msg">Die Datei muss kleiner als 2mb sein! (Nur .jpg oder .png) </span>

                        <button type="button" class="btn btn-primary btn-icon" @click="$refs.file.click()">
                            <i class="icon-upload"></i>
                            <span class="mr-1">Upload</span>
                            <i v-if="bookingRecordForm.imageFile != null" class="icon-checked"></i>
                        </button>
                        <input class="file-upload" type="file" id="file" ref="file" name="image"
                               @change="handleFileSelect">
                    </div>

                    <div class="form-group">
                        <label for="description">Beschreibung <span class="red">*</span></label>
                        <span class="error-msg" v-if="errors && errors.description">{{errors.description[0]}}</span>
                        <textarea name="description" id="description" placeholder="Beschreibung"
                                  v-model="bookingRecordForm.description">
                        </textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-white" @click="handleGoBack">Abbrechen
                    </button>
                    <button v-if="!editMode" class="btn btn-primary " @click="createBookingRecord">Erstellen
                    </button>
                    <button v-if="editMode" class="btn btn-primary " @click="updateBookingRecord">Speichern
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  import mixins from '../../../utility/mixins';
  import moment from 'moment';
  import _ from 'lodash';

  export default {
    name: "BookingRecordForm",
    mixins: [mixins],
    computed: {
      errors() {
        return this.$store.getters.getErrors;
      }
    },
    data() {
      return {
        editMode: false,
        fileSizeError: false,
        bookingRecordForm: {
          name: '',
          amount: 0.00,
          imageFile: null,
          description: '',
          date: '',
          categoryId: '',
          tax: 20,
          tax_amount: 0,
          accountId: null,
        }
      }
    },
    methods: {
      createBookingRecord(event) {
        event.preventDefault();

        let payload = this.bookingRecordForm;
        this.$store.dispatch('createBookingRecord', payload)
      },
      updateBookingRecord(event) {
        event.preventDefault();
        let payload = this.bookingRecordForm;
        this.$store.dispatch('updateBookingRecord', payload)
      },
      handleTaxCalculation() {
        let tax = parseInt(this.bookingRecordForm.tax);
        let amount = parseInt(this.bookingRecordForm.amount);
        let percent = tax + 100;
        // console.log('tax', tax);
        // console.log('pecent', percent);
        let taxValue = (amount / percent) * tax;
        // console.log(taxValue);
        this.bookingRecordForm.tax_amount = mixins.methods.round(taxValue, 2);
      },
      handleFileSelect(event) {
        let file = event.target.files[0];
        if (file.size < 2097152) {
          if (file.type === "image/jpeg" || file.type === 'image/png') {
            this.fileSizeError = false;
            let fileReader = new FileReader();
            fileReader.readAsDataURL(event.target.files[0]);
            fileReader.onload = (e) => {
              this.bookingRecordForm.imageFile = e.target.result;
            };
          } else {
            this.fileSizeError = true;
          }
        } else {
          this.fileSizeError = true;
        }

      }
    },

    created() {
      this.$store.commit('resetErrors');
      this.bookingRecordForm.categoryId = this.$route.params.categoryId;
      this.bookingRecordForm.date = moment().format('YYYY-MM-DD');
      if (this.$route.params.bookingRecordId !== undefined) {
        let id = this.$route.params.bookingRecordId;
        let data = _.clone(this.$store.getters.filterBookingRecordsById(id));
        this.editMode = true;
        this.bookingRecordForm = data;
        this.bookingRecordForm.amount = (data.revenue - data.expenditure)
      }
      this.bookingRecordForm.accountId = this.$route.params.accountId;
      let app = document.querySelector("#app");// add class for Overlay
      app.classList.add("overlay")
    },
    destroyed() {
      let app = document.querySelector("#app");// remove class for Overlay
      app.classList.remove("overlay");

    }
  }
</script>

