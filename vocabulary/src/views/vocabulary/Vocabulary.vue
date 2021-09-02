<template>
  <div>
        <VocabularyHeader></VocabularyHeader>
        <VocabularyInput></VocabularyInput>
        <VocabularyList></VocabularyList>
        <Footer></Footer>
  </div>
</template>

<script>
import VocabularyHeader from '../../components/PageHeader.vue';
import VocabularyInput from './VocabularyInput.vue';
import VocabularyList from './VocabularyList.vue';
import Footer from '../../components/PageFooter.vue';
export default {
    components: {
        VocabularyHeader,
        VocabularyInput,
        VocabularyList,
        Footer
    }
}
</script>

<style>

</style>