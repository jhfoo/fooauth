<style>
</style>
<template>
    <v-container fluid>
        <v-layout row>
            <v-flex xs12 sm6 md4 lg3 offset-sm5 offset-md7 offset-lg8>
                <br/>
                <br/>
                <br/>
                <div id="my-signin2" data-onsuccess="onSignIn"></div>
                <a href="#" @click="signOut">Sign out from Gooogle</a>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {
        mapMutations
    } from 'vuex';

    export default {
        name: 'Login',
        components: {},
        mounted() {
            console.log('login.mounted');
            var self = this;
            console.log('Render Google Sign-in');
            gapi.load('auth2', () => {
                self.auth2 = gapi.auth2.init({
                    client_id: '554533026497-rd0ch5t2scdb24urfun080omht7vmrl3.apps.googleusercontent.com'
                });
            });

            gapi.signin2.render('my-signin2', {
                'scope': 'profile email',
                'width': 240,
                'height': 50,
                'longtitle': true,
                'theme': 'dark',
                'onsuccess': this.onLoginSuccess,
                'onfailure': this.onLoginFailure
            });
        },
        data() {
            return {
                auth2: null
            }
        },
        beforeRouteLeave(to, from, next) {
            next();
        },
        computed: {},
        methods: {
            onLoginSuccess(googleUser) {
                console.log('login.onLoginSuccess');

                var profile = googleUser.getBasicProfile();
                console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
                console.log('Name: ' + profile.getName());
                console.log('Given Name: ' + profile.getGivenName());
                console.log('Family Name: ' + profile.getFamilyName());

                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

            },
            onLoginFailure() {
                console.log('login.onLoginFailure');
            },
            signOut() {
                console.log('login.signOut');
                // var auth2 = gapi.auth2.getAuthInstance();
                this.auth2.signOut().then(function () {
                    console.log('User signed out.');
                });
            }
        }
    }
</script>