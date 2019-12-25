<template>
  <div class="social">
    <h1>Earth Observation data. </h1> 
    <h1>Cryptographically verifiable and distributed.</h1>
    <a href="https://twitter.com/Starmesh1">
      <b-button 
        icon-left="twitter">
      </b-button>
    </a>
    <b-button
      icon-pack="fab"
      icon-left="galactic-senate">
    </b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Social extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color:aliceblue;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
