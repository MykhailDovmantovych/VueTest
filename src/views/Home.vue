<!-- eslint-disable -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <div>  

    <VideoSrcInput/>
     <div>{{countLinks}}</div>
    <div v-for="(link,index) in links" v-bind:key="index">
      <video-dropdown v-bind:video-source="link"/>
    </div>
   
   </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VideoSrcInput from '@/components/VideoSrcInput.vue'// @ is an alias to /src
import VideoDropdown from '@/components/VideoDropdown.vue'// @ is an alias to /src
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'home',
  components: {
    VideoDropdown,
    VideoSrcInput
  },
  computed:{
    ...mapState([
      'links'
    ]),
    ...mapGetters([
      'countLinks'
    ])
  }
})
</script>
