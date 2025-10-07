<script setup lang="ts">
import { computed, ref } from "vue";
import QuizzQuestion from "./QuizzQuestion";

const questionsNumber = 10;
const questions = [...Array(questionsNumber)].map(() => new QuizzQuestion());
const interval = setInterval(onIntervalEnd, 5000);
const inputRef = ref<HTMLInputElement | null>(null);

let score = ref(0);
let answer = ref<number | null>(null);
let questionIndex = ref(0);
let question = ref(questions[0]);

const questionText = computed(() => question.value?.getText());
const isQuizFinished = computed(() => questionIndex.value == questions.length);

function onIntervalEnd() {
  if (isQuizFinished.value) {
    clearInterval(interval);
    return;
  }

  if (question.value && question.value.getIsAnswerCorrect(answer.value))
    score.value++;

  questionIndex.value++;
  question.value = questions[questionIndex.value];

  // clear input & set focus on it
  answer.value = null;
  inputRef.value?.focus();
}
</script>

<template>
  <div v-if="!isQuizFinished">
    <h1>Quizz time !</h1>

    <h2>Question {{ questionIndex + 1 }}</h2>
    <h2>{{ questionText }}</h2>

    <input v-model="answer" name="answer" type="number" ref="inputRef" />

    <br />
    <br />
    <hr />

    <h2>Score : {{ score }}</h2>
  </div>
  <div v-else>
    <h1>Quizz is finished</h1>
    <h2>Your score is {{ score }} / {{ questionsNumber }}</h2>
  </div>
</template>
