<template>
  <div id="app">
    <div class="container is-fluid">
    </div>
    <router-view id="router-view" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import Index from './components/Index.vue';

@Component({
  components: {
    // Index,
  },
})
export default class App extends Vue {}
</script>

<style>
html {
  background-color: #252429;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
