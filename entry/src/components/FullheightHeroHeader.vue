<template>
  <div class="FullheightHeroHeader">
    <section 
      :style="{'background-image': 'url(' + bg + ')'}"
      class="hero is-primary is-fullheight header-image">
        <div class="hero-head">
            <header class="navbar">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://starmesh.xyz">
                        <img :src="`${publicPath}img/starmesh_logo_dec_2019.png`" alt="StarMesh logo">
                        <p>_StarMesh_</p>
                    </a>

                    <div class="navbar-burger" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
                    <div class="navbar-end">
                        <a class="navbar-item" href="#">tech</a>
                        <a class="navbar-item" href="#">team</a>
                        <a class="navbar-item" href="#">about</a>
                        <span class="navbar-item">
                            <a class="button is-primary is-inverted">
                                <span class="icon">
                                <i class="fab fa-twitter"></i>
                                </span>
                                <span>Follow</span>
                            </a>
                        </span>
                    </div>
                </div>
            </header>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">
                    StarMesh
                </h1>
                <h2 class="subtitle">
                    🛰🌍 Earth Observation meta-vehicle.
                </h2>
                <h2 class="subtitle">
                    Cryptographically verifiable and distributed data layer.
                </h2>
                <h3 class="subtitle">
                  Rich spatial data from various sources, all from one convenient location.
                </h3>
            </div>
        </div>
        <!-- Hero footer: will stick at the bottom -->
        <!-- <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <li class="is-active"><a>Overview</a></li>
                        <li><a>Modifiers</a></li>
                        <li><a>Grid</a></li>
                        <li><a>Elements</a></li>
                        <li><a>Components</a></li>
                        <li><a>Layout</a></li>
                    </ul>
                </div>
            </nav>
        </div> -->
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FullheightHeroHeader extends Vue {
  private showNav: boolean = false;
  private img: string = 'Baltic_blooms'
  get bg () {
    return `./img/esa/${this.img}.jpg`;
  }
  get publicPath() {
    return (process as any).env.BASE_URL
  }
}
</script>

<style scoped>
 .header-image {
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #999;
}

</style>