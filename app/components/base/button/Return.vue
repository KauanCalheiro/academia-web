<script lang="ts" setup></script>

<template>
    <UButton
        icon="heroicons:chevron-left-16-solid"
        size="md"
        class="rounded-full animate-bounce-x"
        @click="$router.go(-1)"
        color="lime"
        variant="solid"
    />
</template>

<style scoped>
.animate-bounce-x {
    animation: bounce-x 4s normal;

    @keyframes bounce-x {
        0%,
        100% {
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        90% {
            transform: translateX(25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        80% {
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        70% {
            transform: translateX(25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        60% {
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        50% {
            transform: translateX(25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        40% {
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        30% {
            transform: translateX(25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        20% {
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        10% {
            transform: translateX(25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        5% {
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
    }
}
</style>
