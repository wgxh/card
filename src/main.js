import { createApp } from "vue";
import App from "./App.vue";
// 导入组件库
import Vant from "vant";
// 导入路由
import Router from "./router/index.js";
// 导入组件样式
import "vant/lib/index.css";
// 导入状态管理仓库
import Store from "./store/index.js";
// 导入字体图标
import "./assets/font-awesome.min.css";

createApp(App)
	// 使用组件库
	.use(Vant)
	// 使用路由
	.use(Router)
	// 使用状态管理仓库
	.use(Store)
	// 挂载
	.mount("#app");
