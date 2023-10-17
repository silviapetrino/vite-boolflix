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
  }
}
</script>

<template>

  <div class="card-sp">
    <div class="title">titolo : {{ result.title }}</div>
    <div class="original-title">titolo originale : {{ result.original_title }}</div>
    <div class="vote">Vote :</div>
    <div class="language">lingua</div>
    <div class="overview">{{ result.overview }}</div>
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