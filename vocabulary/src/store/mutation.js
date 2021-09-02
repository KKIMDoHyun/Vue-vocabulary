export default {
    addOneWord(state, payload) {
        const obj = {eng: payload.eng, kor: payload.kor};
        localStorage.setItem(payload.eng, JSON.stringify(obj));
        state.wordsList.push(obj);
    },
    removeOneWord(state, payload) {
        localStorage.removeItem(payload.word.eng);
        state.wordsList.splice(payload.index, 1);
    },
    clearAllWords(state){
        localStorage.clear();
        state.wordsList = [];  
    },
    closeModal(state) {
        state.showModal = false;
    },
    openTestSettingModal(state) {
        state.testSettingModal = true;
    },
    closeTestSettingModal(state) {
        state.testSettingModal = false;
    }
}