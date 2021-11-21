<template>
    <div>
      <router-link to="/"><img class="svg" src="fruits.svg" alt="fruits"></router-link>
      <router-link to="/about"><img class="svg" src="vegetables.svg" alt="vegetables"></router-link>
      <router-link to="/about"><img class="svg" src="bread.svg" alt="breads"></router-link>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped lang="scss">
#nav {
    display: grid;
    background-color: #2d6a4f;
    color: white;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.svg {
  height: 50px;

  svg > g {
    fill: white;
  }
}
</style>