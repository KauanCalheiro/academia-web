<template>
    <div class="flex flex-row gap-12 md:gap-8 flex-wrap justify-center pb-14">
        <CardExercicio
            v-for="exercicio in data?.payload"
            :key="((exercicio as unknown) as KeyType) "
            :exercicioTreino="exercicio"
        />
    </div>
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
</script>
