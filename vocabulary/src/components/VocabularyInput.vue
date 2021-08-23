<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newWord.eng"> |
      <input type="text" v-model="newWord.kor">
      <span class="addContainer" @click="addWord">
          <i class="fas fa-plus addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newWord:{
                eng: '',
                kor: '',
            }
        }
            
    },
    methods: {
        addWord() {
            console.log(this.newWord.eng, this.newWord.kor)
            localStorage.setItem('wordsList', JSON.stringify(this.newWord));
            this.clearInput();
        },
        clearInput() {
            this.newWord.kor = '';
            this.newWord.eng = '';
        }
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
/* .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
} */
</style>