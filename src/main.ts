import { createApp } from 'vue';
import App from './app/app.vue';
import appStore from './app/app.store';
import appRouter from './app/app.router';

/**
 * 创建应用
 */
const app = createApp(App);

/**
 * 应用store
 */
app.use(appStore);

/**
 * 应用路由
 */
app.use(appRouter);

/**
 * 挂载
 */
app.mount('#app');
