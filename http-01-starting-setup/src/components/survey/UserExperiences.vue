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
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

const results = ref([]);

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  methods: {
    async getSurveys() {
      const response = await axios.get(
        'https://vueprac-72cb5-default-rtdb.firebaseio.com/survey.json'
      );
      if (response.ok) {
        return response.json;
      }
      console.log(response.data, results.value);
      for (const result in response.data) {
      results.value.push({name: result.name, rating: result.rating})
      }
      console.log(results.value)
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>