import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import router from './routes/router';
import MyAxios from './plugins/myaxios';
Vue.use(MyAxios);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
