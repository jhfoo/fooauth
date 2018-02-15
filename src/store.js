import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        version: '[AIV]{version}[/AIV]',
        account: {}
    },
    getters: {
    },
    mutations: {
        setAccount(state, NewValue) {
            state.account = NewValue === null ? {} : NewValue;
        }
    }
});