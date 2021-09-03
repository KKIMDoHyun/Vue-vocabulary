<template>
    <div class="text-center mt-8">
        <template>
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
        
        <!-- <template v-else>
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
        </template> -->
    </div>
</template>

<script>

export default {
  methods: {
    clearWords() {
        this.$store.commit('clearAllWords');
    },
    testFinish() {
        console.log("test Finish")
        this.$store.commit('testFinish');
        this.$router.push('/testResult')
    }
  },
  // computed: {
  //   testMode() {
  //       return localStorage.getItem('testMode');
  //   }
  // }
    
}
</script>
