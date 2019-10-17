import Vue from 'vue'
// import JQuery from 'jquery'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/_typo.scss';
const VueInputMask = require('vue-inputmask').default
 
Vue.use(VueInputMask)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

window.$ = window.jQuery = require('jquery')