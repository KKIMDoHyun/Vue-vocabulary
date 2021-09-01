<template>
<v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">시험 설정</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <h4>문제 수 설정</h4>
                <v-slider
                    v-model="quizSlider"
                    class="align-center"
                    :max="max"
                    :min="min"
                    hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="quizSlider"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                      :max="max"
                      :min="min"
                      style="width: 40px;"
                      required
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-col>

              <v-col cols="12">
                <h4>타이머 설정 (분)</h4>
                <v-slider
                    v-model="timerSlider"
                    class="align-center"
                    :max=50
                    :min=1
                    hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="timerSlider"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                      :max=50
                      :min=1
                      style="width: 40px"
                      required
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeModal"
          >
            취소
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="testStart(quizSlider, timerSlider)"
          >
            시작
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      quizSlider: '',
      timerSlider: '',
      max: this.$store.state.wordsList.length,
      min: 0,
      dialog: true,
    }
  },
  computed: {
    modal() {
      return this.showModal;
    },
    showModal() {
      return this.$store.state.testSettingModal;
    }
  },
    methods: {
        testStart(quizSlider, timerSlider) {
            this.closeModal();
            this.$router.push({name: 'test', query:{quizNumber:quizSlider, timer:timerSlider}})
        },
        closeModal() {
          this.dialog = false;
          this.$store.commit('closeTestSettingModal');
        }
    }
}
</script>