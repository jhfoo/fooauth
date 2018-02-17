<style>
</style>
<template>
    <v-container fluid>
        <v-layout row>
            <v-flex xs12 sm6 md4 lg3 offset-sm5 offset-md7 offset-lg8>
                <br/>
                <br/> {{translate('LOGIN_WELCOME')}}
                <div id="my-signin2" data-onsuccess="onSignIn"></div>
                <a href="#" @click="signOut">Sign out from Gooogle</a>
                <router-link to="dummy" message="ooi">Dummy</router-link> |
                <router-link to="home" message="ooi">Home</router-link> |
                <span @click="onHome"> Go Home</span>
                <v-snackbar :timeout="snackbar.timeout" :bottom="true" :multi-line="false" v-model="snackbar.isShow">
                    {{ snackbar.text }}
                    <v-btn flat color="pink" @click.native="snackbar.isShow = false">Close</v-btn>
                </v-snackbar>
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
        props: ['message', 'autoroute'],
        data() {
            return {
                auth2: null,
                snackbar: {
                    timeout: 3 * 1000,
                    text: '',
                    isShow: false
                }
            }
        },
        mounted() {
            console.log('login.mounted');
            var self = this;

            this.setDrawerDisplay(false);
            if (this.message) {
                this.snackbar.text = this.message;
                this.snackbar.isShow = true;
            }

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
        beforeRouteLeave(to, from, next) {
            next();
        },
        computed: {},
        methods: {
            ...mapMutations(['setAccount', 'setLanguage', 'setDrawerDisplay']),
            translate(StringId) {
                return this.$store.state.i18n[this.$store.state.i18n.selected][StringId];
            },
            onHome() {
                this.$router.push({
                    name: 'home',
                    params: {
                        message: 'hi!'
                    }
                });
            },
            onLoginSuccess(googleUser) {
                console.log('login.onLoginSuccess');

                var profile = googleUser.getBasicProfile();
                console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
                console.log('Name: ' + profile.getName());
                console.log('Given Name: ' + profile.getGivenName());
                console.log('Family Name: ' + profile.getFamilyName());

                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

                this.setAccount({
                    UserId: profile.getId()
                });

                console.log('action:' + this.autoroute);
                if (this.autoroute === false) {} else
                    this.$router.push('home');
            },
            onLoginFailure() {
                console.log('login.onLoginFailure');
            },
            signOut() {
                console.log('login.signOut');
                var self = this;
                // var auth2 = gapi.auth2.getAuthInstance();
                this.auth2.signOut().then(function () {
                    console.log('User signed out.');
                    self.setAccount(null);
                });
            }
        }
    }
</script>