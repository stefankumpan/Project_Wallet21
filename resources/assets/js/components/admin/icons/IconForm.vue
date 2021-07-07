<template>
    <div class="wrapper-sm">
        <div class="card">
            <h2 v-if="!editMode">Icon Erstellen</h2>
            <h2 v-if="editMode">Icon Update</h2>
            <form>
                <div class="card-body">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" v-model="iconForm.name">
                        <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>
                    </div>
                    <div class="form-group">
                        <label for="file">Icon Upload</label>
                        <span class="error-msg" v-if="errors && errors.file">{{errors.file[0]}}</span>
                        <span v-if="fileSizeError"
                              class="error-msg">Die Datei muss kleiner als 2mb sein! (Nur .svg) </span>

                        <button type="button" class="btn btn-primary btn-icon" @click="$refs.file.click()">
                            <i class="icon-upload"></i>
                            <span class="mr-1">Upload</span>
                            <i v-if="iconForm.iconFile != null" class="icon-checked"></i>
                        </button>
                        <input class="file-upload" type="file" id="file" ref="file" name="image"
                               @change="handleFileSelect">
                    </div>
                    <div v-if="editMode" class="form-group">
                        <p>Möchten sie das Icon Löschen?</p>
                        <button class="btn btn-danger btn-icon" @click="deleteIcon"><i class="icon-rubbish-bin-delete-button"></i>Löschen</button>
                    </div>
                    <div class="space-between">
                        <button class="btn btn-white" type="button" @click="handleGoBack">
                            Zurück
                        </button>
                        <button :disabled="iconForm.iconFile === null" v-if="!editMode" type="button" class="btn btn-primary" @click="createIcon">Erstellen</button>
                        <button v-if="editMode" type="button" class="btn btn-primary" @click="updateIcon">Speichern</button>
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
  import mixins from "../../../utility/mixins";
  import {mapGetters} from 'vuex';
  import _ from 'lodash';

  export default {
    name: "IconForm",
    mixins:[mixins],
    computed:mapGetters({
      errors:'getErrors',
    }),
    data() {
      return {
        editMode: false,
        fileSizeError: false,
        iconForm: {
          name: '',
          iconFile: null,
        }
      }
    },
    methods: {
      // Create Icon
      createIcon(event) {
        event.preventDefault();
        let payload = this.iconForm;
        this.$store.dispatch('adminCreateIcon',payload);
      },
      // Update Icon
      updateIcon(event) {
        event.preventDefault();
        let payload = this.iconForm;
        this.$store.dispatch('adminUpdateIcon',payload);
      },
      //Delete Icon
      deleteIcon(event) {
        event.preventDefault();
        let payload = this.iconForm;
        this.$store.dispatch('adminDeleteIcon',payload);
      },
      // File Upload
      handleFileSelect(event) {
        let file = event.target.files[0];
        // console.log(file);
        // console.log(file.type);
        if (file.size < 2097152) {
          if (file.type === "image/svg+xml") {
            this.fileSizeError = false;
            let fileReader = new FileReader();
            fileReader.readAsDataURL(event.target.files[0]);
            fileReader.onload = (e) => {
              this.iconForm.iconFile = e.target.result;
            };
          } else {
            this.fileSizeError = true;
          }
        } else {
          this.fileSizeError = true;
        }
      }
    },created(){
      this.$store.commit('resetErrors'); // reset Errors
      let iconId = this.$route.params.iconId;
      // check Edit or New Create Icon
      if (iconId !== undefined){
        this.editMode = true;
        this.iconForm = _.clone(this.$store.getters.filterAdminIconById(iconId));
      }
    }
  }
</script>

