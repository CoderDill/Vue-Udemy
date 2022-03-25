<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resource')">Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import { ref } from 'vue';
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';


export default {
  setup() {
    let selectedTab = ref('stored-resource');
    return { selectedTab };
  },
  components: { BaseCard, BaseButton, StoredResources, AddResource },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style>
</style>