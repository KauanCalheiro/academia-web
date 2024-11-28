<template>
    <div class="flex flex-row gap-12 md:gap-8 flex-wrap justify-center pb-14">
        <CardExercicio
            v-for="exercicio in data?.payload"
            :key="((exercicio as unknown) as KeyType) "
            :exercicioTreino="exercicio"
        />
    </div>
    <UButton
        v-show="showScrollButton"
        icon="heroicons:chevron-up-16-solid"
        size="md"
        class="rounded-full fixed bottom-8 right-8"
        :class="{ 'animate-bounce': showScrollButton }"
        @click="scrollToTop"
        color="lime"
        variant="solid"
    />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type ZenithApiResponse from "~~/types/api/ZenithApiResponse";
import type ExercicioTreino from "~~/types/ExercicioTreino";

const route = useRoute();

const ref_workout = route.params.ref_workout;
const group = route.params.group;

const { data, error, status } = await useLazyFetch<
    ZenithApiResponse<ExercicioTreino[]>
>(`/api/workout/${ref_workout}/${group}`, {
    method: "GET",
});

data.value?.payload;

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const showScrollButton = ref(false);

function handleScroll() {
    showScrollButton.value = window.scrollY > 200;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
