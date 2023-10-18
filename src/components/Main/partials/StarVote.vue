<script>
import { store } from '../../../data/store';

  export default {
   name: 'stars-vote',

   data(){
    return{
      store
    }
   },

   props: {
    finalVote: Number,
    maxStars: Number
   }
  }


</script>

<template>

  <div class="stars">
    <i v-for="(vote, index) in maxStars" :key="`star-${index}`" :class="(vote <= finalVote) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
  </div>
  
</template>


<style lang="scss" scoped>


</style>