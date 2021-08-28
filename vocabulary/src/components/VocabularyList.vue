<template>
  <div>
      <transition-group name="list" tag="ul">
            <li v-for="(word, index) in wordsList" v-bind:key="index" class="shadow">
                <!-- <i class="checkBtn fas fa-check"></i> -->
                <!-- <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span> -->
                <span class="index">{{ index+1 }}</span>  
                <span class="eng">{{ word.eng }}</span> 
                <span class="kor" v-if="!testMode" v-bind:class="{testMode: word.testMode}">{{ word.kor }}</span>
                <span v-else>
                    <input type="text" placeholder="정답 입력" v-model="answer[index]">
                </span>
                <span class="remove+Btn" v-on:click="removeWord(word, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>

        <button v-if="!testMode" @click="testStart(wordsList)">테스트 시작</button>
        <button v-else @click="testFinish(wordsList)">테스트 종료</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            testMode: false,
            answer: [],
        }
    },
    methods: {
        removeWord(word, index) {
            this.$store.commit("removeOneWord", {word, index});
        },
        testStart(wordsList) {
            this.testMode = true;
            this.$store.commit("testStart", wordsList);
        },
        testFinish(wordsList) {
            this.testMode = false;
            this.$store.commit("testFinish", wordsList);
        }
    },
    computed: {
        wordsList() {
            return this.$store.state.wordsList;
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.index, .eng, .kor {
    margin-left: 1rem;
    width: 30%;
}
.testMode {
    display: none;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
i:hover {
  color:red;
  cursor: pointer;
  font-size: 1.5rem;
  -webkit-animation: shake 0.4s ease-in-out .1s infinite alternate;
}
@-webkit-keyframes shake {
  from{
    -webkit-transform: rotate(10deg);
  }
  to{
    -webkit-transform: rotate(-10deg);
    -webkit-transform-origin: center center;
  }
}
</style>