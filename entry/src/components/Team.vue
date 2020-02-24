<template>
  <div class="tech">
    <FullheightHeroHeader />
    <FullheightHero 
      id="who-we-are"
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
      '<h1>Alexandra</h1>',
      '<h3>GIS expert</h3>',
      'Student at Department of Cartography, <b>Geoinformatics and Remote Sensing at Faculty of Natural Sciences</b>, Comenius University in Bratislava.',
      'I am focusing my study on <b>remote sensing and earth observation</b>. In September 2018 I attended <b>ESA ECS Training Course on Earth Observation in Bratislava</b>.',
      'Moreover, I am a regular attendee of lectures and conferences within this field. My passions also include map language and map semiotics.',
      'I am currently working on my bachelor thesis that deals with evaluation of land cover changes according to IPCC (Intergovernmental Panel on Climate Change) methodology.',
      'My skills are <b>QGIS, GRASS GIS, ArcGis, PostgreSQL, Surfer, SNAP, Idrisi, eCognition</b>',
    ],
    firstAA: [
      '<h1>Martin</h1>',
      '<h3>developer</h3>',
      'Backend developer with backround in <b>Node.js/javascript, Golang, Rust</b>, various document/relational databases(<b>CocroachDb, Couchbase, Mongodb, Redis</b>), scalable api services.', 
      'He is working with DevOps technologies (<b>k8s, prometheus, grafana, aws, vps</b>). He is also intersted in <b>IPFS, Polkadot/Substrate, Machine-learning and AI</b>',
    ],
    firstA: [
      '<h1>Viktor</h1>',
      '<h3>Full stack engineer</h3>',
      '(<b>NodeJS, React, Vue.JS, Java</b>), Student in the Faculty of Informatics and Information Technologies at Slovak Technical University, doing academic research about blockchain technology, published paper about using blockchain in car sharing industry.',
      'He has also experience with databases, <b>PostGIS, AI/ML.</b>',
    ],
    second: [
      '<h1>Matej</h1>',
      '<h3>Founder & Developer</h3>',
      'Matej has experience in blockchain environment as developer since Bitcoin in 2013, then in Ethereum since 2016 and Polkadot since 2019.',
      'In 2016 he attended <b>Copernicus Earth Observation Data Hackathon in Vienna</b> to gain experience to work with Sentinel datasets.',
      'Besides that he worked in security industry and password manager company. Latter for blockchain company Decent. His overall experience is backend developer with NodeJS and frontend developer VueJS.',
      'He got DevOps skill with Docker, Travis, databases like Couchbase and MongoDB. Infrastructure provisioning on Cloud platforms like <b>AWS, Google Cloud Provider and Netlify.</b>',
    ]
  }
}
</script>

<style>
</style>
