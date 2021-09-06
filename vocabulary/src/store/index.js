import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
import mutations from './mutation.js';
Vue.use(Vuex);

const storage = {
    fetchWordList() {
        const arr = [];
        if(JSON.parse(localStorage.getItem('wordList'))) {
            return JSON.parse(localStorage.getItem('wordList'));
        }
        return arr;
    },
    fetchTestResultList() {
        const arr = [];
        if(JSON.parse(localStorage.getItem('testResultList'))) {
            return JSON.parse(localStorage.getItem('testResultList'));
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        wordList: storage.fetchWordList(),
        testSettingModal: false,
        testResultList: storage.fetchTestResultList(),
        showModal: false,
        answer: [],
        answerCount: 0,
    },
    mutations
})