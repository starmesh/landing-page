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
      />
    <FullheightHero 
      img="Zambezi_Delta_diversity"
      :text="text.seven"
      />
    <FullheightHero 
      img="Zambezi_Delta_diversity"
      :text="text.sevenA"
      />
    <FullheightHero 
      img="Zambezi_Delta_diversity"
      :text="text.sevenB"
      />
    <FullheightHero 
      img="Lake_George_Uganda"
      :text="text.sevenC"
      />
    <FullheightHero 
      img="Lake_George_Uganda"
      :text="text.sevenD"
      />
    <FullheightHero 
      img="Lake_George_Uganda"
      :text="text.sevenE"
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
      '<h3>Blockchain technology</h3>',
      'is often referred to as having a revolutionary potential for transforming the <b>‘digital economy’</b> by replacing monolithic and centralised management structures (such as banks, stock exchanges and government agency functions) by a network of distributed and inclusive systems, in which people and organisations <b>can participate in open, transparent and direct collaboration (peer-to-peer) ecosystems.</b>',
      'This vision of information and value exchange, conducted in a trustworthy way and without central control authority, is driving substantial investments into various startups and blockchain enterprises.',
    ],
    firstA: [
      '<h3>Experts agree</h3>',
      'overall that the primary reason for using blockchain is to decentralise, that is, to secure storage and transfer of information by removing the single point of failure, and to promote <b>integrity (immutability) and ownership</b> of data.',
      'Blockchain is also built upon the concept of distributed ownership of the node infrastructure, which is suitable for sharing and handling data more directly and in a more transparent way.',
      'Therefore users tend to adopt it in order to have <b>more control over the provenance and use of data, to monitor data quality, to guarantee data security, or to build trust in data</b>',
    ],
    second: [
      '<h3>Digital transactions</h3>',
      'As things progress, digital transactions will take place in an increasingly automated way, without intermediaries or brokers, and involving both human and machine interaction and data sharing in the value chain.',
      'New digital data structures and integration process solutions that allow us to <b>lower the administrative cost of such operations</b> (i.e. contract signing, invoicing and settlements), or share revenues for collaborative inputs, will therefore be breaking new ground for the EO industry.'
    ],
    secondA: [
      '<h3>EO sensor networks</h3>',
      'EO sensor networks and associated EO services and algorithms could become functional ‘nodes’ in a Smart Contract value chain, by connecting the physical environment to digital ledgers: EO can back up a record of information <b>about product ownership or provenance with the physical representation of assets</b>, estimated from remotely-sensed physical objects across the whole electromagnetic spectrum (also known as Digital Twins)',
    ],
    third: [
      '<h3>Sentinel Product Life Cycle</h3>',
      'Take the Sentinel Product Life Cycle, for example, which requires the <b>labelling of EO data</b> to make it more <b>searchable and interoperable</b>.',
      '<b>Protecting data from tampering, and software and production chains from infringement or errors</b>, is going to be increasingly important vis-a-vis cloud-based processing chains.',
      'The capacity to certify the integrity of a product by <b>providing traceability</b> and <b>proof of EO value chain immutability and its authenticity has a high utility value.</b>'
    ],
    fourth: [
      '<h3>Tracking of data processing steps</h3>',
      'It is also going to become increasingly important to improve the <b>tracking of data processing steps</b>, and the attribution of software elements or data use in a value chain.',
      'On the one hand, verifiable audit trails could be used to <b>ensure the authenticity and quality of data and processing techniques (both software and methodologies)</b>.',
      'This would result in building trust in EO data chain attributes for <b>decision-making purposes</b> (i.e. for security applications, law enforcement, insurance, commodity trading, etc.).',
      'On the other hand, better data or product administration, as well as the <b>attribution of originality</b>, especially in the open source domain, would improve the overall protection of Intellectual Property Rights in the platform-based economy'
    ],
    fifth: [
      '<h3>Empower underrepresented users of EO</h3>',
      'Exploring new opportunities to empower underrepresented users of EO is paramount.',
      '<b>This could be achieved by stimulating novel collaborative arrangements, in which knowledge and data sharing, and exchange of value for contributions, is an integral part of the marketplace.</b>',
      'Such collaborations might involve, on the one hand, professional data brokers, or on the other hand farmers, citizens, or local groups who can take full custody of their data. There is in reality an urgent need for solutions that can help to collect and integrate non-EO data into services, make data reliable and interoperable, register data and contributions, and <b>propose attractive revenue sharing schemes to incentivize collaborations.</b>'
    ],
    sixth: [
      '<h3>Collaborative arrangements</h3>',
      'Collaborative arrangements could explore the option of monetising or tokenising community inputs (i.e. by providing socioeconomic data, in situ data, etc. as well as proof of contribution).',
      'They could equally explore <b>monetizing processing capabilities</b> (i.e. hosting data and processing power on the distributed computers).',
      'This might have the effect of breaking monopolies, or opening existing clusters of expertise to new users and beneficiaries. Such value exchange might also solve one of the critical problems in EO: <b>the availability of reliable, validated and systematic ground truth information as well as datasets for training of AI models and Machine Learning.</b>'
    ],
    sixthA: [
      '<h3>New EO digital data licenses</h3>',
      'The concept of machine-readable information, which can be independently verified by any of the supply chain actors, provides the opportunity to develop <b>new EO digital data licenses which could be programmable and self- executing based on user profile, identity or task</b> undertaken in the online/platform environment.',
      'This could open entirely new ways of accessing data such as EO data rental, and new trading schemes such as tokenization and smart contracts.'
    ],
    sixthB: [
      '<h3>Data security and protection</h3>',
      'Finally, data security and protection should be taken into account as a vital element in the future of EO services.','Large repositories and databases of various economic, financial and personal data (including location data) are being made increasingly available, whether open or sold commercially to data analytics or data brokering companies.',
      'The success of future EO applications will depend on access to this wealth of digital data. At the same time, protection of sensitive non-EO databases from theft or interference, must be ensured, and in accordance with regulations such as EU GDPR (the EU General Data Protection Regulation).',
      '<b>There is therefore a need to demonstrate that the benefits of sharing sensitive data outweigh the risks, and that there are technological solutions for data protection that lower those risks while providing high analytical utility.</b> This need also reveals the demand for privacy- focussed and data security-driven applications, which could enable large groups of data to be simultaneously proprietary (or private), secured and shareable.'
    ],
    seven: [
      '<h3>Product Integrity, traceability, automated certification and auditability</h3>',
      'The use case includes organising, arranging and tracking distributed processing in the cloud, and building trust in algorithms and data processing chains, in particular the authentication of provenance and certification of data and processes.',
      'The use of blockchain data structures to <b>validate EO data and metadata</b> (data acquisition time/date etc.) provenance, by providing a trust anchor that any third party can use in case of a dispute',
      'The use of blockchain data structures to verify the steps of <b>processing, archiving and dissemination of the data </b> from the Sentinel Core Ground Segment to the end-users',
      'The use of blockchain data structures to give the operators of the Copernicus Space Component Data Access System means to audit the Copernicus products archive.'
    ],
    sevenA: [
      '<h3>Digital Identity solutions</h3>',
      'The use case includes the analysis of international standardisation efforts led by industry for the easier exchange of <b>digital identity credentials between different entities/devices in the decentralised ecosystem</b>, as well as European initiatives such as eIDAS (electronic IDentification, Authentication and trust Service) that may be integrated with blockchain to provide digital data representation and trusted identity frameworks for use in decentralised networks.'
    ],
    sevenB: [
      '<h3>EO data access and trading</h3>',
      'The use case includes the exploration of novel concepts for <b>EO data digital licenses which are programmable and self- executing</b> based on the user’s profile, identity or tasks undertaken in the online/ platform environment.', 
      'They may result in the development of <b>EO data rental and trading schemes based on tokenisation of assets.</b>'
    ],
    sevenC: [
      '<h3>Intellectual Property Rights (IPR)</h3>',
      'The use case reflects DLT applications for copyright protection.',
      'Existing examples from other industry domains indicate that authors and creators can publish works on blockchain creating a <b>quasi- immutable record of initial ownership, and encode smart contract functionality to license the use of their works.</b>',
      'For the EO sector the key point of value-adding interest is the ability to register copyright products in online registers, track the use of IP elements (ie. software and data products) and develop new ways of attributing use, and exchange of value for the use of copyright-protected content.'
    ],
    sevenD: [
      '<h3>Incentives in community collaborations</h3>',
      'Blockchain general utility is primarily revealed in situations when parties that do not trust each other have to work and collaborate together.',
      'This use case is based on blockchain-specific functions that can enhance trust frameworks among the participants in the collaborative networks.',
      'Blockchain encourages <b>community collaboration without intermediaries, while protecting the ownership of encrypted/shared data</b>, or software elements, and providing accountability for its use, and maintaining integrity of the resource pool. Devising frameworks for interacting among network participants via a tokenised system can also facilitate the ingestion of verifiable data sources to the pool of shareable resources, and revenue sharing schemes.'
    ],
    sevenE: [
      '<h3>Digital representation of assets</h3>',
      'For emerging DApps (Distributed Applications) services and Smart Contract execution.',
      'This use case is to demonstrate the role of EO in blockchain applications; in particular how EO can bridge and connect the physical environment to digital ledgers, and support the formulation of structured data flows in a variety of <b>asset management, risk management, environmental management, logistics or insurance domains</b>'
    ]
  }
}
</script>

<style>
</style>
