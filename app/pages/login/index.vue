<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { z } from "zod";
import ToastService from "~/services/ToastService";
import { LOGIN } from "~~/constants/api";

useColorMode().preference = "dark";

const toast: ToastService = new ToastService();

const schema = z.object({
    id: z
        .string({ required_error: "O código é obrigatório" })
        .trim()
        .min(1, {
            message: "Código deve ter no mínimo 1 caractere",
        })
        .max(20, {
            message: "Código deve ter no máximo 20 caracteres",
        })
        .regex(/^\d+$/, {
            message: "Código deve ser um númerico",
        }),
    password: z
        .string({ required_error: "Senha é obrigatória" })
        .trim()
        .min(5, {
            message: "Senha deve ter no mínimo 5 caracteres",
        })
        .max(20, {
            message: "Senha deve ter no máximo 20 caracteres",
        }),
});

type Schema = z.output<typeof schema>;

const state = reactive<{
    id: number | undefined;
    password: string | undefined;
}>({
    id: undefined,
    password: undefined,
});

const retorno = ref<string>("");

async function onSubmit(event: FormSubmitEvent<Schema>) {
    useLazyFetch(LOGIN, {
        method: "POST",
        body: JSON.stringify(event.data),
        onResponse: (response) => {
            console.log(response.response._data);
            if (response.response._data.success) {
                toast.success("Login efetuado com sucesso");
            }
        },
        onResponseError: (error) => {
            retorno.value = error.response._data.message;
            toast.error(error.response._data.message);
        },
    });
}
</script>

<template>
    <div class="h-screen flex justify-center items-center">
        <UForm
            :schema="schema"
            :state="state"
            class="space-y-4 w-screen"
            @submit="onSubmit"
        >
            <UCard class="mx-auto w-10/12 md:w-4/12">
                <template #header>
                    <h1 class="text-2xl font-bold">Login</h1>
                </template>

                {{ retorno }}

                <div class="flex flex-col gap-4">
                    <UFormGroup label="Código" name="id" :required="true">
                        <UInput v-model="state.id" />
                    </UFormGroup>

                    <UFormGroup
                        label="Password"
                        name="password"
                        :required="true"
                    >
                        <UInput v-model="state.password" type="password" />
                    </UFormGroup>
                </div>

                <template #footer>
                    <div class="flex justify-between">
                        <UButton size="md" color="white" type="button">
                            Cadastrar
                        </UButton>
                        <UButton size="md" color="lime" type="submit">
                            Entrar
                        </UButton>
                    </div>
                </template>
            </UCard>
        </UForm>
    </div>
</template>
