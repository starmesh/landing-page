<template>
  <div class="FullheightHeroHeader">
    <section 
      :style="{'background-image': 'url(' + bg + ')'}"
      class="hero is-primary is-fullheight header-image">
        <div class="hero-head">
            <header class="navbar is-fixed-top">
                <div class="navbar-brand">
                    <a class="navbar-item" :href="`${publicPath}`">
                        <img class="navbar-logo" :src="`${publicPath}img/starmesh_logo_dec_2019.png`" alt="StarMesh logo">
                        <p>StarMesh</p>
                    </a>

                    <div class="navbar-burger" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
                    <div class="navbar-end">
                        <!-- <a class="navbar-item" href="#">tech</a>
                        <a class="navbar-item" href="#">team</a>
                        <a class="navbar-item" href="#">about</a> -->
                        <span class="navbar-item">
                            <a class="button is-primary is-inverted"
                              href="https://twitter.com/Starmesh1">
                                <span class="icon">
                                <i class="fab fa-twitter"></i>
                                </span>
                                <span>Follow</span>
                            </a>
                        </span>
                        <span class="navbar-item">
                            <a class="button is-primary is-inverted"
                              href="https://www.linkedin.com/company/starmesh1/">
                                <span class="icon">
                                <i class="fab fa-linkedin"></i>
                                </span>
                                <span>Follow</span>
                            </a>
                        </span>
                        <span class="navbar-item">
                            <a class="button is-primary is-inverted"
                              href="https://www.facebook.com/starmesh1/">
                                <span class="icon">
                                <i class="fab fa-facebook"></i>
                                </span>
                                <span>Like</span>
                            </a>
                        </span>
                    </div>
                </div>
            </header>
        </div>

        <!-- Hello, I found you we're presenting at Phi week 2019 about Earth Observation on blockchain? We are probably doing something same already, but we need to find out :) We are doing https://starmesh.xyz/why-blockchain let me know what do you think and probably we can chat more -->

        <div class="hero-body">
            <div class="container has-text-centered">
                <img class="center-logo" :src="`${publicPath}img/starmesh_logo_dec_2019.png`" alt="StarMesh logo">
                <h1 class="title is-spaced">
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
        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <!-- <li class="is-active"><a>Overview</a></li> -->
                        <li><router-link :to="{ name: 'index' }">Overview</router-link></li>
                        <li><router-link :to="{ name: 'blockchain' }">Blockchain</router-link></li>
                        <li><router-link :to="{ name: 'dao' }">DAO</router-link></li>
                        <!-- <li><a>Grid</a></li>
                        <li><a>Elements</a></li>
                        <li><a>Components</a></li>
                        <li><a>Layout</a></li> -->
                    </ul>
                </div>
            </nav>
        </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FullheightHeroHeader extends Vue {
  private showNav: boolean = false;
  private img: string = 'Baltic_blooms'
  
  isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  get bg () {
    return this.isSafari() ? `./img/esa/${this.img}.jpg` : `./img/esa/${this.img}.webp`;
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
.hero.is-primary .tabs.is-boxed a:hover {
  background-color: rgba(255, 255, 255, 0.3)
}
.hero.is-primary .tabs.is-boxed {
  background-color: hsla(0, 0%, 10%, 0.55);
}
.navbar-brand {
  background-color: hsla(0, 0%, 10%, 0.55);
}
.navbar-menu {
  background-color: hsla(0, 0%, 10%, 0.55);
}
.navbar-burger {
  color: whitesmoke;
}
.navbar-logo {
  margin: 0.7rem;
}
.center-logo {
  max-height: 4.75rem;
  margin: 1rem;
}

</style>