<template>
<div class="nav-input">
    <form id="video-input-form">
         <div class="input-section">
  <input id="video-input" type="text" class="question" v-model="videoSource" required  autocomplete="off">
  <label for="video-input"><span>Paste a link to video</span></label>
  </div>
  <div class="submit-section">
  <button id="video-submit-button" class="btn" type="submit" v-on:click="processForm">Submit</button>
  </div>
    </form>
  </div>
  
</template>

<script >
import store from '@/store';
import {mapState,mapMutations} from 'vuex'
export default {
    name: 'VideoSrcInput',
    data:function() {
        return{
        videoSource :''
        }
    },
    methods:{
        processForm: function(){
                store.commit("ADD_LINK",this.videoSource)
                this.$emit('leftt',this.videoSource)
                this.videoSource = "";
        }
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
#video-input-form
{
    display: grid;
    grid-template-columns: 5fr 1fr;
}
.nav-input{
    margin: 5% auto 0 auto;
  width: 40%;
  max-width: 625px;
}
input,
span,
label,
textarea{
      font-family: 'Ubuntu', sans-serif;
  display: block;
  margin: 10px;
  padding: 5px;
  border: none;
  font-size: 22px;
  }
  textarea:focus,
input:focus {
  outline: 0;
}
/* Question */

input.question,
textarea.question {
  font-size: 48px;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  border: none;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
}
/* Underline and Placeholder */

input.question + label,
textarea.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid red;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
}

input.question:focus + label,
textarea.question:focus + label {
  width: 80%;
}

input.question:focus,
input.question:valid {
  padding-top: 35px;
}

textarea.question:valid,
textarea.question:focus {
  margin-top: 35px;
}

input.question:focus + label > span,
input.question:valid + label > span {
  top: -100px;
  font-size: 22px;
  color: #333;
}

textarea.question:focus + label > span,
textarea.question:valid + label > span {
  top: -150px;
  font-size: 22px;
  color: #333;
}

input.question:valid + label,
textarea.question:valid + label {
  border-color: green;
}

input.question:invalid,
textarea.question:invalid {
  box-shadow: none;
}

input.question + label > span,
textarea.question + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8F8F8F;
  font-size: 48px;
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

input[type="submit"] {
  -webkit-transition: opacity 0.2s ease, background 0.2s ease;
  transition: opacity 0.2s ease, background 0.2s ease;
  display: block;
  opacity: 0;
  margin: 10px 0 0 0;
  padding: 10px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: #EEE;
}

input[type="submit"]:active {
  background: #999;
}

input.question:valid ~ input[type="submit"], textarea.question:valid ~ input[type="submit"] {
  -webkit-animation: appear 1s forwards;
  animation: appear 1s forwards;
}

input.question:invalid ~ input[type="submit"], textarea.question:invalid ~ input[type="submit"] {
  display: none;
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}
  .btn{
      margin-top: 15px;
       background-color: #e7e7e7;
        color: black; /* Green */
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    &:hover{
    background-color: #4CAF50; /* Green */
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
  }


</style>

