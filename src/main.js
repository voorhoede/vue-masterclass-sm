import Vue from 'vue';

import App from './App.vue';

import store from './store';

const app = new Vue({
    components: {
        App
    },
    store,
    render(h) {
        return h('App');
    }
});

//uncomment the next line
app.$mount('.app');

Vue.config.devtools = true;