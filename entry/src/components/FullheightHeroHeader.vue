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
              <div class="navbar-burger" @click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="navbar-menu" @click="showNav = !showNav" :class="{ 'is-active' : showNav }">
                <div class="navbar-end">
                  <router-link class="navbar-item" :to="{ name: 'blockchain', 
                    hash: '#blockchain-technology' }">
                    Blockchain
                    </router-link>
                  <router-link class="navbar-item" 
                    :to="{ name: 'blockchain', 
                    hash: '#traceablity' }">
                    Traceability
                  </router-link>
                  <router-link class="navbar-item" :to="{ name: 'blockchain', 
                    hash: '#eo-data-access-and-trading' }">
                    EO Data Rental
                  </router-link>
                  <router-link class="navbar-item" :to="{ name: 'blockchain', 
                    hash: '#intellectual-property-rights' }">
                    IPR
                    </router-link>
                  <router-link class="navbar-item" :to="{ name: 'dao', 
                    hash: '#tokenized-networks' }">DAO
                  </router-link>
                  <router-link class="navbar-item" :to="{ name: 'marketplace', 
                    hash: '#data-is-the-new-oil' }">Marketplace
                  </router-link>
                  <router-link class="navbar-item" :to="{ name: 'oracle', 
                    hash: '#objective-data-feeds' }">Oracle
                  </router-link>
                  <router-link class="navbar-item" :to="{ name: 'techstack', 
                    hash: '#tech-we-plan-to-build-on' }">Tech
                  </router-link>
                  <router-link class="navbar-item" :to="{ name: 'team', 
                    hash: '#who-we-are' }">Team
                  </router-link>
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
        <div class="hero-body">
          <div class="container has-text-centered">
            <img class="center-logo" :src="`${publicPath}img/starmesh_logo_dec_2019.png`" alt="StarMesh logo">
            <h1 class="title is-spaced">
                StarMesh
            </h1>
            <h2 class="subtitle">
              Earth Observation meta-vehicle.
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
        <!-- <div id="discover" class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <li><router-link :to="{ name: 'index', hash: '#discover' }">Overview</router-link></li>
                        <li><router-link :to="{ name: 'blockchain', hash: '#discover' }">Blockchain</router-link></li>
                        <li><router-link :to="{ name: 'dao', hash: '#discover' }">DAO</router-link></li>
                        <li><router-link :to="{ name: 'ai', hash: '#discover' }">AI</router-link></li>
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
.navbar-item:focus {
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