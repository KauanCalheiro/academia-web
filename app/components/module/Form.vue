<script setup lang="ts">
import { z } from "zod";
import type ZenithApiResponse from "~~/types/api/ZenithApiResponse";
import type Modulo from "~~/types/Modulo";

const { module } = defineProps<{
    module: Modulo | undefined;
}>();

const emit = defineEmits<{
    cancel: [];
    afterSave: [module: Modulo];
}>();

const isEditing = !!module;

const schema = z.object({
    id: z.number().optional(),
    descricao: z
        .string({ required_error: "A descrição é obrigatória" })
        .trim()
        .min(3, "Deve ter pelo menos 3 caracteres"),
    path: z
        .string({ required_error: "O caminho é obrigatório" })
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Deve ser um caminho válido"),
});

const state = reactive<{
    id: number | undefined;
    descricao: string | undefined;
    path: string | undefined;
}>({
    id: module?.id,
    descricao: module?.descricao,
    path: module?.path,
});

function onCancel() {
    emit("cancel");
}

function onSubmit() {
    const { id, descricao, path } = schema.parse(state);
    const submitModule = { id, descricao, path };

    const url = isEditing ? `/api/module/${id}` : "/api/module";

    $fetch<ZenithApiResponse<Modulo>>(url, {
        method: isEditing ? "PUT" : "POST",
        body: JSON.stringify(submitModule),
    }).then((response: ZenithApiResponse<Modulo>) => {
        emit("afterSave", response.payload as Modulo);
    });
}
</script>

<template>
    <UForm
        :schema="schema"
        :state="state"
        @submit="onSubmit"
        class="flex flex-col gap-4 px-12 py-8 rounded-lg bg-inherit"
    >
        <BaseTitle :title="isEditing ? 'Editar Módulo' : 'Cadastrar Módulo'" />

        <UInput v-model="state.id" type="hidden" />

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
