<script>

import { store } from '../../data/store';



export default {
  name: 'singol-card',
  data(){
    return{
      store
      
    }
  },

  props: {
    result: Object,
    poster_path: String
  },

  methods: {
    returnFlag(){
      if(result.original_language === 'en') {
        return '/public/en.png'
      } else if (result.original_language === 'it') {
        return '/public/it.png'
      }
    } 
  },
  
 

}
</script>

<template>

  <div class="card-sp">

    <!-- poster  -->
    <div class="poster">
      <img :src="`https://image.tmdb.org/t/p/w342/${poster_path}`">
    </div>
    
    
     <!--/poster  -->

    <div class="title">titolo : {{ result.title || result.name }}</div>
    <div class="original-title">titolo originale : {{ result.original_title || result.original_name}}</div>
    <div class="vote">
      <i class="fa-solid fa-star"></i>
    </div>
    <img :src="returnFlag" :alt="result.original_language" class="language">
    <div v-if="result.overview != ''" class="fw-semibold">Sinossi:</div>
    <div class="overview">{{ result.overview || result.overview }}</div>
  </div>
  
</template>



<style lang="scss" scoped>

.card-sp {
  width: calc(100% / 6);
  background-color: black;
  margin: 5px;
  padding: 5px;
  font-size: .8rem;
  position: relative;
  transition: all 1s;

  &:hover img {
    opacity: 0;
  }


  .poster {
    position: absolute;
    top: 0;
    left: 0;
    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity .5s ease;
   }
  }
  
  .overview {
    overflow-y: scroll;
    height: 200px;
  }
}

</style>