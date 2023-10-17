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

  computed: {
    returnFlag(){
      
      if (this.result.original_language === 'en') {
        return '/public/en.png'
      } else if (this.result.original_language === 'it') {
        return '/public/it.png'
      } else return this.result.original_language

    }
  }
  
 

}
</script>

<template>

  <div class="card-sp">

    <!-- poster  -->
    <div class="poster">
      <img class="cover" :src="`https://image.tmdb.org/t/p/w342/${poster_path}`">
    </div>
    
     <!--/poster  -->

    <div class="title">titolo : {{ result.title || result.name }}</div>
    <div class="original-title">titolo originale : {{ result.original_title || result.original_name}}</div>
    <div class="vote">
      <i class="fa-solid fa-star"></i>
    </div>
    <img :src="returnFlag" :alt="result.original_language" class="language" width="30">
    <div v-if="result.overview != ''" class="fw-semibold">Sinossi:</div>
    <div class="overview p-2">{{ result.overview || result.overview }}</div>
  </div>
  
</template>



<style lang="scss" scoped>

.card-sp {
  width: calc(100% / 5.5);
  background-color: rgba($color: #000000, $alpha: .7);
  min-height: 200px;
  margin: 10px;
  padding: 5px;
  font-size: .8rem;
  position: relative;
  cursor: pointer;

  &:hover img.cover {
    display: none;
  }

  .poster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 200px;
  
    img.cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
  }
  
  .overview {
    overflow-y: scroll !important;
    height: 200px;
  }
}

</style>