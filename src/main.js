/*Vue Libs*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'

/* Other Libs*/
import axios from 'axios';
import Bulma from 'bulma';
import './assets/style.scss'

import App from './App.vue';
import CustomRoutes from './routes';

var CustomAxios = axios.create({
	baseURL: 'http://127.0.0.1:5000/api/',
});

Vue.use(VueAxios, CustomAxios)
Vue.use(VueRouter)


const routes  =CustomRoutes.getRoutes();
const router = new VueRouter({
	routes,
	mode:'history'
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});