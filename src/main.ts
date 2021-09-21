import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import mitt from 'mitt';
import Ripple from '@/directives/ripple/Ripple';
import '@/directives/ripple/Ripple.scss';

// app
const app = createApp(App as any);
app.directive('ripple', Ripple);
app.use(router).mount('#app');

// globals
export const emitter = mitt();
