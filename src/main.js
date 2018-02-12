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

import PageHome from './router/Home.vue'

Vue.use(VueCookie)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)


const routes =[
{path:'/', component:PageHome, name:'Home'},
];



const router = new VueRouter({
	routes,
	mode:'history'
});


new Vue({
	el: '#app',
	router,
	render: h => h(App)
});