<template>
  <div class="index">
    <FullheightHeroHeader />
    <FullheightHero 
      img="../assets/img/esa/Baltic_blooms.jpg"/>
    <FullheightHero2 
      img="../assets/img/esa/Baltic_blooms.jpg"/>
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
import FullheightHeroHeader from './FullheightHeroHeader.vue';
import FullheightHero from './FullheightHero.vue';
import FullheightHero2 from './FullheightHero2.vue';

@Component({
  components: {
    MooSend,
    Footer,
    Video,
    FullheightHeroHeader,
    FullheightHero,
    FullheightHero2
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
