import Vue from 'vue'
import upload from './components/upload.vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
// new Vue(App).$mount('#app');
new Vue(upload).$mount('#upload');