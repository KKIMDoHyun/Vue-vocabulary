<template>
  <div id="app">
    <VocabularyHeader></VocabularyHeader>
    <VocabularyInput></VocabularyInput>
    <VocabularyList></VocabularyList>
    <VocabularyFooter></VocabularyFooter>
  </div>
</template>

<script>
import VocabularyHeader from './components/VocabularyHeader.vue'
import VocabularyInput from './components/VocabularyInput.vue'
import VocabularyList from './components/VocabularyList.vue'
import VocabularyFooter from './components/VocabularyFooter.vue'

export default {
  name: 'App',
  components: {
    VocabularyHeader,
    VocabularyInput,
    VocabularyList,
    VocabularyFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
</style>
