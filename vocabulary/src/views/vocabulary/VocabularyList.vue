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
/* ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
} */
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
i:hover {
  color:red;
  cursor: pointer;
  font-size: 1.5rem;
  -webkit-animation: shake 0.4s ease-in-out .1s infinite alternate;
}
@-webkit-keyframes shake {
  from{
    -webkit-transform: rotate(10deg);
  }
  to{
    -webkit-transform: rotate(-10deg);
    -webkit-transform-origin: center center;
  }
}
</style>