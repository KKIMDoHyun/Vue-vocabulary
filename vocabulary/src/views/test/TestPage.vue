<template>
  <div>
      <VocabularyHeader></VocabularyHeader>
      <TestList></TestList>
      <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import VocabularyHeader from '../../components/PageHeader.vue';
import TestList from '../test/TestList.vue';
// import Footer from '../../components/PageFooter.vue';
export default {
  components: {
        VocabularyHeader,
        TestList,
        // Footer
    },
}
</script>

<style>

</style>