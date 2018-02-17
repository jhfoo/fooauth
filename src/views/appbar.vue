<template>
        <v-toolbar color="amber" app absolute clipped-left dense flat>
            <v-toolbar-side-icon @click="toggleDrawerDisplay()"></v-toolbar-side-icon>
            <v-toolbar-title>{{AppTitle}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-menu offset-y>
                    <v-btn flat slot="activator">
                        {{getSelectedLanguage().name}}
                        <v-icon right dark>arrow_drop_down</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="item in getLanguages()" v-bind:key="item.key" @click="setLanguage(item.key)">
                            <v-list-tile-title>{{item.name}}</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="setLanguage('ab_CD')">
                            <v-list-tile-title>{{translate('LOGIN_LOGOUT')}}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
            <v-toolbar-items class="hidden-xs-only">
                <v-menu offset-y>
                    <v-btn flat slot="activator">
                        FOO JH
                        <v-icon right dark>arrow_drop_down</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile @click="this.setLanguage('zh_CN')">
                            <v-icon color="pink">star</v-icon>
                            <v-list-tile-title>{{translate('LOGIN_PROFILE')}}</v-list-tile-title>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile @click="this.setLanguage('zh_CN')">
                            <v-icon color="pink">star</v-icon>
                            <v-list-tile-title>{{translate('LOGIN_LOGOUT')}}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
</template>

<script>
    import {
        mapMutations
    } from 'vuex';
    import {i18n} from '../mixins/i18n';

    export default {
        name: 'Appbar',
        components: {},
        mixins:[i18n],
        data() {
            return {
                isShowDrawer: false,
                AppTitle: 'FOOAuth'
            }
        },
        mounted() {
            console.log('appbar.mounted');
        },
        computed: {},
        methods: {
            ...mapMutations(['setAccount', 'setLanguage', 'toggleDrawerDisplay'])
        }
    }
</script>