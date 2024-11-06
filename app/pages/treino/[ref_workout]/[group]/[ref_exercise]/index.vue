<template>
    <UCard>
        <div class="flex flex-col gap-4">
            <BaseTitle> {{ data?.payload[0]?.exercicio.nome }} </BaseTitle>

            <UCard>
                <table>
                    <tbody>
                        <tr v-if="data?.payload[0]?.num_series">
                            <td class="px-4 py-2">Series:</td>
                            <td>
                                {{ data?.payload[0]?.num_series }}
                            </td>
                        </tr>
                        <tr v-if="data?.payload[0]?.num_repeticoes">
                            <td class="px-4 py-2">Repetições:</td>
                            <td>
                                {{ data?.payload[0]?.num_repeticoes }}
                            </td>
                        </tr>
                        <tr v-if="data?.payload[0]?.carga">
                            <td class="px-4 py-2">Carga:</td>
                            <td>
                                {{ data?.payload[0]?.carga }}
                            </td>
                        </tr>
                        <tr v-if="data?.payload[0]?.observacao">
                            <td class="px-4 py-2">Instruções:</td>
                            <td>
                                {{ data?.payload[0]?.observacao }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </UCard>

            <GifExercicio
                :gifPath="(data?.payload[0]?.exercicio.video as string)"
            />
        </div>
    </UCard>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type ZenithApiResponse from "~~/types/api/ZenithApiResponse";
import type ExercicioTreino from "~~/types/ExercicioTreino";

const route = useRoute();

const ref_workout = route.params.ref_workout;
const group = route.params.group;
const ref_exercise = route.params.ref_exercise;

const { data, error, status } = await useLazyFetch<
    ZenithApiResponse<ExercicioTreino[]>
>(`/api/workout/${ref_workout}/${group}/${ref_exercise}`, {
    method: "GET",
});
</script>
