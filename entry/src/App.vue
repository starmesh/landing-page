<template>
  <div id="app">
    <router-view id="router-view" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  metaInfo() {
    return {
      title: 'StarMesh - 🛰🌍 Earth Observation meta-vehicle',
      titleTemplate: '%s | StarMesh',
      meta: [
        { 
          vmid: 'description',
          name: 'description',
          content: 'Distributed and cryptographically verifiable Earth Observation meta-vehicle at one place'
        },
        { property: 'og:title', content: 'StarMesh - 🛰🌍 Earth Observation meta-vehicle' },
        { property: 'og:type', content: 'website'},
        { property: 'og:url', content: 'https://starmesh.xyz'},
        { property: 'og:description', content: 'Distributed and cryptographically verifiable Earth Observation meta-vehicle at one place' },
        { property: 'og:site_name', content: 'Distributed and cryptographically verifiable Earth Observation meta-vehicle at one place'},
        { property: 'og:locale', content: 'en_US'},
        { property: 'og:image', content: '/img/icons/android-chrome-256x256.png'}
      ]
    }
  },
})
export default class App extends Vue {}
 

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

#app {
  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
