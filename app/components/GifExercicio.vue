<template>
    <div
        class="flex flex-col items-center justify-center h-full p-1 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"
    >
        <img
            :src="`https://www.academiazenith.com.br/zntSystem/${gifPath}`"
            alt="video"
            class="mix-blend-multiply w-[200px] rounded-lg"
        />
    </div>
</template>

<script lang="ts" setup>
const { gifPath } = defineProps<{
    gifPath: string;
}>();
</script>
