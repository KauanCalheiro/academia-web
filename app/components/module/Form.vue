<script setup lang="ts">
import { z } from "zod";
import type Modulo from "~~/types/Modulo";

const { module } = defineProps<{
    module: Modulo | undefined;
}>();

const isEditing = !!module;

const schema = z.object({
    descricao: z
        .string({ required_error: "A descrição é obrigatória" })
        .trim()
        .min(3, "Deve ter pelo menos 3 caracteres"),
    path: z
        .string({ required_error: "O caminho é obrigatório" })
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Deve ser um caminho válido"),
});

const state = reactive<{
    descricao: string | undefined;
    path: string | undefined;
}>({
    descricao: undefined,
    path: undefined,
});

function onCancel() {}
</script>

<template>
    <UForm :schema="schema" :state="state" class="flex flex-col gap-4">
        <BaseTitle :title="isEditing ? 'Editar Módulo' : 'Cadastrar Módulo'" />

        <UFormGroup label="Módulo" name="descricao">
            <UInput
                v-model="state.descricao"
                placeholder="Digite o nome do módulo"
            />
        </UFormGroup>
        <UFormGroup label="Caminho" name="path">
            <UInput
                v-model="state.path"
                placeholder="Digite o caminho do módulo"
            />
        </UFormGroup>

        <div class="flex flex-row gap-4 justify-end">
            <UButton type="button" color="white" @click="onCancel">
                Cancelar
            </UButton>
            <UButton type="submit"> Salvar </UButton>
        </div>
    </UForm>
</template>
