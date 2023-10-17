
<script>
import { store } from '../../data/store';
import axios from 'axios';

export default {
  name: 'Header',
  data(){
    return {
      store
    }
  },
  methods: {
    // Call a generic API
    getApi(api){
      return axios.get(this.store.apiUrl + api, {
        params: {
          api_key: this.store.key,
          query: this.store.searchText,
          language: this.store.languageDefault
        }
      })
    },
    // search by movie 
    search(){
      this.getApi(this.store.searchMovie)
      .then((res)=>{
        store.foundedMovies = res.data.results
        console.log(this.store.foundedMovies);
      })
      this.getApi(this.store.searchTv)
      .then((res) => {
        store.foundTv = res.data.results
        console.log(this.store.foundTv)
      })
    }
  }
  
}


</script>


<template>

<header>
  <div>
    <img src="/public/logo-boolflix.png" width="120" class="p-2">
  </div>

  <form @submit.prevent="search">

    <div class="searchbar input-group rounded">
    <input v-model.trim="this.store.searchText" type="search" class="form-control rounded" placeholder="Cerca film" aria-label="Search" aria-describedby="search-addon" />
    <button class="input-group-text border-0" id="search-addon">
    <span>cerca</span>
    </button>
    </div>
  
  </form>
   



</header>
  

  
</template>




<style lang="scss" scoped>
@use "bootstrap/scss/bootstrap" as *;

header {
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .searchbar {
    width: 300px;
    #search-addon {
      background-color: blue;
    }
  }
}

</style>