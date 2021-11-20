<template>
  <div id="app-grid">
    <div id="panel"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app-grid {
  display: grid;
  grid-template-columns: 7rem 1fr;
  grid-template-rows: 5rem 1fr;
}
#panel {
    background: #262626;
    grid-column: 1/3;
}
#nav {
    display: grid;
    background-image: linear-gradient(136deg, #579952, #4b9145);
    color: white;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
