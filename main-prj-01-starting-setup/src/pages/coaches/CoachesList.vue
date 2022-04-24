<script setup>
import { storeToRefs } from 'pinia';
import { useCoachStore } from '../../stores/CoachStore';

const store = useCoachStore()
const { coaches } = storeToRefs(store)
</script>

<template>
    <section>
        Filter
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as a Coach</router-link>
        </div>
        <ul v-for="coach in coaches" :key="coach">
            <li>{{ coach }}</li>
        </ul>
    </section>
</template>
