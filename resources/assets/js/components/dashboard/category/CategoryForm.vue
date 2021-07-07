<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 v-if="editMode">Kategorie Bearbeiten</h3>
                <h3 v-if="!editMode">Kategorie Erstellen</h3>
                <button @click="handleGoBack">&times;</button>
            </div>
            <form enctype="multipart/form-data">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="name">Name <span class="red">*</span></label>
                        <input v-model="categoryForm.name" class="form-control" type="text"
                               id="name" name="name" placeholder="Kategorie Name">
                        <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>
                    </div>
                    <div class="form-group split-2">
                        <label>Farbe <span class="red">*</span></label>
                        <color-picker v-model="categoryForm.color"></color-picker>
                    </div>
                    <div class="form-group split-2">
                        <label>Icon <span class="red">*</span></label>
                        <icon-picker v-model="categoryForm.icon_id"></icon-picker>
                    </div>
                    <div class="form-group">
                        <label for="description">Beschreibung <span class="red">*</span></label>
                        <span class="error-msg" v-if="errors && errors.description">{{errors.description[0]}}</span>
                        <textarea name="description" id="description" placeholder="Beschreibung"
                                  v-model="categoryForm.description">
                        </textarea>
                    </div>

                </div>
                <div class="modal-footer">
                    <button class="btn btn-white" @click="handleGoBack">Abbrechen
                    </button>
                    <button v-if="!editMode" class="btn btn-primary " @click="createNewCategory">Erstellen
                    </button>
                    <button v-if="editMode" class="btn btn-primary " @click="updateCategory">Speichern
                    </button>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
  import mixins from '../../../utility/mixins';
  import ColorPicker from '../../partials/Basic/ColorPicker.vue';
  import IconPicker from '../../partials/Basic/IconPicker.vue';
  import {mapGetters} from 'vuex';
  import _ from 'lodash';

  export default {
    name: "CategoryFrom",
    mixins: [mixins],
    computed: mapGetters({
      errors: 'getErrors',
    }),
    components: {
      'color-picker': ColorPicker,
      'icon-picker': IconPicker,
    },
    data() {
      return {
        editMode: false,
        categoryForm: {
          name: '',
          icon_id: 1,
          color: 'blue',
          description: '',
          accountId: '',
        }
      }
    }, methods: {
      // Create Cateory - Send Date for Create a new Category
      createNewCategory(event) {
        event.preventDefault();
        let data = this.categoryForm;
        this.$store.dispatch('createCategory', data);
      },
      // Update Category - Send Data for Update
      updateCategory(event) {
        event.preventDefault();
        let data = this.categoryForm;
        this.$store.dispatch('updateCategory', data);
      }
    },
    created() {
      //Reset From
      this.$store.commit('resetErrors');
      let app = document.querySelector("#app");// add class for Overlay
      app.classList.add("overlay");
      this.categoryForm.accountId = this.$route.params.accountId;
      // Check New Category or Edit a Category
      if (this.$route.name === 'categoryEdit') {
        this.categoryForm = _.clone(this.$store.getters.getCategory);
        this.editMode = true;
      }
    }, destroyed() {
      let app = document.querySelector("#app");// remove class for Overlay
      app.classList.remove("overlay");
    }
  }
</script>
