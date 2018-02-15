<template>
    <div>
        Dummy home page<br/>
        Message: {{message}}<br/>
        <router-link to="login" message="From home">Login</router-link>
    </div>
</template>

<script>
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