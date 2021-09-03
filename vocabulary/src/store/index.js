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
    // fetchTestList() {
    //     const arr = [];
    //     if(JSON.parse(localStorage.getItem('test'))) {
    //         return JSON.parse(localStorage.getItem('test').testList);
    //     }
    //     return arr;
    // },
    // fetchTestMode() {
    //     const mode = false;
    //     if(JSON.parse(localStorage.getItem('test'))){
    //         return JSON.parse(localStorage.getItem('test').testMode);
    //     }
    //     return mode;
    // }
}

export const store = new Vuex.Store({
    state: {
        // testList: storage.fetchTestList(),
        wordList: storage.fetchWordList(),
        testSettingModal: false,
        // testMode: storage.fetchTestMode(),
        showModal: false,
        answer: [],
        answerCount: 0,
    },
    mutations
})