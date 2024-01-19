// Parsing error: No Babel config file detected for E:\WorkDirectory\WebPage\vue-project\src\App.vue. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.eslint
// 所有的文件开头都出现了此问题，问题在 babel.config.js 中，
// 1. 文件路径正确： 该文件在项目的根目录下
// 2. 依赖项未正确安装： 重新安装依赖 npm install 
// 3. 配置文件检查： 禁用 Babel 配置文件检查，在 package.json 中 eslintConfig 配置下的 parserOptions 属性下，添加 "requireConfigFile": false 以实现禁用配置文件检查功能

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

// 使用插件
app.use(router);
app.use(ElementPlus);

// 挂载到 #app 元素
app.mount('#app');
