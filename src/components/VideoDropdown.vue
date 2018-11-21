<!-- eslint-disable -->
<template>
  <div class="">
    <div>
        <iframe width="560" height="315" v-bind:src="'https://www.youtube.com/embed/'+ videoSource" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
  </div>
</template>
<!-- eslint-disable -->
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
    name: 'VideoDropdown',
    props:{
       videoSource:String
    }
})
</script>

<style lang="scss" scoped>
iframe{
    width:30%;
}
</style>
