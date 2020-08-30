import Vue from "vue";
import App from "./App.vue";
import Cloudbase from "@cloudbase/vue-provider";
import config from "../cloudbaserc";
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n';
import Storage from 'vue-ls';

Vue.config.productionTip = false;

var options = {
  namespace: 'vuejs__', // key键前缀
  name: 'ls', // 命名Vue变量.[ls]或this.[$ls],
  storage: 'local', // 存储名称: session, local, memory
};
 
Vue.use(Storage, options);

Vue.use(Cloudbase, {
  env: config.envId,
});

Vue.use(VueI18n)
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: Vue.ls.get("language", "zh-CN"),
  messages: {
    'zh-CN': require('@/components/lang/zh-CN'),
    'en-US': require('@/components/lang/en-US')
  }
});

//将i18n注入到vue实例中
new Vue({
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
