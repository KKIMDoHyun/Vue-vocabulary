<template>
  <v-card
      elevation="13"
      max-width="80%"
      class="mx-auto"
    >
      <v-virtual-scroll
        :bench="benched"
        :items="wordsList"
        height="400"
        item-height="65"
      >
        <template v-slot:default="{ item, index }">
          <v-list-item :key="index">
            <v-list-item-action>
              <!-- {{index+1}} -->
              <v-btn
                fab
                small
                depressed
                text
                disabled
                color="primary"
              >
                {{ index + 1 }}
              </v-btn>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                <strong>{{ item.eng }}</strong>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>
                <strong>{{ item.kor }}</strong>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon small @click="removeWord(item, index)">
                {{ icons.mdiDelete }}
              </v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
    </v-card>
</template>

<script>
import { mdiDelete } from '@mdi/js';
export default {
    data() {
      return {
        benched: 0,
        icons: {
          mdiDelete
        }
      }
    },
    methods: {
        removeWord(word, index) {
            this.$store.commit("removeOneWord", {word, index});
        }
    },
    computed: {
        wordsList() {
            return this.$store.state.wordsList;
        },
        testMode() {
            return this.$store.state.testMode;
        },
        answer() {
            return this.$store.state.answer;
        },
        items () {
          return Array.from({ length: this.length }, (k, v) => v + 1)
        },
        length () {
          return this.wordsList.length
        },
    }
}
</script>

<style scoped>

.removeBtn {
    margin-left: auto;
    color: #de4343;
}
</style>