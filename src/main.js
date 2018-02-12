/*Vue Libs*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'

/* Other Libs*/
import axios from './customAxios';
import Bulma from 'bulma';
import './assets/style.scss'

import App from './App.vue';
import CustomRoutes from './routes';

Vue.use(VueCookie)
Vue.use(VueAxios, axios)
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