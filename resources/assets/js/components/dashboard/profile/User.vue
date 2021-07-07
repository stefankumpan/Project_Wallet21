<template>
    <div>
        <div class="user-profile">
            <h2>Profil</h2>
            <ul>
                <li>
                    <span class="highlight">Name:</span>
                    <span v-if="!editMode">{{user.name}}</span>
                    <div v-if="editMode">
                        <input class="form-control" type="text" name="name" title="name"
                               v-model="formUser.name">
                        <span class="error-msg" v-if="errors && errors.name">{{errors.name[0]}}</span>
                    </div>
                </li>
                <li>
                    <span class="highlight">E-Mail:</span>
                    <span v-if="!editMode">
                                {{user.email}}
                            </span>
                    <div v-if="editMode">
                        <input class="form-control" type="text" name="email" title="email"
                               v-model="formUser.email">
                        <span class="error-msg" v-if="errors && errors.email">{{errors.email[0]}}</span>
                    </div>
                </li>
                <li>
                    <span class="highlight">Abonniert bis :</span>
                    <span v-if="user.sub_expire !== 0"> {{formatDateDMY(user.sub_expire)}}</span>
                </li>
                <li>
                    <span class="highlight">Erstellt:</span>
                    <span> {{formatDateDMY(user.created_at)}}</span>
                </li>
                <li>
                    <span class="highlight">Letzte Änderung:</span>
                    <span>{{formatDateDMY(user.updated_at)}}</span>
                </li>

                <li class="options"><span class="highlight">Optionen: </span>
                    <a @click="toggleEditMode"><i class="icon-pencil-edit-button orange"></i> Profil</a>
                    <a @click="toggleEditPasswordMode"><i
                            class="icon-pencil-edit-button orange"></i>Passwort</a>
                </li>
            </ul>

            <div v-if="editMode">
                <button @click="updateUser" class="btn btn-primary btn-full">Speichern</button>
            </div>
            <div v-if="editPassword">
                <div class="form-group">
                    <label for="password" class="highlight"> Neues Passwort</label>
                    <label>
                        <input class="form-control" type="password" name="password" title="password" id="password"
                               v-model="password">
                    </label>
                    <span class="error-msg" v-if="errors && errors.password">{{errors.password[0]}}</span>
                </div>
                <button @click="updatePassword" class="btn btn-primary btn-full">Speichern</button>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import _ from 'lodash'
  import mixins from "../../../utility/mixins";

  export default {
    name: "User",
    mixins: [mixins],
    computed: mapGetters({
      user: 'getUser',
      editMode: 'getUserEditMode',
      errors: 'getErrors',
    }),
    data() {
      return {
        editPassword: false,
        formUser: {},
        password: null,
      }
    },
    methods: {
      // Toggle Edit Mode - Switch Modes Edit
      toggleEditMode() {
        let status = !this.editMode;
        this.editPassword = false;
        this.$store.commit('setUserEditMode', status);
      },
      toggleEditPasswordMode() {
        this.editPassword = !this.editPassword;
        this.$store.commit('setUserEditMode', false);

      },
      //Update User
      updateUser() {
        let payload = this.formUser;
        this.$store.dispatch('updateUser', payload);
      },
      updatePassword() {
        let payload = {
          'password': this.password,
        };
        this.$store.dispatch('updateUserPassword', payload);
      }
    },
    created() {
      this.$store.commit('resetErrors');
      this.$store.dispatch('loadUser');
      this.formUser = _.clone(this.$store.getters.getUser)
    }
  }
</script>
