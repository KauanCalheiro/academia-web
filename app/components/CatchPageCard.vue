<template>
    <section
        :class="`bg-[url('${imgPath}')] bg-center bg-cover bg-no-repeat h-[50dvh] w-[80dvw] md:w-[25dvw]
        flex flex-col justify-between`"
    >
        <slot> </slot>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    backgroundImageRef: string;
}>();

const imgPath = ref<string>(props.backgroundImageRef);

imgPath.value =
    "https://www.academiazenith.com.br/images/7078118458ec29316db719d9225ad107.jpg";
</script>

<style scoped></style>
