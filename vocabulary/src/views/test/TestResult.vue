<template>
  <div>
    <VocabularyHeader></VocabularyHeader>
      <v-card
      elevation="13"
      max-width="80%"
      class="mx-auto"
    >
      <v-virtual-scroll
        :bench= 0
        :items="testList"
        height="400"
        item-height="65"
      >
        <template v-slot:default="{ item, index }">
          <v-list-item :key="index">
            <v-list-item-action>
              <v-btn
                fab
                small
                depressed
                text
                disabled
                color="primary"
              >
                {{ index + 1 }}
              </v-btn>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                <strong v-if="answer[index]" style="color:blue">{{ item.eng }}</strong>
                <strong v-else style="color:red">{{ item.eng }}</strong>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>
                <strong v-if="answer[index]" style="color:blue">{{ item.kor }}</strong>
                <strong v-else style="color:red">{{ item.kor }}</strong>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>
                <strong v-if="answer[index]" style="color:blue">{{ myAnswer[index] }}</strong>
                <strong v-else style="color:red; text-decoration:line-through">{{ myAnswer[index] }}</strong>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <!-- <template v-if="answer[index]"> -->
                <strong v-if="answer[index]" style="color:blue">O</strong>
              <!-- </template> -->
              <!-- <template v-else> -->
                <strong v-else style="color:red">X</strong>
              <!-- </template> -->
            </v-list-item-action>
          </v-list-item>
          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
    </v-card>
    
    <div class="text-center">
      {{correctNumber}} / {{testList.length}}
      <br>
      {{score}}점
    </div> 
  </div>
</template>

<script>
import VocabularyHeader from '../../components/PageHeader.vue';
export default {
  data() {
    return {
      answer: [],
    }
  },
  components: {
    VocabularyHeader
  },
  computed: {
    myAnswer() {
      return JSON.parse(localStorage.getItem('answer'));
    },
    testList() {
      return JSON.parse(localStorage.getItem('test')).testList;
    },
    correctNumber() {
      return this.answer.filter(ele => true === ele).length;
    },
    score() {
      return Math.floor((this.correctNumber / this.testList.length) * 100);
    }
  },
  created() {
    for(let index in this.testList){
      if(this.testList[index].kor === this.myAnswer[index]) {
        this.answer.push(true);
      } else {
        this.answer.push(false)
      }
    }
    console.log(this.answer)
  }
}
</script>