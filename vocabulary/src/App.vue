<template>
  <v-app>
    <TopBar></TopBar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from '../src/components/TopBar.vue';
export default {
  name: 'App',
  components: {
    TopBar
  }
};
</script>
