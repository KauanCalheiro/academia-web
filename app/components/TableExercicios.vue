<script setup lang="ts">
import { computed, ref } from "vue";

const { refExercicio } = defineProps<{
    refExercicio: string;
}>();
const exercicios = [
    {
        series: 3,
        repeticoes: 10,
        carga: 50,
    },
    {
        series: 4,
        repeticoes: 12,
        carga: 70,
    },
    {
        series: 3,
        repeticoes: 15,
        carga: 15,
    },
    {
        series: 3,
        repeticoes: 8,
        carga: 60,
    },
    {
        series: 4,
        repeticoes: 10,
        carga: 40,
    },
    {
        series: 3,
        repeticoes: 5,
        carga: 100,
    },
    {
        series: 3,
        repeticoes: 12,
        carga: 0,
    },
    {
        series: 3,
        repeticoes: 15,
        carga: 0,
    },
    {
        series: 4,
        repeticoes: 20,
        carga: 30,
    },
];

const page = ref(1);
const pageCount = 5;

const rows = computed(() => {
    return exercicios.slice(
        (page.value - 1) * pageCount,
        page.value * pageCount
    );
});
</script>

<template>
    <UCard>
        <template #header>
            <div class="flex items-center justify-between">
                <h1 class="px-4 text-2xl font-bold">Histórico de Exercício</h1>
                <UButton
                    color="gray"
                    variant="ghost"
                    icon="i-heroicons-x-mark-20-solid"
                    class="-my-1"
                    @click="$emit('close')"
                />
            </div>
        </template>

        <UTable :rows="rows" class="px-4">
            <template #id-header> ID </template>
            <template #nome-header> Nome do Exercício </template>
            <template #series-header> Séries </template>
            <template #repeticoes-header> Repetições </template>
            <template #carga-header> Carga </template>

            <template #carga-data="{ row }"> {{ row.carga }} Kg </template>
        </UTable>

        <template #footer>
            <div class="flex justify-end">
                <UPagination
                    v-model="page"
                    :page-count="pageCount"
                    :total="exercicios.length"
                />
            </div>
        </template>
    </UCard>
</template>
