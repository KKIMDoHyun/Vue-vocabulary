import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js';
Vue.use(Vuex);

const storage = {
    fetchWordsList() {
        const arr = [];
        if(localStorage.length > 0) {
            for (let i = 0; i < JSON.parse(localStorage.length); i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server' &&
                    localStorage.key(i) !== 'testList') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        wordsList: storage.fetchWordsList(),
        testMode: false,
        showModal: false,
        // testList: [],
        answer: [],
        answerCount: 0,
        testSettingModal: false,
    },
    mutations
})