<!-- eslint-disable -->
<template>
  <div class="">
      <div class="iframe-description" >Click here to start dragging</div>
    <div class="iframe-container">
        <iframe  v-bind:src="'https://www.youtube.com/embed/'+ videoSource" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    },
    methods:{
    }
})
</script>

<style lang="scss" scoped>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
    border-color: rgb(241, 229, 224);
   border-top-width: 20px;
   border-top-style:double;
   border-top-left-radius: 20%;
   height: 90%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}
.iframe-description{
 position:absolute;
 margin:0 auto;
 width: 95%;
 z-index: 99;
 font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 font-size: 20px;
 cursor: pointer;
}
/* 4x3 Aspect Ratio */
.iframe-container-4x3 {
  padding-top: 75%;
}
</style>
