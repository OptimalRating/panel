import Vue from "vue";
import plugins from "./plugins";
import App from "./App.vue";
import store from "./store";
// ✅ Import Ant Design Vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// ✅ Use the plugin
Vue.use(Antd);

store.dispatch("auth/check");

new Vue({
  el: "#app",
  i18n: plugins.i18n,
  router: plugins.router,
  store,
  render: (h) => h(App),
});
