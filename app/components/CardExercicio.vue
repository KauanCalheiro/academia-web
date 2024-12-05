<script lang="ts" setup>
import type ExercicioTreino from "~~/types/ExercicioTreino";
const { exercicioTreino } = defineProps<{
    exercicioTreino: ExercicioTreino;
}>();

const emit = defineEmits<{
    done: [refExercicio: number];
    undone: [refExercicio: number];
}>();

const doneExercises = ref(useAuth().user()?.doneExercises || []);

const isDone = ref(doneExercises.value.includes(exercicioTreino.ref_exercicio));

function doneExercise() {
    useAuth().addDoneExercise(exercicioTreino.ref_exercicio);
    isDone.value = true;
    emit("done", exercicioTreino.ref_exercicio);
}

function undoneExercise() {
    useAuth().removeDoneExercise(exercicioTreino.ref_exercicio);
    isDone.value = false;
    emit("undone", exercicioTreino.ref_exercicio);
}
</script>

<template>
    <UCard
        class="w-[300px] h-[450px] flex flex-col"
        :class="{
            'opacity-50': isDone,
        }"
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
            <div class="flex flex-col gap-4 w-[100%]">
                <UButton
                    color="lime"
                    class="w-[100%] flex flex-row justify-center"
                    :to="`/treino/${exercicioTreino.ref_treino}/${exercicioTreino.grupo}/${exercicioTreino.ref_exercicio}`"
                >
                    Detalhes
                </UButton>
                <UButton
                    :color="isDone ? 'red' : 'lime'"
                    :variant="'outline'"
                    class="w-[100%] flex flex-row justify-center"
                    @click="isDone ? undoneExercise() : doneExercise()"
                    :icon="
                        isDone
                            ? 'heroicons:x-circle-16-solid'
                            : 'heroicons:check-circle-16-solid'
                    "
                >
                    {{ isDone ? "Marcar como não feito" : "Marcar como feito" }}
                </UButton>
            </div>
        </template>
    </UCard>
</template>
