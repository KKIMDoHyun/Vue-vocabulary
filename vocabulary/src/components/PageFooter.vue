<template>
    <div class="text-center mt-8">
        <template v-if="footer">
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
        this.$store.commit('testFinish', this.answer);
        this.$router.replace('/testResult')
    }
  },
  computed: {
      footer() {
        if(this.$route.name === 'vocabulary') {
          return true;
        } else {
          return false;
        }
      }
  },
    
}
</script>
