<script setup>
import {  reactive } from 'vue';
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

const results = reactive([]);

async function getSurveys() {
  try {
    const response = await axios.get(
      'https://vueprac-72cb5-default-rtdb.firebaseio.com/survey.json'
    );
    for (const id in response.data) {
      console.log(response.data[id]);
      results.push({
        id: id,
        name: response.data[id].name,
        rating: response.data[id].rating,
      });
    }
  } catch (e) {
    console.log(e);
  }

  console.log(results.value);
}
</script>

<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getSurveys"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <SurveyResult
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        />
      </ul>
    </base-card>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>