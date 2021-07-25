import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import Ripple from '@/directives/ripple/Ripple';

const app = createApp(App as any);
app.use(router).mount('#app');

import '@/directives/ripple/Ripple.scss';
app.directive('ripple', Ripple);
