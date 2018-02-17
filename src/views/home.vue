<template>
    <div>
        Dummy home page<br/>
        Message: {{message}}<br/>
        <router-link :to="{ name:'login', params:{autoroute:false}}">Login</router-link>
    </div>
</template>

<script>
    // , params:{action:'NO_AUTOROUTE'}}

    export default {
        name: 'Home',
        props:['message'],
        mounted: function () {
            console.log('home.mounted');
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