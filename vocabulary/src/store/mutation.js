export default {
    addOneWord(state, payload) {
        const obj = {eng: payload.eng, kor: payload.kor};
        state.wordList.push(obj);
        localStorage.setItem('wordList', JSON.stringify(state.wordList));
    },
    removeOneWord(state, payload) {
        state.wordList.splice(payload.index, 1);
        localStorage.setItem('wordList', JSON.stringify(state.wordList));
    },
    clearAllWords(state){
        state.wordList = []; 
        localStorage.removeItem('wordList');
    },
    openTestSettingModal(state) {
        state.testSettingModal = true;
    },
    closeTestSettingModal(state) {
        state.testSettingModal = false;
    },
    testStart(state, payload) {
        const obj = {testList: payload.testList, quizNumber: payload.quizNumber, timer: payload.timer, testMode: true}
        localStorage.setItem('test', JSON.stringify(obj));
    },
    testFinish(state, payload) {
        state.testMode = false;
        console.log(payload)
        localStorage.setItem('answer', JSON.stringify(payload))
        localStorage.setItem('testMode', state.testMode);
        // localStorage.removeItem('testList');
    }
}