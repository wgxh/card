<template>
	<div class="mask">
		<div class="modal">
			<config />
		</div>
		<div class="btns">
			<van-button
				type="primary"
				class="determination"
				@click="closeModal"
				v-if="cards.length != 0"
				to="/cards"
				>确定</van-button
			>
			<van-button type="primary" class="cancel" color="red" @click="closeModal"
				>取消</van-button
			>
		</div>
	</div>
</template>

<script>
import { ref, computed } from "vue";
// 导入仓库
import { useStore } from "vuex";
// 导入配置界面组件
import Config from "./Config.vue";

export default {
	setup() {
		// 使用仓库
		let store = useStore();
		// 获取配置属性
		let isOpen = computed(() => store.state.isConfiguaring);
		// 卡片数据
		let cards = computed(() => store.state.cards);
		// 关闭模态框函数
		function closeModal() {
			store.commit("closeModal");
		}

		return { isOpen, closeModal, cards };
	},
	// 注册组件
	components: {
		Config,
	},
};
</script>

<style lang="scss">
.mask {
	position: absolute;
	z-index: 0;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
	.btns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: 40px;
		grid-column-gap: 20px;
	}
	.modal {
		background: #ffffff;
		display: flex;
		align-items: center;
		width: 50%;
		justify-content: center;
		padding: 20px;
		flex-flow: column;
	}
}
</style>
