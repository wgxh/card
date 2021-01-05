import { createRouter, createWebHistory } from "vue-router";
// 导入主页组件
import Home from "../views/Home.vue";
// 导入卡片组件
import Cards from "../views/Cards.vue";

// 创建路由
/**
 * @type {import("vue-router").RouteRecordRaw[]}
 */
const routes = [
	// 设置重定向根
	{
		path: "/",
		redirect: "/home",
	},
	// 设置主路由
	{
		path: "/home",
		component: Home,
	},
	{
		path: "/cards",
		component: Cards,
	},
];

// 创建路由器
const router = createRouter({
	history: createWebHistory(),
	routes,
});

// 导出路由器
export default router;
