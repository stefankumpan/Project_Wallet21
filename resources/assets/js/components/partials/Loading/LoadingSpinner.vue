<template>
    <div class="loading">
        <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'LoadingSpinner',
      created(){
        let app = document.querySelector("#app");// remove class for Overlay
        app.classList.add("loading")
      },destroyed() {
        let app = document.querySelector("#app");// remove class for Overlay
        app.classList.remove("loading")
      }
    }
</script>
