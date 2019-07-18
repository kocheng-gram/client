import App from './App.vue'
import Axios from 'axios'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Axios)
Vue.use(Vuetify)
new Vue(App).$mount('#app')