<template>
  <v-card
      elevation="13"
      max-width="80%"
      class="mx-auto"
    >
    {{minutes}} {{seconds}}
    <button @click="startTimer">시작</button>
      <v-virtual-scroll
        :bench="benched"
        :items="testList"
        height="400"
        item-height="65"
      >
        <template v-slot:default="{ item, index }">
          <v-list-item :key="index">
            <v-list-item-action>
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
              <v-text-field
                v-model="answer[index]"
                label="정답"
              ></v-text-field>

            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
    </v-card>
</template>

<script>
export default {
    data() {
      return {
        benched: 0,
        answer: [],
        count: 0,
        timer: null,
        totalTime: JSON.parse(localStorage.getItem('test')).timer * 60,
      }
    },
    created() {
      console.log(this.totalTime)
    },
    computed: {
        testList() {
          return JSON.parse(localStorage.getItem('test')).testList
        },
        // totalTime: {
        //   get() {
        //     return JSON.parse(localStorage.getItem('test')).timer * 60
        //   },
        //   set(val) {
        //     return val;
        //   }
        // },
        minutes: function() {
          const minutes = Math.floor(this.totalTime / 60);
          return this.padTime(minutes);
        },
        seconds: function() {
          const seconds = this.totalTime - (this.minutes * 60);
          return this.padTime(seconds);
        }
    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => this.countdown(), 1000);
      },
      padTime(time) {
        return (time < 10 ? '0' : '') + time;
      },
      countdown() {
        if(this.totalTime >= 1) {
          this.totalTime--;
        } else {
          this.totalTime = 0;
        }
      }
    }
    
}
</script>
