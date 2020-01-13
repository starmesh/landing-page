<template>
  <div class="index">
    <Video />
    <MooSend />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MooSend from './MooSend.vue';
import Footer from './Footer.vue';
import Video from './Video.vue';
import AppFooter from './AppFooter.vue'

@Component({
  components: {
    MooSend,
    Footer,
    Video
  },
})
export default class Index extends Vue { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* .index {
  background-color: #fafafa;
} */
</style>
