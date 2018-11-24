<!-- eslint-disable -->
<template>
  <div class="home">
  <div>  

    <VideoSrcInput/>
    <div v-for="(link,index) in links" v-bind:key="link">
      <vue-drag-resize :isActive="true" :w="800" :h="430" :x="500" :y="195" v-on:resizing="resize" v-on:dragging="resize" :sticks="['tl','tr','bl','br']" :aspectRatio="true">
      <video-dropdown v-bind:video-source="link" v-bind:ind="index" v-on:close-video-container="removeElement"/>
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
import store from '@/store';

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
    },
    removeElement(index){
        store.commit("REMOVE_LINK",index)
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

