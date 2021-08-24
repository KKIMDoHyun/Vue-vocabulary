<template>
  <div>
      <transition-group name="list" tag="ul">
            <li v-for="(word, index) in wordsList" v-bind:key="index" class="shadow">
                <i class="checkBtn fas fa-check"></i>
                <!-- <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span> -->
                <span>{{ index }}</span> | <span>{{ word.eng }}</span> | <span>{{ word.kor }}</span>
                <span class="removeBtn" v-on:click="removeWord(word, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
              

  </div>
</template>

<script>
export default {
    methods: {
        removeWord(word, index) {
            this.$store.commit("removeOneWord", {word, index});
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
</style>