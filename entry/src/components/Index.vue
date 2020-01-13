<template>
  <div class="index">
    <div class="columns">
      <div class="column">
        <Video />
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <MooSend />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MooSend from './MooSend.vue';
import Footer from './Footer.vue';
import Video from './Video.vue';

@Component({
  components: {
    MooSend,
    Footer,
    Video
  },
})
export default class Index extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  background-color: darkgray;
}
</style>
