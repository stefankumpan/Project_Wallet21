<template>
    <div class="wrapper-sm">
        <div class="card">
            <h2>CSV Import</h2>
            <div class="card-body">
                <h3>Kategorie: {{category.name}}</h3>
                <span v-if="errorCSV" class="error-msg">Die datei muss eine CSV Datei Sein. Bitte verwenden sie das Template</span>
                <div v-if="errors !== ''">
                    <span class="error-msg" v-for="error in errors">{{error[0]}}</span>
                </div>
                <div class="csv-template-info">
                    <p>Bitte verwenden Sie unser Template um Fehler zu vermeiden.</p>
                    <template-csv></template-csv>
                </div>


                <div class="form-group">
                    <label for="file">CSV Import</label>
                    <button type="button" class="btn btn-primary btn-icon" @click="$refs.file.click()">
                        <i class="icon-upload"></i>
                        <span v-if="fileName === null">CSV Import</span>
                        <span class="text-center" v-if="fileName != null">{{fileName}}</span>
                    </button>
                    <input class="file-upload" type="file" id="file" accept=".csv" ref="file" @change="csvParse">
                </div>
                <div class="card-footer">
                    <button class="btn btn-white" @click="handleGoBack">Abbrechen</button>
                    <button :disabled="!fileStatus" @click="importCsv" class="btn btn-primary">Speichern</button>
                </div>

            </div>
        </div>

    </div>

</template>

<script>
  import papa from 'papaparse'
  import mixins from '../../../utility/mixins'
  import {mapGetters} from 'vuex';
  import TemplateCSV from './TemplateCSV'

  export default {
    name: "ImportCSV",
    mixins: [mixins],
    components: {
      'template-csv': TemplateCSV
    },
    computed: mapGetters({
      category: 'getCategory',
      errors: 'getErrors',
    }),
    data() {
      return {
        csvData: [],
        fileName: null,
        fileStatus: false,
        errorCSV: false,
      }
    },
    methods: {
      csvParse(event) {
        let file = event.target.files[0];
        if (file.type === 'application/vnd.ms-excel' || file.type === 'text/csv') {
          this.fileName = file.name;
          let csvFinish = [];
          papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
              csvFinish.push(...results.data);
            }
          });
          this.fileStatus = true;
          this.csvData = csvFinish;
          this.errorCSV = false;

        } else {
          this.fileStatus = false;
          this.errorCSV = true;
        }
      },
      importCsv(event) {
        event.preventDefault();

        let payload = {
          csv: this.csvData,
          categoryId: this.category.id,
          accountId: this.category.account_id,
        };
        this.$store.dispatch('importCSV', payload)
      }
    }, created() {
      this.$store.commit('resetErrors');
      if (this.category.length <= 0) {
        this.$router.push({name: 'dashboard'});
      }
    },

  }
</script>

