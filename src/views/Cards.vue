<template>
	<div class="container">
		<div class="btn-wraper">
			<van-button
				type="primary"
				v-for="(show, i) in state.shows"
				:key="i"
				text="试试手气!"
				@click="show.isShow = true"
				v-show="!show.isShow"
				class="card-btn"
			></van-button>
		</div>
		<van-overlay
			v-for="(show, i) in state.shows"
			:key="i"
			:show="show.isShow"
			@click="rmItem(i)"
		>
			<div class="card-content">
				{{ show.name }}
			</div>
		</van-overlay>
	</div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";

export default {
	setup() {
		const store = useStore();
		let state = reactive({
			shows: store.state.randomCards.map((v) => {
				return {
					isShow: false,
					name: v,
				};
			}),
		});
		console.log(state);

		// 删除项目函数
		function rmItem(index) {
			state.shows.splice(index, 1);
		}

		return {
			state,
			rmItem,
		};
	},
};
</script>

<style lang="scss">
.container {
	.card-content {
		// 设置铺满整个屏幕
		height: 100%;
		width: 100%;
		// 设置文本居居中对齐
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 30px;
	}
	.btn-wraper {
		display: flex;
		flex-flow: wrap;
		align-items: center;
		justify-content: center;
		width: 40%;
		.card-btn {
			margin: 20px;
		}
	}
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
</style>
