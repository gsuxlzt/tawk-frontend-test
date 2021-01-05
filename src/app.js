import Vue from 'vue'
import App from './App.vue'
import { handleRequests } from './utils';
import router from './router';

Vue.prototype.$http = handleRequests;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});