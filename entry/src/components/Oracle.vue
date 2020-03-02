<template>
  <div class="tech">
    <FullheightHeroHeader />
    <FullheightHero 
      id="data-is-the-new-oil"
      img="Korean_Peninsula"
      :text="text.first"
      />
    <!-- <FullheightHero 
      img="Zambezi_Delta_diversity"
      :text="text.firstAA"
      /> -->
     <!-- <FullheightHero 
      img="Lake_George_Uganda"
      :text="text.firstA"
      />
    <FullheightHero 
      img="Reykjavik_Iceland"
      :text="text.second"
      /> -->
    <!-- <FullheightHero 
      img="Lake_George_Uganda"
      :text="text.third"
      /> -->
    <MooSend />
    <Twitter />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MooSend from './MooSend.vue';
import Twitter from './Twitter.vue';
import Footer from './Footer.vue';
import FullheightHeroHeader from './FullheightHeroHeader.vue';
import FullheightHero from './FullheightHero.vue';

@Component({
  components: {
    MooSend,
    Twitter,
    Footer,
    FullheightHeroHeader,
    FullheightHero,
  },
})
export default class Tech extends Vue { 
  private text = {
    first: [
      '<h3>Oracle</h3>',
      'A means for smart contracts to access data from the world outside the blockchain. A type of smart contract themselves, oracles take data from the outside world and put it into the blockchain for other smart contracts to consume.',
    ],
  }
}
</script>

<style>
</style>
