<template>
	<view>
		<view class="box-item">
			<view class="list-item" v-for="(item,index) in list" :key="item.id" @click="changeItem(index)">
				<view class="item-title" :class="[currentIndex == index ? 'fontChange':'']">
					{{item.title}}
				</view>
				<view :class="[currentIndex == index ? 'activePage':'']"></view>
			</view>
		</view>
		<view class="" v-if="currentIndex===0">
			1
		</view>
		<view class="" v-if="currentIndex===1">
			<pick></pick>
		</view>
		<view class="" v-if="currentIndex===2">
			3
		</view>
	</view>
</template>

<script>
	import pick from '../../components/pickone/pickone.vue'
	export default {
		data() {
			return {
				list: [{
						title: '我的纸条',
						id: 0
					},
					{
						title: '抽个对象',
						id: 1
					}, {
						title: '摆摊赚钱',
						id: 2
					},
				],
				currentIndex: 1
			}
		},
		methods: {
			changeItem(index) {
				this.currentIndex = index
			}
		},
		components:{
			pick
		}
	}
</script>

<style scoped>
	.box-item {
		height: 115rpx;
		padding: 31rpx 65rpx;
		box-sizing: border-box;

	}

	.list-item {
		width: 33.33%;
		display: inline-block;
		position: relative;
	}

	.item-title {
		text-align: center;
		white-space: nowrap;
		font-weight: bold;
		font-size: 25rpx;
	}

	.activePage {
		border-bottom: 5px solid black;
		border-radius: 15px;
		width: 27rpx;
		position: absolute;
		left: 50%;
		transform: translate(-35%, 30%);
	}

	.fontChange {
		font-weight: 900;
		font-size: 30rpx;
	}
</style>
