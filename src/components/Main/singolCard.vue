<script>

import { store } from '../../data/store';
import StarVote from './partials/StarVote.vue';

export default {
  name: 'singol-card',
  data(){
    return{
      store,
      maxStars: 5,
      maxVote: 10
    }
  },
  props: {
    result: Object,
    poster_path: String
  },
  components: {
    StarVote
  },

  computed: {
    returnFlag(){
      
      if (this.result.original_language === 'en') {
        return '/en.png'
      } else if (this.result.original_language === 'it') {
        return '/it.png'
      } else return this.result.original_language
    },
    averageCalc(){
      const starValue = this.maxVote / this.maxStars;
      const finalVote = Math.ceil(this.result.vote_average / starValue);
      return finalVote
    }
  }
  
 

}
</script>

<template>

  <div class="card-sp">

    <!-- poster  -->
    <div class="poster">
      <img v-if="poster_path" class="cover" :src="`https://image.tmdb.org/t/p/w342/${poster_path}`">
      <img v-else src="/public/not-avaiable.png" :alt="result.title || result.name" class="cover not object-fit-cover h-100 w-100 opacity-50 ">
    </div>
    
     <!--/poster  -->

    <div class="title">titolo : {{ result.title || result.name }}</div>
    <div class="original-title">titolo originale : {{ result.original_title || result.original_name}}</div>
    <StarVote :finalVote="averageCalc" :maxStars="this.maxStars"/>
    <img :src="returnFlag" :alt="result.original_language" class="language" width="30">
    <div v-if="result.overview != ''" class="fw-semibold">Sinossi:</div>
    <div class="overview p-2">{{ result.overview || result.overview }}</div>
  </div>
  
</template>



<style lang="scss" scoped>

.card-sp {
  width: calc(100% / 5);
  background-color: rgba($color: #000000, $alpha: .7);
  min-height: 300px;
  border: 1px solid  #434343;
  font-size: .8rem;
  position: relative;
  cursor: pointer;

  &:hover img.cover {
    display: none;
    width: 100%;
    height: 100%;
  }

  .poster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

  
    img.cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
  }
  
  .overview {
    overflow-y: scroll !important;
    height: 250px;
  }
}

</style>