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

<style lang="postcss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: var(--primaryColor);

  &__link {
    color: #ffffff;
  }
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
