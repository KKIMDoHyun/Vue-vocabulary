<template>
  <v-expansion-panels accordion>
    <v-expansion-panel
      v-for="(test,i) in testResultList"
      :key="i"
    >
      <v-expansion-panel-header>
        <strong>{{i}}</strong>
        <strong>{{test.date}} {{test.time}}</strong>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
      <div>
        <v-card
          elevation="13"
          max-width="80%"
          class="mx-auto"
        >
          <v-virtual-scroll
            :bench= 0
            :items="test.testList"
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
                    <strong v-if="answerAll[i][index]" style="color:blue">{{ item.eng }}</strong>
                    <strong v-else style="color:red">{{ item.eng }}</strong>
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>
                    <strong v-if="answerAll[i][index]" style="color:blue">{{ item.kor }}</strong>
                    <strong v-else style="color:red">{{ item.kor }}</strong>
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>
                    <strong v-if="answerAll[i][index]" style="color:blue">{{ test.answer[index] }}</strong>
                    <strong v-else style="color:red; text-decoration:line-through">{{ test.answer[index] || "빈 칸"}}</strong>
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <!-- <template v-if="answer[index]"> -->
                    <strong v-if="answerAll[i][index]" style="color:blue">O</strong>
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
        
        <!-- <v-container class="text-center">
          {{correctNumber}} / {{testList.length}}
          <br>
          {{score}}점
        </v-container> -->
      </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  data() {
    return {
      answerAll: [],
    }
  },
  computed: {
    testResultList() {
      return JSON.parse(localStorage.getItem('testResultList')).reverse();
    }
    // test() {
    //   return JSON.parse(localStorage.getItem('testResultList')).testList;
    // },
    // answer() {
    //   return JSON.parse(localStorage.getItem('testResultList')).answer;
    // }
  },
  created() {
    for(let i in this.testResultList){
      let answer = [];
      for(let index in this.testResultList[i].testList){
        console.log(index)
        if(this.testResultList[i].testList[index].kor === this.testResultList[i].answer[index]) {
          answer.push(true);
        } else {
          answer.push(false)
        }
      }
      this.answerAll.push(answer)
    }
  },
}
</script>

<style>

</style>