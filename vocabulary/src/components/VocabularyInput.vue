<template>
  <div class="inputBox shadow">
      <div class="input">
            <input type="text" placeholder="영단어" v-model="newWord.eng">
            <input type="text" placeholder="뜻" v-model="newWord.kor" v-on:keyup.enter="addWord">
            <button type="submit" class="addContainer" @click="addWord">추가하기</button>

      </div>
        
        
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
                    if(this.validEng(this.newWord.eng) && this.validKor(this.newWord.kor)) {
                        const eng = this.newWord.eng.trim();
                        const kor = this.newWord.kor.trim();
                        this.$store.commit("addOneWord", {eng, kor});
                        this.clearInput();
                    } else {
                        alert("영단어에는 영어를, 뜻에는 한글을 써주세요!")
                    }
                } else {
                    alert("이미 등록된 단어입니다.")
                    this.clearInput();
                } 
            } else {
                alert("빈칸을 채워주세요!")
            }
        },
        isDuplicate(ele) {
            if(ele.eng === this.newWord.eng) {
                return true;
            } else {
                return false;
            }
        },
        validEng(eng) {
            var re = /^[a-zA-Z]*$/;
            return re.test(eng);
        },
        validKor(kor) {
            let re = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
            return re.test(kor);
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
input {
    margin-left: 1rem;
    margin-right: 1rem;
}
button {
    cursor: pointer;
}
.input {
    margin-top: 3rem;
    margin-bottom: 3rem;
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