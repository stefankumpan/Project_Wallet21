<template>
    <div class="color-picker">
        <button class="color-picker-btn"
                :class="'bg-'+value"
                @click="toggleIsOpened"
                type="button">
            <span>Klick</span></button>

            <div v-show="isOpened" class="color-picker-select">
                <button type="button" v-for="(color,index) in colors"
                     :key="index"
                     :class="'bg-'+color"
                     @click="toggleIsOpened(color)"
                >
                </button>
            </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
  export default {
    props: ['value'],
    computed:mapGetters({
      colors: 'getColors',
    }),
    data() {
      return {
        isOpened: false
      }
    }, methods: {
      toggleIsOpened(color) {
        this.isOpened = !this.isOpened;
        this.$emit('input',color)
      }
    }
  }
</script>
