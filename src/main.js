import Vue from 'vue'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-dark.css';

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueMaterial);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
