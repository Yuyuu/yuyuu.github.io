<template>
  <div id="app">
    <header>
      <TheHeader></TheHeader>
    </header>
    <main>
      <router-view/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 40px auto;
  max-width: 960px;
  padding: 0 10px;
}

a,
a:visited {
  color: inherit;
}

a:hover {
  color: #4CAF50;
}
</style>
