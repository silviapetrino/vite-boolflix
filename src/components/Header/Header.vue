<script>
export default {
  name: 'Header'
}
</script>

<template>

<header>
  <div>logo</div>

  <div class="searchbar input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button class="input-group-text border-0" id="search-addon">
    <span>cerca</span>
  </button>
</div>

</header>
  

  
</template>

<style lang="scss" scoped>
@use "bootstrap/scss/bootstrap" as *;

header {
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .searchbar {
    width: 300px;
    #search-addon {
      background-color: blue;
      color: white;
    }
  }
}

</style>