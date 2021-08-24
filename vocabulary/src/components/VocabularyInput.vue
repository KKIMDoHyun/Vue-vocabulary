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
            if(this.newWord.eng !== '' && this.newWord.kor !== ''){
                const res = this.$store.state.wordsList.findIndex(this.isDuplicate)
                if(res === -1) {
                    const eng = this.newWord.eng.trim();
                    const kor = this.newWord.kor.trim();
                    this.$store.commit("addOneWord", {eng, kor});
                    this.clearInput();
                } else {
                    alert("이미 값이 있습니다.")
                    this.clearInput();
                }
                
            }
        },
        isDuplicate(ele) {
            if(ele.eng === this.newWord.eng) {
                return true;
            } else {
                return false;
            }
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