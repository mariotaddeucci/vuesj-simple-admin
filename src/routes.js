import Home from './router/Home.vue';
import Generic from './router/Generic.vue';

import Generic2 from './router/Generic2.vue';

var menu_tree = [
{path:'/', component:Home, label:'Home'},
{path:'/generic', component:Generic, label:'Generci', sub:[

{path:'/generic2', component:Generic2, label:'Sub Gen 2'},
]}
]

export default{
	getRoutes:function(){
		var routes = []

		menu_tree.forEach(function(obj){
			
			routes.push(obj);
			
			var keys = Object.keys(obj);

			if (keys.indexOf('sub') > -1){
				obj.sub.forEach(function(obj){
					routes.push(obj);
				});
			}

		});
		return routes;
	},
	getMenu(){
		return menu_tree;
	}
}
