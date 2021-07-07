<template>
    <div class="wrapper-sm">
        <div class="card">
            <h2>CSV Export</h2>
           <div class="card-body">
               <p class="text-center">Der Download kann einige Zeit dauern bitte haben sie Geduld. Vielen Dank für ihr Verständnis!</p>
               <button class="btn btn-primary btn-icon"
                       @click="unparse"
               >
                   <i class="icon-download"></i>
                   CSV Herunterladen
               </button>
           </div>

        </div>

    </div>
</template>

<script>
  import papa from 'papaparse'
  import {mapGetters} from 'vuex'
  import moment from 'moment'

  export default {
    computed: mapGetters({
      'csvExport': 'getCsvExport'
    }),
    data() {
      return {
        unparsedResults: null,
      }
    },
    methods: {
      unparse() {
        this.unparsedResults = papa.unparse(this.csvExport, {
          delimiter: ","
        });
        let csv = papa.unparse(this.csvExport, {
          delimiter: ";"
        });
        let csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
        let csvURL = null;
        if (navigator.msSaveBlob) {
          csvURL = navigator.msSaveBlob(csvData, 'download.csv');
        }
        else {
          csvURL = window.URL.createObjectURL(csvData);
        }

        let tempLink = document.createElement('a');
        let dbName = moment().format('YYYY_MM_DD') + '.csv';
        tempLink.href = csvURL;
        tempLink.setAttribute('download', dbName);
        // tempLink.click();  // <-- Dont Work in Firefox
        tempLink.dispatchEvent(new MouseEvent(`click`, {bubbles: true, cancelable: true, view: window}));
        tempLink.remove();

      }
    },
    created() {
      let payload = {
        'categoryId': this.$route.params.categoryId,
        'accountId': this.$route.params.accountId,
      };
      this.$store.dispatch('exportCSV', payload);
    }
  }
</script>
