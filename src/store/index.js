import { createStore } from "vuex";

// 创建状态
const state = {
	isConfiguaring: false,
	cards: [],
	randomCards: [],
};
const mutations = {
	closeModal(state) {
		state.isConfiguaring = false;
	},
	openModal(state) {
		state.isConfiguaring = true;
	},
	submit(state, data) {
		for (let i in data) {
			state.cards[i] = data[i];
		}
	},
	random(state) {
		for (let i in state.cards) {
			let randomNumber = Math.floor(Math.random() * state.cards.length);
			state.randomCards[i] = state.cards[randomNumber];
		}
	},
};
let actions = {
	submit(ctx, data) {
		ctx.commit("submit", data);
		ctx.commit("random");
	},
};
// 创建仓库
const store = createStore({
	// 引入状态
	state,
	mutations,
	actions,
});

// 导出状态
export default store;
