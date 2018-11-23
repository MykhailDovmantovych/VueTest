<!-- eslint-disable -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <div>  

    <VideoSrcInput/>
    <div v-for="(link,index) in links" v-bind:key="index">
      <vue-drag-resize :isActive="true" :w="800" :h="430" :x="100" :y="100" v-on:dragged="alert(this)" v-on:resizing="resize" v-on:dragging="resize" :sticks="['tl','tr','bl','br']" :aspectRatio="true">
      <video-dropdown v-bind:video-source="link"/>
      </vue-drag-resize>
    </div>
   </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VideoSrcInput from '@/components/VideoSrcInput.vue'// @ is an alias to /src
import VideoDropdown from '@/components/VideoDropdown.vue'// @ is an alias to /src
import VueDragResize from 'vue-drag-resize'
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'home',
  components: {
    VideoDropdown,
    VideoSrcInput,
    VueDragResize
  },
  data() {
    return {
        width: 0,
        height: 0,
        top: 0,
        left: 0
    }
  },
  computed:{
    ...mapState([
      'links'
    ]),
    ...mapGetters([
      'countLinks'
    ])
  },
  methods: {
    resize(newRect) {
        this.width = newRect.width;
        this.height = newRect.height;
        this.top = newRect.top;
        this.left = newRect.left;
    }
        }
})
</script>
</<style lang="scss">
.vdr-stick{
  width:15px !important; 
  height:15px !important;
  bottom: -8px !important;
}
</style>

