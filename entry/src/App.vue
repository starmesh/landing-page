<template>
  <div id="app">
    <div class="container is-fluid">
      <div class="notification">
        Earth Observation data. Cryptographically verifiable and distributed.
        <a href="https://twitter.com/Starmesh1">
          <b-button 
            icon-left="twitter" 
            size="is-large">
          </b-button>
        </a>
        <b-button
          icon-pack="fab"
          icon-left="galactic-senate"
          size="is-large">
          <font-awesome-icon :icon="['fab', 'galactic-senate']" />
        </b-button>
      </div>
    </div>
    <router-view id="router-view" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Index from './components/Index.vue';

@Component({
  components: {
    Index,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
