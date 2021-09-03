<template>
  <div>
        <PageHeader></PageHeader>
        <VocabularyInput></VocabularyInput>
        <VocabularyList></VocabularyList>
        <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader.vue';
import VocabularyInput from './VocabularyInput.vue';
import VocabularyList from './VocabularyList.vue';
import PageFooter from '../../components/PageFooter.vue';
export default {
    components: {
        PageHeader,
        VocabularyInput,
        VocabularyList,
        PageFooter
    }
}
</script>

<style>

</style>