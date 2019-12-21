import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTrash, faGalacticSenate);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Buefy, {
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
