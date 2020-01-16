<template>
  <div class="index">
    <FullheightHeroHeader />
    <FullheightHero 
      img="Korean_Peninsula"
      :text="text.first"
      />
    <FullheightHero 
      img="Korean_Peninsula"
      :text="text.firstA"
      />
    <FullheightHero 
      img="Tromsoe_Norway"
      :text="text.second"
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
      img="Reykjavik_Iceland"
      :text="text.fifth"
      />
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
      '<h3>We are trying to solve discoverability of data sets.</h3>',
      'The simplest case is unlocking data assets to empower artificial intelligence - more data is better.',
      'Such as aggregate data assets and execution of a complete data science workflow. By training AI on the premise of the data, privacy and security can unlock otherwise unreachable data.',
    ],
    firstA: [
      '<b>Starmesh</b> empowers data scientists with an open and cryptographically secure platform to build applications such as compute over private data, and federated learning to unlock the greater potential of AI.',
      '<h3>Data, everywhere</h3>',
      'How do you unlock your economic potential today?',
      'Seeling your data B2B? - uneffective.',
      'Franchise fees? - takes time to scale',
      'Subscription fees? - infrastructure costs and setup',
      'Licensing. - big upfront charges.'
    ],
    second: [
      '<h3>We are trying to aggregate data from known available layers:</h3>',
      '<b>GTO+</b> - ESA Sentinel, INSAT-3D, JAXA,...',
      '<b>LEO</b> - Cubesats experiments',
      '<b>Stratosphere</b> - Stratobaloons and Picobaloons',
      '<b>Ground</b> - UAVs, various IoT sensorics',
      'All under one simple <b>GraphQL</b> interface for your application with payment gateway, in web2.0 speak.',
      'Our aim is to have cryptographically secured traceability of satellite data.'
    ],
    third: [
      '<h3>We want to embrace various web3 revenue models.</h3>',
      'There are numerous opportunities to leverage sales of your value-added datasets',
      'We are aware of subscription as recurring value over time. Membership fees, Streaming Money, various Revenue Share models - Percentage Fee % or Income Share.',
      'With us, you can have <b>Continuos Funding Models</b> like <b>Curved Bonding and Continuous Organizations</b>',
      'Our tech stack in PoC phase includes <b>Rust, Substrate (Polkadot Network underlayer), IPFS, Filecoin and DAT.</b>',
      'We are working on the curated interface for general customers. Explorer for variety of data like <b>SAR, Optical and Value-added data</b>.'
    ],
    fourth: [
      '<h3>Possibility of higher usage of your data-sets</h3>',
      'Layer for data exchange within the fee market, various data vendor on platform. User will benefit on the combination of metadata vehicle',
      '<b>Data Accessibility UX</b>',
      'ML/AI algorithms will gain new opportunities. Data prepared for ML/AI - it takes 80% of the time to prepare data set for ML',
      'Building blocks for other apps. Easier mashups with data-sets. Smooth information sharing thanks to interoperability across protocols. Data robustness and integrity with intermediaries',
    ],
    fifth: [
      '<h3>Vision of Starmesh</h3>',
      'Support of Geospatial and GIS Companies. Remotely sensed data are a key technology for updating many types of GIS data. Accessible GIS data warehouses. GeoSpatial data mining platform. Layer for the next generation of galaxy research.',
      '<h3>Survelliance</h3>',
      'Help to identify Illegal Logging and Charcoal Trafficking. Illegal Unreported and Unregulated Fishing and Illegal Mining.',
      '<h3>Early Disaster Warnings</h3>',
      'Issue Early Disaster Warnings, Real-time monitoring of river streams within low maintenance to improve DAM safety.'
    ]
  }
}
</script>

<style scoped>
</style>
