<template>
  <div id="app">
    <header class="main-header">
      <router-link to="/" class="main-header__link">
        Vue.js PWA
      </router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-header {
  margin: 0;
  height: 4em;
  padding: 0 16px 0 24px;
  background-color: var(--primaryColor);

  &__link {
    display: inline-block;
    height: 100%;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    line-height: 4em;
  }
}

</style>
