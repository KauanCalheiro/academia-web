<template>
    {{ data }}
</template>

<script setup lang="ts">
// get id and group from route

import { useRoute } from "vue-router";
import type ZenithApiResponse from "~~/types/api/ZenithApiResponse";
import type ExercicioTreino from "~~/types/ExercicioTreino";

const route = useRoute();

const id = route.params.id;
const group = route.params.group;

const { data, error, status } = await useLazyFetch<
    ZenithApiResponse<ExercicioTreino[]>
>(`/api/workout/${id}/${group}`, {
    method: "GET",
});
</script>
