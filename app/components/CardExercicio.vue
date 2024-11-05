<script lang="ts" setup>
import type ExercicioTreino from "~~/types/ExercicioTreino";
const { exercicioTreino } = defineProps<{
    exercicioTreino: ExercicioTreino;
}>();
</script>

<template>
    <UCard
        class="w-[300px] h-[400px] flex flex-col"
        :ui="{
            divide: '',
            header: {
                base: 'h-fit pb-0',
            },
            body: {
                base: 'h-full',
            },
            footer: {
                base: 'h-fit',
            },
        }"
    >
        <template #header>
            <BaseSubtitle>
                {{ exercicioTreino.exercicio.nome.toUpperCase() }}
            </BaseSubtitle>
        </template>
        <GifExercicio :gifPath="exercicioTreino.exercicio.video" />
        <template #footer>
            <div class="flex flex-row w-[100%]">
                <UButton
                    color="lime"
                    class="w-[100%] flex flex-row justify-center"
                    :to="`/treino/${exercicioTreino.ref_treino}/${exercicioTreino.grupo}/${exercicioTreino.ref_exercicio}`"
                >
                    Detalhes
                </UButton>
            </div>
        </template>
    </UCard>
</template>
