<template>
    <div class="text-center mt-8">
        <template v-if="!testMode">
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
        </template>
        <template v-else>
          <v-btn
            x-large
            elevation="3"
            color="error"
            outlined
            dark
            @click="testFinish()"
          >
            제출 하기
          </v-btn>
        </template>
    </div>
</template>

<script>

export default {
  props:['answer', 'testStart'],
  methods: {
    clearWords() {
        this.$store.commit('clearAllWords');
    },
    testFinish() {
        console.log("test Finish")
        this.$store.commit('testFinish', this.answer);
        this.$router.replace('/testResult')
    }
  },
  computed: {
    testMode() {
        return JSON.parse(localStorage.getItem('test')).testMode;
    }
  }
    
}
</script>
