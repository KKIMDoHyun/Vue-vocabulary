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
        state.testSettingModal=false;
        state.answerCount = 0;
        state.answer = [];
        let currentTime = new Date();
        const obj = {testList: JSON.parse(localStorage.getItem('test')).testList,
                    answer: JSON.parse(JSON.stringify(payload)), 
                    timer: JSON.parse(localStorage.getItem('test')).timer,
                    date: currentTime.getFullYear() + '/' + 
                            currentTime.getMonth() + '/' +
                            currentTime.getDate(),
                    time: currentTime.getHours() + ':' +
                            currentTime.getMinutes()}
        state.testResultList.push(obj);
        localStorage.setItem('testResultList', JSON.stringify(state.testResultList));
        localStorage.removeItem('test')
    },
    // clearTest(state) {
    // }
}