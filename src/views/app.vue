<style>
    html {
        overflow-y: auto
    }
</style>

<template>
    <v-app>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        mounted () {
            console.log('app.mounted');
        },
        beforeRouteEnter: (to, from, next) => {
            console.log('app.beforeRouteEnter');
        },
        beforeRouteUpdate (to, from,next) {
            console.log('app.beforeRouteUpdate');
        },
        beforeRouteLeave: (to, from, next) => {
            console.log('app.beforeRouteLeave');
        },
        components: {
        },
        computed: {
        },
        data() {
            return {
            }
        }
    }
</script>