<template>
  <div class="tech">
    <FullheightHeroHeader />
    <FullheightHero 
      id="data-is-the-new-oil"
      img="Korean_Peninsula"
      :text="text.first"
      />
    <FullheightHero 
      img="Zambezi_Delta_diversity"
      :text="text.firstAA"
      />
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
      '<h3>Data is the new Oil</h3>',
      'Interested buyers search and select the information they want and acquire it in exchange for money. The marketplace (mediator) gets incentive for facilitating the trade and, in some cases, for hosting the data.',
      ' A key aspect which the conventional data marketplaces tend to ignore is ensuring fair trade. The involved parties - sellers, buyers and mediators, being strategic players, would often want to collude and cheat in order to gain more money. Also, if the mediator hosts the complete trade, and buyer and seller have no communication, then the mediator is in a position of power. It can equivocate and forge for monetary gains.',
    ],
    firstAA: [
      '<h3>Features of Data Marketplace</h3>',
      '<b>Fairness</b>: Before executing a trade, the commodity and the price needs to be agreed upon.',
      '<b>Transparency, Privacy and Security</b>: The information that is being traded must not get leaked to any other party except Buyer, that too only if the trade was successful, which would make the system privacy preserving. There should be public log as to ascertain the ownership of data and assurance that at least through this system, transferring data or ownership without keeping log should not be possible. This property does not capture piracy as anyone can leak data outside the marketplace which may be beyond the control of the honest actors of the system.',
      '<b>Regulation</b>: Different types of data have different regulations that may be related to the parties involved in the trade.',
      '<b>Efficiency</b>: For any practical system to have widespread adoption, efficient implementation should be possible. We would call a data marketplace efficient if proposed protocol has comparable speed and requirement compared to state-ofthe-art conventional protocols used today.',
      '<b>Incentivization</b>: A much more robust payout strategy needs to be developed for a marketplace use case, which needs thorough game theoretic evaluation and simulation to find the optimal incentive for each players to make foul play economically taxing. All optimal payout strategies may not be useful for a marketplace scenario as the platform needs sufficient margin and liquidity to function properly and these practical factors should also be kept in mind while designing. Capturing practical constraints in a game theoretic framework is a challenge in itself. Disincentivizing foul play by dishonest actors and designing a protocol resilient to colluding malicious parties is a challenge and we wish to pursue this as part of future work.',
      'Read more <a href="https://arxiv.org/pdf/1811.11462.pdf">Blockchain Enabled Data Marketplace - Design and Challenges</a>'
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
