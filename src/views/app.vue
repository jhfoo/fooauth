<style>
    html {
        overflow-y: auto
    }
</style>

<template>
    <v-app>
        <Appbar></Appbar>
        <Drawer></Drawer>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import Appbar from './appbar.vue';
    import Drawer from './drawer.vue';

    export default {
        name: 'App',
        components: {
            Appbar, Drawer
        },
        mounted() {
            console.log('app.mounted');
        },
        beforeRouteEnter: (to, from, next) => {
            console.log('app.beforeRouteEnter');
        },
        beforeRouteUpdate(to, from, next) {
            console.log('app.beforeRouteUpdate');
        },
        beforeRouteLeave: (to, from, next) => {
            console.log('app.beforeRouteLeave');
        },
        computed: {},
        data() {
            return {
            }
        }
    }
</script>