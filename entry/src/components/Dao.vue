<template>
  <div class="index">
    <FullheightHeroHeader />
    <FullheightHero 
      img="Korean_Peninsula"
      :text="text.first"
      />
     <FullheightHero 
      img="Tromsoe_Norway"
      :text="text.firstA"
      />
    <FullheightHero 
      img="Reykjavik_Iceland"
      :text="text.second"
      />
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
export default class Index extends Vue { 
  private text = {
    first: [
      '<h3>Tokenized Networks: What is a DAO?</h3>',
      'DAOs tackle an age-old problem of governance, which political scientists and economists refer to as the principal-agent dilemma. This occurs when the agent of an organization has the power to make decisions on behalf of, or impacting, the principal – another person or entity in the organization.',
      'DAO involve a set of people interacting with each other according to a self-enforcing open-source protocol. Keeping the network safe and performing other network tasks is rewarded with the native network tokens. ',
      'Blockchains and smart contracts hereby <b>reduce transaction costs of management at higher levels of transparency</b>, aligning the interests of all stakeholders by the consensus rules tied to the native token. Individual behaviour is incentivized with a token to collectively contribute to a common goal.',
      'Members of a DAO are not bound together by a legal entity, nor have they entered into any formal legal contracts.',
      'Instead, they are <b>steered by incentives tied to the network tokens</b>, and fully transparent rules that are written into the piece of so ware, which is enforced by machine consensus. There are no bilateral agreements. There is only one governing law – the protocol or smart contract – regulating the behaviour of all network participants.'
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
