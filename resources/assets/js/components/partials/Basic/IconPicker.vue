<template>
    <div class="icon-picker">
        <button class="icon-picker-btn"
                @click="toggleIsOpened"
                type="button">
            <img :src="AppUrl+selectedIcon" alt="icon">
            <span class="visually-hidden">Icon</span>
        </button>

        <div v-show="isOpened" class="icon-picker-select">
            <div v-for="(icon,index) in icons"
                 :key="index"
                 @click="toggleIsOpened(icon.id,icon.path)"
            >
                <img :src='AppUrl+icon.path' :alt="icon.name">
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {AppUrl} from "../../../utility/config";
  import _ from 'lodash'

  export default {
    props: ['value'],
    computed: mapGetters({
      icons: 'getIcons',
    }),
    data() {
      return {
        isOpened: false,
        selectedIcon: 'images/icons/wallet.svg',
        AppUrl,
      }
    }, methods: {
      loadIcons() {
        this.$store.dispatch('loadIcons')
      },
      toggleIsOpened(icon, path) {
        this.isOpened = !this.isOpened;
        this.selectedIcon = path;
        this.$emit('input', icon)
      }
    }, created() {
      this.loadIcons();
      let iconIdx = _.findIndex(this.icons, ['id', this.value]);
      this.selectedIcon = this.icons[iconIdx].path;
    }
  }
</script>
