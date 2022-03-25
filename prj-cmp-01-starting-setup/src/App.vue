<template>
  <TheHeader title="Stored Resources" />
  <StoredResources :resources="storedResources" />
</template>

<script>
import StoredResources from './components/learning-resouces/StoredResources.vue';
import { ref } from 'vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  name: 'App',
  setup() {
    const storedResources = ref([
      {
        id: 'official-guide',
        title: 'Official Guide',
        description: 'The official guide of Vue.js documentation.',
        link: 'https://vuejs.org',
      },
      {
        id: 'google',
        title: 'Google',
        description: 'Learn to google...',
        link: 'https://google.com',
      },
    ]);
    return { storedResources };
  },
  components: {
    StoredResources,
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>