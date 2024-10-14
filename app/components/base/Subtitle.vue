<template>
    <h1 class="text-xl font-normal">{{ subtitle }}</h1>
</template>

<script setup lang="ts">
const { subtitle } = defineProps<{ subtitle: string }>();
</script>
