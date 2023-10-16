
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
    getResult(){
      let searchResult = []
      return searchResult = [...store.foundedMovies]
    }  
  }
  
  }

</script>



<template>


    <div class="container py-5">
      <h3 class="ms-4 fw-semibold"  v-if="getResult.length === 0">Cerca un film per accedere al nostro catalogo</h3>
      <h3 class="ms-4 fw-semibold" v-else>Ecco i risultati della tua ricerca:</h3>
      
      <div class="row">
       
        <singolCard v-for="foundResult in getResult" 
        
        :result="foundResult" />
     

      </div>
    </div>

  

</template>



<style lang="scss" scoped>



</style>