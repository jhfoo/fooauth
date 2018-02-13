import Vue from 'vue';
// import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import 'axios';
// import VueRouter from 'vue-router';
// import router from './routes';
// import App from './views/app.vue';
// import Drawer from './views/drawer.vue';

Vue.config.productionTip = false;
Vue.use(Vuetify);

// init fb
var self = this;
const Config = {
    google: {
        ClientId: '554533026497-rd0ch5t2scdb24urfun080omht7vmrl3.apps.googleusercontent.com'
    }
};

// Vue.use(VueRouter);

function initVue() {
    return new Vue({
        el: '#app',
        components: {
            Drawer
        },
        // store,
        render: h => h(App),
        // router: router,
        data: {
        },
        methods: {
        },
        mounted() {}
    });
}