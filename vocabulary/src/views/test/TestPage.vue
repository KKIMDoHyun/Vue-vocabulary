<template>
  <div>
      <VocabularyHeader><h1 class="mb-6">단어 시험</h1></VocabularyHeader>
      <TestList :params="$route.query"></TestList>
      {{$route.query}}
  </div>
</template>

<script>
import VocabularyHeader from '../../components/VocabularyHeader.vue';
import TestList from '../test/TestList.vue';
export default {
  components: {
        VocabularyHeader,
        TestList
    }
}
</script>

<style>

</style>