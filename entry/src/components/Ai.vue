<template>
  <div class="index">
    <FullheightHeroHeader />
    <FullheightHero 
      img="Korean_Peninsula"
      :text="text.first"
      />
     <!-- <FullheightHero 
      img="Tromsoe_Norway"
      :text="text.firstA"
      />
    <FullheightHero 
      img="Reykjavik_Iceland"
      :text="text.second"
      /> -->
    <!-- <FullheightHero 
      img="Tromsoe_Norway"
      :text="text.secondA"
      />
    <FullheightHero 
      img="Reykjavik_Iceland"
      :text="text.third"
      />
    <FullheightHero 
      img="Reykjavik_Iceland"
      :text="text.fourth"
      />
    <FullheightHero 
      img="The_Lena_River"
      :text="text.fifth"
      />
    <FullheightHero 
      img="The_Lena_River"
      :text="text.sixth"
      />
    <FullheightHero 
      img="The_Lena_River"
      :text="text.sixthA"
      />
    <FullheightHero 
      img="The_Lena_River"
      :text="text.sixthB"
      /> -->
    <MooSend />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MooSend from './MooSend.vue';
import Footer from './Footer.vue';
import FullheightHeroHeader from './FullheightHeroHeader.vue';
import FullheightHero from './FullheightHero.vue';

@Component({
  components: {
    MooSend,
    Footer,
    FullheightHeroHeader,
    FullheightHero,
  },
})
export default class Ai extends Vue { 
  private text = {
    first: [
      '<h3>Synergic use</h3>',
      'Synergic use of Blockchain and Deep Learning for space data and In-Orbit Demonstration of Satellite Integration to Distributed Ledger Systems. These will showcase the unique added-value features that satellites can bring to distributed ledger applications. ',
      'We want to provide platform for delivering solutions for EO data quality tracking; algorithm protection and processing; and cataloguing and distributing data via distributed systems.',
    ],
    firstA: [
      '<h3>What’s the point of DAO?</h3>',
      'It’s mean to coordinate shared goals from shared pool of resources.',
      'Manage trustless fund custody and frictionless fund distribution.',
    ],
    second: [
      '<h3>Polkadot has built-in DAO mechanics</h3>',
      '<b>Treasury</b> for submitting and voting on proposal.',
      '<b>Democracy</b> for referendum on proposals.',
      '<b>Staking</b> which is part of NpOS consensus that means token holders can have Validators who runs network which are miners alternative.',
    ],
  }
}
</script>

<style>
</style>
