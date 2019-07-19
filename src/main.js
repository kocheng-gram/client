import App from './App.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'

Vue.use(axios)
Vue.use(Vuetify)
new Vue(App).$mount('#app')