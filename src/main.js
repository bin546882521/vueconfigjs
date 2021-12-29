import Vue from 'vue'
import App from './App.vue'
// import '../src/style/index.scss'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
}).$mount('#app')
