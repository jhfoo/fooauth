import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        version: '[AIV]{version}[/AIV]',
        account: {},
        drawer:true,
        i18n: {
            default: 'en_US',
            selected: 'en_US',
            zh_CN: {
                NAME: '华语',
                LOGIN_WELCOME: '你好!',
                LOGIN_MANDARIN: '华语',
                LOGIN_ENGLISH: '英语',
                LOGIN_LOGOUT: '退出',
                LOGIN_PROFILE: '详情',
                DRAWER_APPS: '产品',
            },
            en_US: {
                NAME:'English',
                LOGIN_WELCOME: 'Welcome to FOOAuth!',
                LOGIN_MANDARIN: 'Mandarin',
                LOGIN_ENGLISH: 'English',
                LOGIN_LOGOUT: 'Log Out',
                LOGIN_PROFILE:'Profile & Preferences',
                DRAWER_APPS:'APPLICATIONS'
            }
        }
    },
    getters: {},
    mutations: {
        setAccount(state, NewValue) {
            state.account = NewValue === null ? {} : NewValue;
        },
        setLanguage(state, NewLanguage) {
            console.log('state.setLanguage()');
            if (NewLanguage in state.i18n) {
                state.i18n.selected = NewLanguage;
                console.log('i18n.selected = ' + NewLanguage);
            } else {
                console.log('ERROR: language "' + NewLanguage + '" is not supported');
            }
        },
        setDrawerDisplay(state, isShow) {
            state.drawer = isShow;
        },
        toggleDrawerDisplay(state) {
            state.drawer = !state.drawer;
        }
    }
});