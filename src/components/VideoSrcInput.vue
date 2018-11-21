<template>
<div class="nav-input">
  <input type="text" v-model.lazy="videoSource">
  </div>
</template>

<script >
import store from '@/store';
import {mapState,mapMutations} from 'vuex'
export default {
    name: 'VideoSrcInput',
    computed:{
        videoSource:{
            set(value){
                if(value != "")
                store.commit("ADD_LINK",value)
            }
        }
    },
    methods:{
        // ...mapMutations([
        // 'ADD_LINK'
        // ]),
        // addLink: function(){
        //     this.ADD_LINK(this.videoSource)
        //     this.videoSource = ''
        // }
    }
}
</script>

<style lang="scss" scoped>
  input{
      width:30%;
  }

</style>

