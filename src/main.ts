import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import Ripple from '@/directives/ripple/Ripple';
import '@/directives/ripple/Ripple.scss';

const app = createApp(App as any);
app.directive('ripple', Ripple);
app.use(router).mount('#app');
