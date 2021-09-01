<template>
  <div>
        <VocabularyHeader><h1 class="mb-6">Vocabulary</h1></VocabularyHeader>
        <VocabularyInput></VocabularyInput>
        <VocabularyList></VocabularyList>
        <VocabularyFooter></VocabularyFooter>
  </div>
</template>

<script>
import VocabularyHeader from '../../components/VocabularyHeader.vue';
import VocabularyInput from './VocabularyInput.vue';
import VocabularyList from './VocabularyList.vue';
import VocabularyFooter from './VocabularyFooter.vue';

export default {
    components: {
        VocabularyHeader,
        VocabularyInput,
        VocabularyList,
        VocabularyFooter
    }
}
</script>

<style>

</style>