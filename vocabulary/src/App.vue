<template>
  <div id="app">
    <VocabularyHeader></VocabularyHeader>
    <VocabularyInput></VocabularyInput>
    <VocabularyFooter></VocabularyFooter>
  </div>
</template>

<script>
import VocabularyHeader from './components/VocabularyHeader.vue'
import VocabularyFooter from './components/VocabularyFooter.vue'
import VocabularyInput from './components/VocabularyInput.vue'
export default {
  name: 'App',
  components: {
    VocabularyHeader,
    VocabularyInput,
    VocabularyFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
</style>
