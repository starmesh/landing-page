<template>
  <div class="index">
    <FullheightHeroHeader />
    <FullheightHero 
      img="Korean_Peninsula"
      :text="text.first"
      />
    <FullheightHero 
      img="Tromsoe_Norway"
      :text="text.second"
      />
    <FullheightHero 
      img="Reykjavik_Iceland"
      :text="text.third"
      />
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

@Component({
  components: {
    MooSend,
    Footer,
    Video,
    FullheightHeroHeader,
    FullheightHero,
  },
})
export default class Index extends Vue { 
  private text = {
    first: [
      'We are trying to solve discoverability of data sets.',
      'The simplest case is unlocking data assets to empower artificial intelligence - more data is better.',
      'Such as aggregate data assets and execution of a complete data science workflow. By training AI on the premise of the data, privacy and security can unlock otherwise unreachable data.',
      'Starmesh empowers data scientists with an open and cryptographically secure platform to build applications such as compute over private data, and federated learning to unlock the greater potential of AI.',
      'Data, everywhere',
      'How do you unlock your economic potential today?',
      'Seeling your data B2B? - uneffective.',
      'Franchise fees? - takes time to scale',
      'Subscription fees? - infrasturcture costs and setup',
      'Licensing. - big upfront charges.'
    ],
    second: [
      'We are trying to aggregate data from known available layers',
      'GTO+ - Sentinel, JAXA,...',
      'LEO - Cubesats experiments',
      'Stratosphere - Stratobaloons',
      'Ground - UAVs',
      'All under one simple GraphQL interface for your application'
    ],
    third: [
      'We want to embrace various web3 revenue models',
      'There are numerous opportunities to leverage sales of your value-added datasets',
      'We are aware of subscription as recurring value over time. Membership fees, Streaming Money, various Revenue Share models - Percentage Fee % or Income Share. With us you can have Continuos Funding Models like Curved Bonding and Continuos Organizations',
      'Our tech stack in PoC phase includes IPFS, Filecoin and DAT.',
      'We are working on curated interface for general customers. Explorer for variety of data (SAR, Optical, Value-added data'

    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* .index {
  background-color: #fafafa;
} */
</style>
