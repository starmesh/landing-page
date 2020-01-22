<template>
  <div class="footerContent">
    <div class="content">
      <div class="columns">
        <div class="column is-6 is-offset-3">
        <h1>🛰🌍 Follow Us </h1>
        <span class="social-icons" v-for="item in socials" :key="item.url">
          <a :href="item.url" target="_blank" rel="noopener" class="social-icon" aria-hidden="true">
            <font-awesome-icon v-if="item.icon" :icon="item.icon" />
          </a>
        </span>
        </div>
      </div>
    </div>
    <div class="content has-text-centered">
      <p>
        🛰🌍 StarMesh - source from <a href="https://github.com/starmesh/landing-page">starmesh/landing-page</a>. 
        The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. 
        Follow Us <a href="https://twitter.com/StarMesh1">twitter.com/StarMesh1</a>.
      </p>
      <p>📸 Images or videos released by <a href="https://www.esa.int/ESA_Multimedia/Copyright_Notice_Images">ESA under Creative Commons Attribution-ShareAlike 3.0 IGO (CC BY-SA 3.0 IGO) Licence</a></p>
      <span v-for="item in esa_source" :key="item.url">
        <a :href="item.url" target="_blank" rel="noopener" aria-hidden="true">
          📸 {{ item.name }}  
        </a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  faInstagram,
  faGithub,
  faFacebook,
  faTelegram,
  faFacebookMessenger,
  faGit,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

@Component
export default class FooterContent extends Vue {
  private socials = [
        { url: 'https://github.com/starmesh', title: 'Github', icon: faGithub },
        { url: 'https://twitter.com/StarMesh1', title: 'Twitter', icon: faTwitter }
      ];
  
  private esa_source = [
        { url: 'https://www.esa.int/ESA_Multimedia/Images/2019/12/Baltic_blooms', name: 'Baltic Blooms 🇸🇪'},
        { url: 'https://www.esa.int/ESA_Multimedia/Images/2019/10/Korean_Peninsula', name: 'Peninsula 🇰🇷🇰🇵'},
        { url: 'https://www.esa.int/ESA_Multimedia/Images/2019/12/Tromsoe_Norway', name: 'Tromsoe 🇳🇴'},
        { url: 'https://www.esa.int/ESA_Multimedia/Images/2018/07/Reykjavik_Iceland', name: 'Reykjavik 🇮🇸'},
        { url: 'https://unsplash.com/photos/qTV6c2pjbBo', name: 'The Lena River 🇷🇺'},
        // { url: 'https://www.esa.int/ESA_Multimedia/Images/2018/07/Shanghai_China', name: 6}
  ]
}
</script>

<style scoped>
a.social-icon {
  color: white;
}

a.social-icon:hover {
  color: #7957d5;
}

.footerContent {
  color: white;
}

h1 {
  color:aliceblue;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.social-icons {
  font-size: 2.6em;
  padding: 0.1em;
}
.social-icons:hover {
  cursor: pointer;
}
.column h1 {
  font-weight: bold;
  font-size: 2rem;
  color: #fdfdfd;
}
</style>
