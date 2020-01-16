<template>
    <footer class="FooterVideo">
      <Video />
    </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Video from './Video.vue';

@Component({
  components: {
    Video
  }
})
export default class FooterVideo extends Vue {}
</script>

<style scoped>
a {
  color: #7957d5;
}

.social-icons {
  font-size: 2.6em;
  padding: 0.1em;
}

.social-icons:hover {
  cursor: pointer;
}

.column h1 {
  font-weight: bold;
  font-size: 1.3rem;
  color: #fdfdfd;
}
</style>
