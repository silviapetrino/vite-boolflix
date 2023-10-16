
<script>
import Header from '../Header/Header.vue';
import singolCard from './singolCard.vue';
import { store } from '../../data/store';

export default {

  name: "container cards",
  components: {
    Header,
    singolCard
  },
  data(){
    return{
      store
    }
  }
}
</script>



<template>


    <div class="container py-5">
      
      <div class="row">
       

     

      </div>
    </div>

  

</template>



<style lang="scss" scoped>



</style>