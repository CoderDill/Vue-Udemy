<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')"
      >Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab" ></component>
</template>

<script>
import { ref } from 'vue';
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

let selectedTab = ref('stored-resources');
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
export default {
  setup() {
    return { selectedTab, storedResources };
  },
  provide() {
    return {
      resources: storedResources.value
    }
  },
  components: { BaseCard, BaseButton, StoredResources, AddResource },
  methods: {
    setSelectedTab(tab) {
      selectedTab.value = tab;
    },
  },
};
</script>

<style>
</style>