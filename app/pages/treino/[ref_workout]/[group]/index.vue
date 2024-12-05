<template>
    <div
        v-auto-animate
        class="flex flex-row gap-12 md:gap-8 flex-wrap justify-center pb-14"
    >
        <CardExercicio
            v-for="exercicio in exerciseArray"
            :key="((exercicio as unknown) as KeyType) "
            :exercicioTreino="exercicio"
            @done="doneExercise"
            @undone="undoneExercise"
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

const { data } = await useLazyFetch<ZenithApiResponse<ExercicioTreino[]>>(
    `/api/workout/${ref_workout}/${group}`,
    {
        method: "GET",
    }
);

const exerciseArray = ref<ExercicioTreino[]>(
    data?.value?.payload as ExercicioTreino[]
);

const doneExercises = ref<number[]>(useAuth().user()?.doneExercises || []);

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

function doneExercise(ref_exercicio: number) {
    if (!doneExercises.value.includes(ref_exercicio)) {
        doneExercises.value.push(ref_exercicio);
        orderArrayOnMount();
    }
}

function undoneExercise(ref_exercicio: number) {
    const index = doneExercises.value.indexOf(ref_exercicio);
    if (index > -1) {
        doneExercises.value.splice(index, 1);
        orderArrayOnMount();
    }
}

function orderArrayOnMount() {
    exerciseArray.value.sort((a, b) => {
        const aDone = doneExercises.value.includes(a.ref_exercicio);
        const bDone = doneExercises.value.includes(b.ref_exercicio);
        if (aDone && !bDone) return 1;
        if (!aDone && bDone) return -1;
        return 0;
    });
}

orderArrayOnMount();

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
