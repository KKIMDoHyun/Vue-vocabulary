<template>
  <v-container class="text-center">
      <slot>
        <template v-if="header">
          <h1 class="mb-6">Vocabulary</h1>
        </template>

        <template v-else>
          <h1 class="mb-6">단어 시험</h1>
        </template>
      </slot>
  </v-container>
</template>

<script>
export default {
  computed: {
      header() {
        if(this.$route.name === 'vocabulary') {
          return true;
        } else {
          return false;
        }
      }
  },
  
}
</script>

<style scoped>
h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>