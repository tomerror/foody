<template>
  <div id="app-grid">
    <div id="panel"></div>
    <navbar  id="nav" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './views/navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
#app-grid {
  display: grid;
  grid-template-columns: 7rem 1fr;
  grid-template-rows: 5rem 1fr;
  height: inherit;
  overflow: hidden;
}
#panel {
    background: #1b4332;
    grid-column: 1/3;
}
</style>
