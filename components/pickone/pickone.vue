<template>
	<view>
		<swiper :circular="true" :autoplay="true" :interval="1500" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image mode="widthFix"
						src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/109482/9/18492/204152/615c2652Eded22e75/de1cbd31d21f23c4.jpg!cr_1125x449_0_166!q70.jpg.dpg">
					</image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image mode="widthFix"
						src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/200056/29/11740/296600/615f3532E9f38bc80/dc6a5a95a57acb35.jpg!cr_1125x449_0_166!q70.jpg.dpg">
					</image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image mode="widthFix"
						src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/190377/3/14986/238049/60fe5d00Ea66e5a2a/02edf7f4af43bf27.jpg!cr_1125x449_0_166!q70.jpg.dpg">
					</image>
				</view>
			</swiper-item>
		</swiper>
		<view class="letter-box">
			<view class="left_car">
				<view class="mask_layer">
					<image src="../../static/image/c.png" mode="widthFix"></image>
				</view>
				<view class="sex-check">
					<image src="../../static/image/a.png" mode="widthFix"></image>
				</view>
				<button class="put_boycar">放入一张男生纸条</button>
				<button class="put_pickcar">抽取一张男生纸条</button>
			</view>
			<view class="right_car">
				<view class="mask_layer">
					<image src="../../static/image/d.png" mode="widthFix"></image>
				</view>
				<view class="sex-check">
					<image src="../../static/image/b.png" mode="widthFix"></image>
				</view>
				<view class="put_boycar">放入一张女生纸条</view>
				<view class="put_pickcar">抽取一张 生纸条</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	swiper {
		height: 284rpx;
		margin: 0 20rpx;
		border-radius: 15rpx;
	}

	swiper image {
		width: 100%;
		border-radius: 15rpx;

	}

	.letter-box {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 0 20rpx;
		margin-top: 35rpx;

	}

	.left_car {
		height: 500rpx;
		width: 335rpx;
		position: relative;
		flex: 1;
		background-color: rgb(96, 146, 238);
		border-radius: 15rpx;
		margin-right: 8rpx;

	}

	.right_car {
		height: 500rpx;
		width: 335rpx;
		position: relative;
		flex: 1;
		background-color: rgb(238, 96, 187);
		border-radius: 15rpx;
		margin-left: 8rpx;
	}

	.mask_layer image {
		width: 346rpx;
		border-top-right-radius: 15rpx;
		border-top-left-radius: 15rpx;
	}

	.sex-check {
		position: absolute;
		left: 25%;
		top: 17%
	}

	.sex-check image {
		width: 173rpx;
		height: 173rpx;
	}

	.put_boycar {
		position: absolute;
		top: 55%;
		
	}

	.put_pickcar {
		position: absolute;
		bottom: 30rpx;
		
	}
</style>
