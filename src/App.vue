
<script>

import Header from './components/Header/Header.vue';
import ContainerCards from './components/Main/ContainerCards.vue';


export default {
  name: "mainApp",
  components: {
    Header,
    ContainerCards
  }
}
</script>

<template>

  <Header />
  <ContainerCards />

</template>


<style lang="scss">

@use './scss/main.scss' as *;

</style>