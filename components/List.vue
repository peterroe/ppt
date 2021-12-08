<template>
	<div>
		<div>
			<button class="btn" @click="getList">发送请求</button>
			<button class="btn" @click="reset">重置</button>
		</div>
		<ul>
			<li v-for="(item,index) in list">
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			getList() {
				console.log(123)
				axios.get('http://49.123.0.27:3000/list').then(value => {
					console.log(value.data)
					this.list = value.data
				})
			},
			reset() {
				this.list = []
			}
		}
	}
</script>

<style>
	.btn {
		outline: none;
		border: 1px solid #DDDDDD;
		padding: 8px 10px;
		border-radius: 5px;
		margin: 5px
	}
	.btn:focus {
		outline: none;
	}
</style>
