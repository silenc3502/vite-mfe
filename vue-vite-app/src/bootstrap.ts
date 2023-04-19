import { createApp } from 'vue';
import App from './App.vue';

const mount = (el) => {
  const app = createApp(App).mount(el);;
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_vue-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };