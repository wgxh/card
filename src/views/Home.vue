<template>
	<div id="root">
		<modal></modal>
	</div>
</template>

<script>
// 导入响应式API
import { computed } from "vue";
// 导入仓库
import { useStore } from "vuex";
// 导入模态窗口组件
import Modal from "../components/Modal.vue";

export default {
	setup() {
		// 导入仓库
		const store = useStore();
		let isConfiguaring = computed(() => store.state.isConfiguaring);
		// 弹出模态窗口函数
		let openModal = () => {
			store.commit("openModal");
		};

		return { isConfiguaring, openModal };
	},
	// 注册组件
	components: {
		Modal,
	},
};
</script>

<style lang="scss">
#root {
	height: 100vh;
	display: grid;
	place-items: center;
}
</style>
