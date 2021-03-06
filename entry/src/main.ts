import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'vue-video-section/dist/vue-video-section.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VideoBackground from 'vue-video-section'; 

Vue.component('video-background', VideoBackground);
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faTrash, faTwitter);

Vue.use(Buefy, {})
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
