import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

// Vue Material components and CSS
import { MdList, MdIcon, MdButton, MdDivider, MdToolbar, MdSubheader} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'
// Vue Material
Vue.use(MdList)
Vue.use(MdIcon)
Vue.use(MdButton)
Vue.use(MdDivider)
Vue.use(MdToolbar)
Vue.use(MdSubheader)

/*
// Import all
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


