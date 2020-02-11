<template>
  <div class="twitter-wrapper">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <a class="twitter-timeline" data-height="900" 
          data-theme="light" href="https://twitter.com/StarMesh1?ref_src=twsrc%5Etfw">
          Tweets by @StarMesh1
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Twitter extends Vue {}
</script>

<style scoped>
.twitter-wrapper {
  /* background-color: #fafafa; */
  padding-top: 4em;
  padding-bottom: 4em;
}
.form-title {
  padding: 2em;
}

</style>