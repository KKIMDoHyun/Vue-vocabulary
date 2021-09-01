<template>
    <div class="text-center mt-8">
        <v-btn
            x-large
            elevation="3"
            color="error"
            outlined
            dark
            @click="clearWords"
        >
          전체 삭제
        </v-btn>
    </div>
  <!-- <div class="clearAllContainer"> -->
        <!-- <button v-if="!testMode" @click="testStart(wordsList)">테스트 시작</button> -->
        <!-- <button v-else @click="testFinish(wordsList)">테스트 종료</button> -->
        <!-- <testModal v-if="this.$store.state.showModal" :answer="answer"></testModal> -->
        <!-- <button :disabled="testMode" v-on:click="clearWords">전부 삭제</button>
  </div> -->
</template>

<script>
// import testModal from '../../components/testModal.vue';

export default {
  // components: {
  //       testModal,
  //   },
  methods: {
    clearWords() {
        this.$store.commit('clearAllWords');
    },
    // testStart(wordsList) {
    //     alert("테스트가 시작되었습니다.")
    //     this.$store.commit("testStart", wordsList);
    // },
    // testFinish(wordsList) {
    //     alert("테스트가 종료되었습니다.")
    //     for(let i = 0; i < this.$store.state.wordsList.length; i++) {
    //         if(this.$store.state.wordsList[i].kor === this.answer[i]) {
    //             this.$store.state.answerCount++;
    //         }
    //     }
    //     this.$store.commit("testFinish", wordsList);
    // }
  },
  computed: {
    testMode() {
        return this.$store.state.testMode;
    },
    // wordsList() {
    //     return this.$store.state.wordsList;
    // },
    // answer() {
    //     return this.$store.state.answer;
    // }
  }
    
}
</script>

<style scoped>
.clearAllContainer {
    /* width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto; */
    width: 8.5rem;
    margin: 0 auto;
}

button {
  cursor: pointer;
  margin-bottom: 0.625rem;
}
</style>