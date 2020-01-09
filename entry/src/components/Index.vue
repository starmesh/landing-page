<template>
  <div class="video">
    <!-- <img src="../assets/logo.png"> -->
    <div class="columns">
      <div class="column">
        <video-background 
          :elementId="'header-background-video'"
          :mp4Source="require('../assets/fly_by_earth.mp4')" 
        >
        <div slot="overlay-content" class="overlay-content">
          <Social/>
        </div>
        </video-background>
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
import Social from './Social.vue';
import MooSend from './MooSend.vue';
import Footer from './Footer.vue';

@Component({
  components: {
    Social,
    MooSend,
    Footer
  },
})
export default class Video extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
