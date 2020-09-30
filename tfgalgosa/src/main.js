import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
library.add(faVuejs)
library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
