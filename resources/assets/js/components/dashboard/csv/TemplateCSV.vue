<template>
    <button class="btn btn-primary btn-icon"
            @click="unparse"
    >
        <i class="icon-download"></i>
        Template
    </button>
</template>

<script>
  import papa from 'papaparse'

  export default {
    data() {
      return {
        unparsedResults: null,
        sampleData: [{
          "Datum": "2019/06/09",
          "Name": "Meine Buchung",
          "Betrag": "19,99",
          "Beschreibung": "Zusatz Informationen"
        },]
      }
    },
    methods: {
      unparse() {
        this.unparsedResults = papa.unparse(this.sampleData, {
          delimiter: ","
        });
        let csv = papa.unparse(this.sampleData, {
          delimiter: ";"
        });
        let csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
        let csvURL = null;
        if (navigator.msSaveBlob) {
          csvURL = navigator.msSaveBlob(csvData, 'Template.csv');
        }
        else {
          csvURL = window.URL.createObjectURL(csvData);
        }

        let tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'Template.csv');
        tempLink.dispatchEvent(new MouseEvent(`click`, {bubbles: true, cancelable: true, view: window}));
        // tempLink.click();
      }
    }
  }
</script>
