<template>
    <v-form>
        <v-container>
            <v-row class="d-flex justify-center align-center mb-4">
                <v-col
                cols="12"
                sm="4"
                >
                <v-text-field
                    ref="eng"
                    v-model="newWord.eng"
                    label="영단어"
                    :error-messages="engErrorMessages"
                    :rules="[()=> !!newWord.eng && validEng(newWord.eng) || '빈칸입니다!']"
                    type="text"
                    required
                    outlined
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                sm="4"
                >
                <v-text-field
                    ref="kor"
                    v-model="newWord.kor"
                    label="뜻"
                    :error-messages="korErrorMessages"
                    :rules="[()=> !!newWord.kor && validKor(newWord.kor) || '빈칸입니다!']"
                    type="text"
                    required
                    outlined
                ></v-text-field>
                </v-col>
                
                <v-col
                cols="1"
                >
                    <v-btn
                        fab
                        elevation="2"
                        x-large
                        color="primary"
                        @click="addWord"
                    >
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            
            <v-dialog
                v-model="dialog"
                max-width="290"
            >
                <v-card>
                    <v-card-title class="text-h5">
                    이미 있어요!
                    </v-card-title>

                    <v-card-text>
                    입력하신 단어가 사전에 이미 존재합니다.
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >
                        OK
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog
                v-model="completeDialog"
                max-width="290"
            >
                <v-card>
                    <v-card-title class="text-h5">
                    단어 추가 완료!
                    </v-card-title>

                    <v-card-text>
                        
                        <h4>영단어: {{word.eng}}</h4>
                        <h4>뜻: {{word.kor}}</h4>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="completeDialog = false"
                    >
                        OK
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-container>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            newWord:{
                eng: '',
                kor: '',
            },
            word: {
                eng: '',
                kor: '',
            },
            dialog: false,
            completeDialog: false,
            engErrorMessages: '',
            korErrorMessages: '',
        }  
    },
    methods: {
        addWord() {
                const res = this.$store.state.wordsList.findIndex(this.isDuplicate)
                if(res === -1) {
                    if(this.validEng(this.newWord.eng) && this.validKor(this.newWord.kor)) {
                        const eng = this.newWord.eng.trim();
                        const kor = this.newWord.kor.trim();
                        this.word.eng = this.newWord.eng;
                        this.word.kor = this.newWord.kor;
                        this.completeDialog = true;
                        this.$store.commit("addOneWord", {eng, kor});
                    }
                } else {
                    this.dialog = true;
                }
                this.resetWordInput(this.newWord);

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
            this.engErrorMessages = eng && re.test(eng) ? '' : '영단어가 아닙니다!';
            return re.test(eng);
        },
        validKor(kor) {
            let re = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
            this.korErrorMessages = kor && re.test(kor) ? '' : '한글이 아닙니다!';
            return re.test(kor);
        },
        resetWordInput(word){
            Object.keys(word).forEach(w => {
                this.$refs[w].reset();
            })
        }
    }
}
</script>

<style scoped>

</style>