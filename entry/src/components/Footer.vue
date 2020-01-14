<template>
  
    <footer class="footer">
      <div class="content">
      <div class="columns">
        <div class="column is-4 is-offset-4">
        <h1>🛰 Add us on socials 🌍</h1>
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
      </div>
    </footer>
</template>

<script lang="ts">
import {
  faInstagram,
  faGithub,
  faFacebook,
  faTelegram,
  faFacebookMessenger,
  faGit,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  private socials = [
        { url: 'https://github.com/starmesh', title: 'Github', icon: faGithub },
        { url: 'https://twitter.com/StarMesh1', title: 'Twitter', icon: faTwitter }
      ];
}
</script>

<style scoped>
a {
  color: #7957d5;
}

a.social-icon {
  color: white;
}
a.social-icon:hover {
  color: #7957d5;
}
.footer {
  color: white;
  background-color: #252429;
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
  font-size: 1.3rem;
  color: #fdfdfd;
}
</style>
