<template>
    <UContainer class="w-full h-screen">
        <BaseHeader />
        <slot></slot>
    </UContainer>
</template>

<script setup></script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
</style>
