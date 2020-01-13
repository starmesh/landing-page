<template>
  <div class="Video">
    <video-background 
      :elementId="'header-background-video'"
      :ref="'header-background-video'"
      :mp4Source="require('../assets/fly_by_earth.mp4')" 
      :posterSource="require('../assets/poster_flyby.jpg')"
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
            <Social />
          </div>
        </div>
      </div>
        <div class="container py-4">
          <div class="row justify-content-center mb-4">
            <div class="col-lg-6">
              <div class="video-motto">Backbone of data distribution</div>
            </div>
          </div>
        </div>
    </div>
    </video-background>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Social from './Social.vue';

@Component({
  components: {
    Social
  }
})
export default class Video extends Vue {}
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

