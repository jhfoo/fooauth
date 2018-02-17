import Vue from 'vue';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import 'axios';
import VueRouter from 'vue-router';
import router from './routes';
import App from './views/app.vue';
// import Drawer from './views/drawer.vue';

Vue.config.productionTip = false;
Vue.use(Vuetify);

// init google
var self = this;
const Config = {
    google: {
        ClientId: '554533026497-rd0ch5t2scdb24urfun080omht7vmrl3.apps.googleusercontent.com'
    },
    vue: {
        prelogin: ['dummy']
    }
};

router.$store = store;
router.beforeEach((to, from, next) => {
    console.log('router.beforeEach');
    console.log(from);
    console.log(to);
    // redirect to login if account unknown
    console.log('prelogin: ' + (Config.vue.prelogin.includes(to.name)));
    if (Config.vue.prelogin.includes(to.name))
        next();
    else {
        if (Object.keys(router.$store.state.account).length === 0 &&
            to.name != 'login') {
            console.log('Redirect');
            router.push({
                name: 'login',
                params: {
                    message: 'Page accessible after login.'
                }
            });
        } else
            next();
    }
});

// router.beforeResolve ((to, from) => {
//     console.log('router.beforeResolve');
// });


Vue.use(VueRouter);
initVue();

function initVue() {
    return new Vue({
        el: '#app',
        components: {
            // Drawer
        },
        store,
        render: h => h(App),
        router: router,
        data: {},
        methods: {},
        mounted() {}
    });
}