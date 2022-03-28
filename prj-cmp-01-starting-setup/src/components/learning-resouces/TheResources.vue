<template>
  <base-card class="base-card">
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResBtnMode"
      >Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addResBtnMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
      resources: storedResources.value,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  },
  computed: {
    storedResBtnMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResBtnMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  components: { BaseCard, BaseButton, StoredResources, AddResource },
  methods: {
    setSelectedTab(tab) {
      selectedTab.value = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(resId) {
      const resIdx = this.storedResources.findIndex(res => res.id === resId)
      this.storedResources.splice(resIdx, 1)
    }
  },
};
</script>

<style scoped>
.base-card {
  display: flex;
  justify-content: center;
  width: 50%;
}
</style>