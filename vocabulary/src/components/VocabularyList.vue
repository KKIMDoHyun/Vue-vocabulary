<template>
  <div>
      <ul>
          <li v-for="words in wordsList" v-bind:key="words"></li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            wordsList: '',
        }
    },
    created() {
        if(localStorage.getItem('wordsList').length > 0) {
            for (let i = 0; i < localStorage.getItem('wordsList').length; i++) {
                this.wordsList.push()
            }
        }
    }
}
</script>

<style>

</style>