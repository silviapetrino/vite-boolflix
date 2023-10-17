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
    <div class="title">titolo : {{ result.title }}</div>
    <div class="original-title">titolo originale : {{ result.original_title }}</div>
    <div class="vote">
      <i class="fa-solid fa-star"></i>
    </div>
    <img :src="returnFlag" :alt="result.original_language" class="language">
    <div class="overview"><span class="fw-semibold">Descrizione:</span> {{ result.overview }}</div>
  </div>
  
</template>



<style lang="scss" scoped>

.card-sp {
  width: calc(100% / 6);
  background-color: black;
  margin: 5px;
  padding: 10px;
  font-size: .8rem;
 
  .overview {
    overflow-y: scroll;
    height: 200px;
  }
}

</style>