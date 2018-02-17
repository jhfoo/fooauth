<template>
    <v-navigation-drawer mobile-break-point="800" width="250" fixed clipped class="white" app v-model="$store.state.drawer">
        <v-toolbar dense color="blue">
            <v-toolbar-title>FOOBill</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-menu offset-y>
                    <v-icon slot="activator" style="padding-top:12px">more_vert</v-icon>
                    <v-list dense>
                        <v-subheader>{{ translate('DRAWER_APPS') }}</v-subheader>
                        <v-list-tile v-for="item in ToolbarItems" :key="item.title" @click="">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
        <v-list dense class="">
            <template v-for="item in items">
                <v-divider v-if="item.isDivider"></v-divider>
                <v-subheader inset v-else-if="item.isHeader">{{item.title}}</v-subheader>
                <v-list-group v-else-if="item.isGroup" v-model="item.isExpand" :key="item.title" :prepend-icon="item.icon" no-action>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-tile v-else :key="item.title" @click="">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {
        mapMutations
    } from 'vuex';
    import {
        i18n
    } from '../mixins/i18n';

    export default {
        name: 'Drawer',
        components: {},
        mixins: [i18n],
        data() {
            return {
                ToolbarItems: [
                    {
                        title: 'FOODashboard'
                    },
                    {
                        title: 'FOORoom'
                    }
                ],
                items: [{
                        isGroup: true,
                        title: 'Favourites',
                        icon: 'star',
                        isExpand: true,
                        items: [{
                                title: 'Fancy Report #1',
                                icon: 'star'
                            },
                            {
                                title: 'Fancy Report #2',
                                icon: 'star'
                            }
                        ]
                    },
                    {
                        isDivider: true,
                    },
                    {
                        isHeader: true,
                        title: 'Features',
                        icon: 'star'
                    },
                    {
                        title: 'Dashboard',
                        icon: 'star'
                    },
                    {
                        isGroup: true,
                        title: 'Configure',
                        icon: 'star',
                        isExpand: false,
                        items: [{
                                title: 'Organization',
                                icon: 'star'
                            },
                            {
                                title: 'Users',
                                icon: 'star'
                            }
                        ]
                    },
                    {
                        title: 'Reports',
                        icon: 'star'
                    },
                    {
                        title: 'Analytics',
                        icon: 'star'
                    }
                ]
            }
        },
        mounted() {
            console.log('drawer.mounted');
        },
        computed: {},
        methods: {
            ...mapMutations(['setAccount', 'setLanguage', 'toggleDrawerDisplay'])
        }
    }
</script>