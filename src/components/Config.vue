<template>
	<van-form class="form">
		<!-- 配置区域 -->
		<transition-group tag="container" name="van-slide-left">
			<div class="box" v-for="(config, index) in values" :key="index">
				<!-- 名称输入框 -->
				<van-field
					type="text"
					label="名称"
					v-model="config.name"
					colon
					clearable
				/>
				<!-- 数量输入框 -->
				<van-field type="number" label="数量" v-model="config.size" />
				<!-- 删除配置按钮 -->
				<van-button
					type="primary"
					color="red"
					square
					@click="removeConfig(index)"
					class="remove"
					>删除配置</van-button
				>
			</div>
		</transition-group>
		<!-- 添加配置的按钮 -->
		<van-button type="primary" color="#70AE6E" @click="addConfig" class="add"
			>添加配置</van-button
		>
		<!-- 提交按钮 -->
		<van-button type="primary" @click="submit">提交</van-button>
	</van-form>
</template>

<script>
// 导入响应式API
import { ref, computed } from "vue";
// 导入仓库
import { useStore } from "vuex";

export default {
	setup() {
		function flatten(arr) {
			return arr.reduce((flat, toFlatten) => {
				return flat.concat(
					Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
				);
			}, []);
		}
		const store = useStore();
		// 临时变量
		let values = ref([]);

		function addConfig() {
			values.value.push({
				name: "新的奖励",
				size: 1,
			});
		}

		// 提交函数
		function submit() {
			let value = values.value.map((v) => {
				let total = [];
				for (let i = 0; i < Number(v.size); i++) {
					total[i] = v.name;
				}
				return total;
			});
			store.dispatch("submit", value.flat());
			console.log(store.state);
		}
		// 删除配置函数
		function removeConfig(index) {
			values.value.splice(index, 1);
		}

		return {
			values,
			addConfig,
			submit,
			removeConfig,
		};
	},
};
</script>

<style lang="scss">
.form {
	width: 90%;
	max-height: 60vh;
	overflow: auto;
	.box {
		position: relative;
		.remove {
			transform: translate(320%);
		}
	}
}
</style>
