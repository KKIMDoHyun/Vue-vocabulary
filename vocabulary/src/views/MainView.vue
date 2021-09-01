<template>
  <v-container>
    <v-row class="text-center">
      <!-- 로고 -->
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="mb-5"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-8">
        <h1 class="display-2 font-weight-bold mb-3">
          보카보카
        </h1>
      </v-col>
    </v-row>
    
    <v-row class="text-center">
      <v-col
        cols="12"
      >
        <div class="mb-7">
            <v-btn
              x-large
              elevation="3"
              color="success"
              outlined
              dark
              to="/vocabulary"
            >
              단어장
            </v-btn>
        </div>

        <div class="my-7">
            <v-btn
              x-large
              elevation="3"
              color="error"
              outlined
              dark
              @click="openModal"
            >
              시험 보기
            </v-btn>
        </div>
        
        <TestModal v-if="showModal"></TestModal>
        
        <div class="my-7">
            <v-btn
              x-large
              elevation="3"
              color="warning"
              outlined
              dark
              to="/test"
            >
              결과 확인
            </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TestModal from './test/TestModal.vue';

export default {
  computed: {
    showModal() {
      return this.$store.state.testSettingModal;
    }
  },
  components: {
    TestModal,
  },
  methods: {
    openModal() {
      this.$store.commit('openTestSettingModal');
    }
  }
}
</script>

<style>

</style>