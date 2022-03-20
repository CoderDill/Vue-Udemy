<template>
  <li>
    {{ friend.name }}
  </li>
  <button>Show Details</button>
  <ul>
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
  </ul>
</template>

<script>
export default {
    data() {
        
    }
};
</script>

<style>
</style>