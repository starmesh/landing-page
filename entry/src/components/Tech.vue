<template>
  <div class="tech">
    <FullheightHeroHeader />
    <FullheightHero 
      id="tech-we-plan-to-build-on"
      img="Korean_Peninsula"
      :text="text.first"
      />
    <FullheightHero 
      img="Zambezi_Delta_diversity"
      :text="text.firstAA"
      />
     <FullheightHero 
      img="Lake_George_Uganda"
      :text="text.firstA"
      />
    <FullheightHero 
      img="Reykjavik_Iceland"
      :text="text.second"
      />
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
      '<h3>Decentralized World</h3>',
      'We believe using decentalized tech should be basestone of our tech.',
      'We should be picky on technology what we are using and how we will sell it to others as our validators, investors and developers are being responsible.',
    ],
    firstAA: [
      '<h3>Substrate / Polkadot</h3>',
      'A scalable, heterogeneous multichain. Polkadot is a platform with low barriers to entry for flexible, autonomous economies acting together within Polkadot’s shared security umbrella. Polkadot is a revolution, not just in blockchain technology but also towards enabling fairer peer-to-peer digital jurisdictions.',
      'Find more at <a href="https://wiki.polkadot.network/">Polkadot Wiki</a>',
    ],
    firstA: [
      '<h3>Textile</h3>',
      'Textile is a set of open source tools that provide a decentralized database, remote storage, user management, and more over the IPFS network.',
      'Find more at <a href="https://textile.io/">Textile.io</a>',
    ],
    second: [
      '<h3>Filecoin</h3>',
      '<b>Reliably store files at hyper­competitive prices</b>.',
      'Clients can tune their storage strategy to suit their needs in redundancy, speed of retrieval and cost. Filecoin storage and retrieval markets make miners compete to give you flexible options at the best prices.',
      'Find more at <a href="http://filecoin.io/">Filecoin.io</a>'
    ],
    third: [
      '<h3>DAO will solve governance issues</h3>',
      'Collaborative ecosystems built on blockchain data structures need to consider <b>governance issues</b>, such as shared databases, <b>ownership of input data</b>, products or software elements, <b>identities (signatures) of contracted/ trusted partners, their shared responsibility, pricing and business models, and the framework for collaboration with value exchange and revenue sharing.</b>'
    ]
  }
}
</script>

<style>
</style>
