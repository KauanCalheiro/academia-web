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
        <div
            class="flex flex-col items-center justify-center h-full p-1 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"
        >
            <img
                :src="`https://www.academiazenith.com.br/zntSystem/${exercicioTreino.exercicio.video}`"
                alt="video"
                class="mix-blend-multiply w-[200px] rounded-lg"
            />
        </div>
        <template #footer>
            <div class="flex flex-row w-[100%]">
                <UButton
                    color="lime"
                    class="w-[100%] flex flex-row justify-center"
                >
                    Detalhes
                </UButton>
            </div>
        </template>
    </UCard>
</template>
