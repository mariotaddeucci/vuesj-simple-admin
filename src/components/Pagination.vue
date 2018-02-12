<template>
	<ul class="pagination" v-if="total > 1">
		<li class="page-item" v-show="current != 1">
			<a class="page-link" @click="setPage(current-1)">
				<span aria-hidden="true">&laquo;</span>
			</a>
		</li>
		<li v-for="page in pagination()" class="page-item">
			<span class="page-link" v-if="page == '...'">&hellip;</span>
			<a class="page-link" @click="setPage(page)" v-else :class="{'is-current':page == current}">{{page}}</a>
		</li>
		<li class="page-item" v-show="current != total">
			<a  class="page-link" @click="setPage(current+1)">
				<span aria-hidden="true">&raquo;</span>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	name:'pagination',
	props:{
		current:{
			type:Number
		},
		total:{
			type:Number
		},
		tips_size:{
			default:1,
			type:Number
		},
		near_size:{
			default:2,
			type:Number
		}
	},	
	methods:{
		setPage:function(p){
			if(p != this.current && p > 0 && p <=this.total)
				this.$emit('change', p); 
		},
		pagination:function(){
			var arr = [];
			arr.push(this.current);
			for(i=1; i<= this.tips_size;++i){
				arr.push(i);
				arr.push(this.total - i + 1);
			}
			for(i=1; i<= this.near_size;++i){
				arr.push(this.current + i);
				arr.push(this.current - i);
			}
			var self = this;
			arr= arr.filter(function(item, pos, arr) {
				return arr.indexOf(item) == pos && item > 0 && item <= self.total;
			});
			arr.sort(function(a, b){return a-b});
			for(var i = arr.length - 1; i--;){
				if(arr[i] + 1 != arr[i+1] && arr[i+1] != '...')
					arr.splice(i+1, 0, "...");
			}
			return arr;
		}
	},
}
</script>