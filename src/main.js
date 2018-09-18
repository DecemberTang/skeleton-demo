import Vue from 'vue'
window.Vue = Vue
import App from './App.vue'
import router from './router'
import Jad from 'jad-mobile'
window.Jad = Jad
import 'jad-mobile/lib/style.css'

Vue.use(Jad)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
