import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "@/plugins/axios";
import "@/access";
import "bytemd/dist/index.css";
// 额外引入图标库
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import "highlight.js/styles/darcula.css";


createApp(App).use(ArcoVue).use(store).use(router).use(ArcoVueIcon).mount("#app");
