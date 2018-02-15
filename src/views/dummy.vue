<template>
    <div>
        Dummy view page<br/>
        Message: {{message}}<br/>
        <router-link to="login">Login</router-link> | <router-link to="home">Home</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Dummy',
        props:['message'],
        mounted () {
            console.log('dummy.mounted');
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