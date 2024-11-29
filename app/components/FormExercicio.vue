<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { reactive, ref } from "vue";
import { z } from "zod";
import ToastService from "~/services/ToastService";
import type ExercicioTreino from "~~/types/ExercicioTreino";

const { exercicio } = defineProps<{
    exercicio: ExercicioTreino;
}>();

const emit = defineEmits(["close"]);
const refPessoa = useAuth().user().id;

const useNotification = new ToastService();
const waitingSubmission = ref(false);

// Definição do esquema de validação com Zod
const schema = z.object({
    ref_exercicio: z.number({
        required_error: "Referência do exercício é obrigatória",
    }),
    ref_pessoa: z.number({
        required_error: "Referência da pessoa é obrigatória",
    }),
    num_series: z
        .number({
            message: "Quantidade de séries deve ser um número",
        })
        .min(1, { message: "Número de séries deve ser no mínimo 1" }),
    num_repeticoes: z
        .number({
            message: "Número de repetições deve ser um número",
        })
        .min(1, { message: "Número de repetições deve ser no mínimo 1" }),
    carga: z
        .number({
            message: "Carga deve ser um número",
        })
        .min(0, { message: "Carga deve ser no mínimo 0" }),
});

type Schema = z.output<typeof schema>;

const state = reactive<Schema>({
    ref_exercicio: Number(exercicio.ref_exercicio),
    ref_pessoa: refPessoa,
    num_series: Number(exercicio.num_series),
    num_repeticoes: Number(exercicio.num_repeticoes),
    carga: Number(exercicio.carga),
    // observacao: "",
});

// Função de envio do formulário
async function onSubmit(event: FormSubmitEvent<Schema>) {
    waitingSubmission.value = true;

    try {
        const response = await $fetch("/api/exercise-history", {
            method: "POST",
            body: JSON.stringify(event.data),
        });
        if (response.success) {
            useNotification.success(
                "Histórico de exercício salvo com sucesso!"
            );
        } else {
            throw new Error("Erro ao salvar histórico de exercício");
        }
    } catch (error) {
        useNotification.error("Erro ao salvar histórico de exercício");
    } finally {
        waitingSubmission.value = false;
        emit("close");
    }
}
</script>

<template>
    <UForm :schema="schema" :state="state" @submit="onSubmit">
        <UCard>
            <template #header>
                <div class="flex items-center justify-between">
                    <h1 class="px-4 text-2xl font-bold">
                        Histórico de Exercício
                    </h1>
                    <UButton
                        color="gray"
                        variant="ghost"
                        icon="i-heroicons-x-mark-20-solid"
                        class="-my-1"
                        @click="$emit('close')"
                    />
                </div>
            </template>

            <div class="flex flex-col gap-4 px-4">
                <UFormGroup
                    label="Ref. Exercício"
                    name="ref_exercicio"
                    :required="true"
                    hidden
                >
                    <UInput v-model="state.ref_exercicio" type="number" />
                </UFormGroup>

                <UFormGroup
                    label="Ref. Pessoa"
                    name="ref_pessoa"
                    :required="true"
                    hidden
                >
                    <UInput v-model="state.ref_pessoa" type="number" />
                </UFormGroup>

                <UFormGroup
                    label="Quantidade de Séries"
                    name="num_series"
                    :required="true"
                >
                    <div class="flex items-center w-full">
                        <UInput
                            min="0"
                            v-model="state.num_series"
                            type="number"
                            class="flex-1 rounded-r-md border-l-0"
                            icon="mdi:numeric"
                        />
                    </div>
                </UFormGroup>

                <UFormGroup
                    label="Número de Repetições"
                    name="num_repeticoes"
                    :required="true"
                >
                    <div class="flex items-center w-full">
                        <UInput
                            min="0"
                            v-model="state.num_repeticoes"
                            type="number"
                            class="flex-1 rounded-r-md border-l-0"
                            icon="mdi:repeat"
                        />
                    </div>
                </UFormGroup>

                <UFormGroup label="Carga (kg)" name="carga" :required="true">
                    <div class="flex items-center w-full">
                        <UInput
                            min="0"
                            v-model="state.carga"
                            type="number"
                            class="flex-1 rounded-r-md border-l-0"
                            icon="game-icons:weight"
                        />
                    </div>
                </UFormGroup>
                <!--
                <UFormGroup label="Observação" name="observacao">
                    <UTextarea v-model="state.observacao" :rows="5" />
                </UFormGroup> -->
            </div>

            <template #footer>
                <div class="flex justify-between px-4">
                    <div></div>
                    <UButton
                        size="md"
                        color="lime"
                        type="submit"
                        :loading="waitingSubmission"
                    >
                        Salvar
                    </UButton>
                </div>
            </template>
        </UCard>
    </UForm>
</template>
