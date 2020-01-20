<template>
  <div class="Video">    
    <video-background 
      :elementId="'header-background-video'"
      :ref="'header-background-video'"
      :webmSource="bgVideoWebP"
      :posterSource="bgPoster"
      :mobileBreakpoint="992"
      :desktopHeight="550"
      :mobileHeight="450"
      :playsinline="true"
      :loop="true"
      :autoplay="true"
      :autobuffer="true"
      :muted="true"
    >
    <div slot="overlay-content" class="overlay-content">
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <FooterContent />
          </div>
        </div>
      </div>
    </div>
    </video-background>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FooterContent from './FooterContent.vue';

@Component({
  components: {
    FooterContent
  },
})
export default class Video extends Vue {
  get bgPoster () {
    return `./img/poster_Earth_From_Space.jpg`;
  }
  // https://caniuse.com/#feat=webm except IE should be everything supported
  // :mp4Source="bgVideo" add if you have funny day, saves 2.5M 
  get bgVideo () {
    return `./img/video/Earth_From_Space.mp4`;
  }
  get bgVideoWebP () {
    return `./img/video/Earth_From_Space.webm`;
  }
}
</script>

<style scoped>
.row {
  padding-top: 50px;
}

.code-text {
  background: #eee;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}

@media (min-width: 992px) {
  .code-text {
    margin-bottom: 0;
  }
}

.btn {
  text-transform: uppercase;
  font-weight: bold;
}

.overlay-content {
  h3 {
    color: #fff;
  }
}

.video-motto {
  font-weight: bold;
  color: white;
}
</style>

