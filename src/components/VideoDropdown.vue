<!-- eslint-disable -->
<template>
  <div class="">
      <div class="iframe-description" >Click here to start dragging</div>
      <div class="close" @click="closeframe"></div>
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
       videoSource:String,
       ind:Number
    },
    methods:{
        closeframe(){
         this.$emit("close-video-container",this.ind)
        }
    }
})
</script>

<style lang="scss">
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
    border-color: rgb(241, 229, 224);
   border-top-width: 20px;
   border-top-style:dashed;
   border-top-left-radius: 35%;
   border-top-right-radius: 40%;
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
 z-index: 30;
 font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 font-size: 20px;
 cursor: pointer;
}
/* 4x3 Aspect Ratio */
.iframe-container-4x3 {
  padding-top: 75%;
}
.close {
  position: absolute;
  float:right;
  width: 20px;
  right: 15px;
  height: 20px;
  opacity: 0.4;
  z-index: 99;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  content: ' ';
  height: 20px;
  width: 2px;
  background-color:black;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}


</style>
