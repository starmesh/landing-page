<template>
  <div class="FullheightHero">
    <section
      :style="{'background-image': 'url(' + bg + ')'}"
      class="hero is-primary is-fullheight header-image"
    >
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            StarMesh
          </h1>
          <h2 class="subtitle">
            Earth Observation data.
          </h2>
          <h2 class="subtitle">
            Cryptographically verifiable and distributed.
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FullheightHero extends Vue {
  @Prop(String) public img!: string;

  get bg () {
      return require(`../assets/img/esa/${this.img}.jpg`);
    }
}
// background-image: url("../assets/img/esa/Baltic_blooms.jpg");
</script>

<style scoped>
/* https://www.esa.int/ESA_Multimedia/Images/2019/12/Baltic_blooms */
.header-image {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
  opacity: 0.75;
}
</style>