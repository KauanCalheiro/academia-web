<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { z } from "zod";
import ToastService from "~/services/ToastService";
import type Usuario from "~~/types/Usuario";

definePageMeta({
    layout: "login",
});

useColorMode().preference = "dark";

const useNotification = new ToastService();
const waitingLogin = ref(false);

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

async function onSubmit(event: FormSubmitEvent<Schema>) {
    waitingLogin.value = true;

    const response = await $fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(event.data),
        onResponseError: (error) => {
            useNotification.error(error.response._data.message);
        },
    });

    waitingLogin.value = false;

    if (response.success) {
        useNotification.success("Login efetuado com sucesso");
        useAuth().login(response.payload as Usuario);
        useRouter().push("/treino");
    }
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

                <div class="flex flex-col gap-4">
                    <UFormGroup label="Código" name="id" :required="true">
                        <UInput v-model="state.id" />
                    </UFormGroup>

                    <UFormGroup label="Senha" name="password" :required="true">
                        <UInput v-model="state.password" type="password" />
                    </UFormGroup>
                </div>

                <template #footer>
                    <div class="flex justify-between">
                        <div></div>
                        <UButton
                            size="md"
                            color="lime"
                            type="submit"
                            :loading="waitingLogin"
                        >
                            Entrar
                        </UButton>
                    </div>
                </template>
            </UCard>
        </UForm>
    </div>
</template>
