import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetchWordsList() {
        const arr = [];
        if(localStorage.length > 0) {
            for (let i = 0; i < JSON.parse(localStorage.length); i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
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
        answerCount: 0,
    },
    mutations: {
        addOneWord(state, payload) {
            const obj = {eng: payload.eng, kor: payload.kor};
            localStorage.setItem(payload.eng, JSON.stringify(obj));
            state.wordsList.push(obj);
        },
        removeOneWord(state, payload) {
            localStorage.removeItem(payload.word.eng);
            state.wordsList.splice(payload.index, 1);
        },
        testStart(state, payload) {
            state.testMode = true;
            if(payload.length > 0) {
                for(let i = 0; i < payload.length; i++) {
                    payload[i].testMode = true;
                    localStorage.setItem(payload[i].eng, JSON.stringify(payload[i]))
                }
            }
        },
        testFinish(state, payload) {
            state.testMode = false;
            state.showModal = true;
            if(payload.length > 0) {
                for(let i = 0; i < payload.length; i++) {
                    payload[i].testMode = false;
                    localStorage.setItem(payload[i].eng, JSON.stringify(payload[i]))
                }
            }
        },
        clearAllWords(state){
            localStorage.clear();
            state.wordsList = [];  
        },
        closeModal(state) {
            state.showModal = false;
        }
    }
})