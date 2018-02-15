import Router from 'vue-router';

const Home = () => import ( /* webpackChunkName: "views" */ './views/home.vue');

var routes = [
    {
        path:'/',
        name: 'home',
        alias:'/home',
        props: true,
        component: Home
    },
    {
        path:'/login',
        name:'login',
        props: true,
        component: () => import ( /* webpackChunkName: "views" */ './views/login.vue')
    },
    {
        path:'/dummy',
        name:'dummy',
        props: true,
        component: () => import ( /* webpackChunkName: "dummy" */ './views/dummy.vue')
    }

];

export default new Router({
    routes,
    // beforeResolve (to, from) {
    //     console.log('router.beforeResolve');
    // },
    // beforeEach(to, from, next) {
    //     console.log('router.beforeEach');
    //     console.log(from);
    //     console.log(to);
    //     // redirect to login if account unknown
    //     if (!window.account && to.name != 'login') {
    //         console.log('Redirect');
    //         router.push('login');
    //     } else
    //         next();
    // }
});