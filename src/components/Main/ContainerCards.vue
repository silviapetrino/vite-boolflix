
<script>
import Header from '../Header/Header.vue';
import singolCard from './singolCard.vue';
import { store } from '../../data/store';

export default {

  name: 'container-cards',
  components: {
    Header,
    singolCard
  },
  data(){
    return{
      store
    }
  },

  computed: {
            // Generate a single array with the search results
    getResultMovie(){
      let searchResult = []
      return searchResult = [...store.foundedMovies]
    },
    getResultTv(){
      let searchResult = []
      return searchResult = [...store.foundTv]
    }   
  }
  
  }

</script>



<template>


    <div class="container p-4">
      <h3 class="fw-semibold"  v-if="getResultMovie.length === 0 & getResultTv.length === 0">Cerca un film o una serie Tv per accedere al nostro catalogo</h3>
      <div class="fw-semibold" v-else>
        <h3>Ecco i risultati della tua ricerca:</h3>

        <div class="row justify-content-between">
          <h3 class="fw-semibold py-4">Film:</h3>
          <singolCard v-for="(foundResult, index) in getResultMovie" :key="`movie${index}`" :result="foundResult" :poster_path="foundResult.poster_path" />
          <h3 class="fw-semibold py-4">Serie Tv:</h3>
          <singolCard v-for="(foundResult, index) in getResultTv" :key="`tv${index}`" :result="foundResult" :poster_path="foundResult.poster_path" />
        </div>

      </div>
      
      
    </div>

  

</template>



<style lang="scss" scoped>

</style>