<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="data.goalVisible">{{ data.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="goalIsVisible">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
  import { reactive} from 'vue'

  // const goal = ref('Learn Vue well enough to not get fired 😂')
  // const goalVisible = ref(false)
  const data = reactive({
    goal: 'Learn Vue well enough to not get fired 😂',
    goalVisible: false
  })

  function goalIsVisible() {
    data.goalVisible = !data.goalVisible;
  }
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>