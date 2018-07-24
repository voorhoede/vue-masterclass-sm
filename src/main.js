import Vue from 'vue';

import App from './App.vue';

const app = new Vue({
    components: {
        App
    },
    render(h) {
        return h('App');
    }
});

//uncomment the next line
//app.$mount('.app');

Vue.config.devtools = true;