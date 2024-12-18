<script setup lang="ts">
import { computed, ref } from "vue";
import type ZenithApiResponse from "~~/types/api/ZenithApiResponse";
import type ExercicioHistorico from "~~/types/ExercicioHistorico";
import type ExercicioTreino from "~~/types/ExercicioTreino";

const { exercicio } = defineProps<{
    exercicio: ExercicioTreino;
}>();

const page = ref(1);
const pageCount = 5;

const { data, status, error, refresh, clear, execute } = useLazyFetch<
    ZenithApiResponse<ExercicioHistorico[]>
>("/api/exercise-history", {
    params: {
        offset: computed(() => (page.value - 1) * pageCount),
        limit: computed(() => pageCount),
        ref_exercicio: exercicio.ref_exercicio,
        ref_pessoa: useAuth().user().id,
        method: "loadAll",
        order: "id",
        direction: "desc",
    },
    watch: [page],
});

const columns = [
    { key: "num_series", label: "Séries" },
    { key: "num_repeticoes", label: "Repetições" },
    { key: "carga", label: "Carga" },
];

const rows = computed(() => data?.value?.payload || []);
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

        <UTable :rows="rows" :columns="columns" class="px-4">
            <template #carga-data="{ row }"> {{ row.carga }} Kg </template>
        </UTable>

        <template #footer>
            <div class="flex justify-end">
                <UPagination
                    v-model="page"
                    :page-count="pageCount"
                    :total="data?.count || 0"
                />
            </div>
        </template>
    </UCard>
</template>
