<template>
    <UCard
        :ui="{
            base: 'text-white',
            background: 'bg-gray-900',
            divide: 'divide-gray-700',
            ring: 'ring-gray-700',
            rounded: 'rounded-lg',
            shadow: 'shadow',
            body: {
                base: '',
                background: '',
                padding: 'px-4 py-5 sm:p-6',
            },
            header: {
                base: '',
                background: '',
                padding: 'px-4 py-5 sm:px-6',
            },
            footer: {
                base: '',
                background: '',
                padding: 'px-4 py-4 sm:px-6',
            },
        }"
    >
        <template #header>
            <h2 class="text-xl font-bold text-center">{{ plano.titulo }}</h2>
        </template>

        <main class="flex flex-col gap-4">
            <div class="flex flex-row justify-center text-center items-end">
                <h1 class="text-4xl font-bold text-center">
                    R${{ plano.valor_mensal }}
                </h1>
                <p>&nbsp;/ {{ plano.periodo }}</p>
            </div>
            <div class="px-3" v-html="plano.descricao"></div>
        </main>

        <template #footer>
            <UButton
                class="w-full flex justify-center text-black"
                color="lime"
                :to="`https://www.academiazenith.com.br/zntSystem/index.php?class=VendaCheckoutForm&plano=${plano.id}`"
                target="_blank"
            >
                Inscreva-se
            </UButton>
        </template>
    </UCard>
</template>

<script setup lang="ts">
import type Plano from "~~/types/Plano";

const { plano } = defineProps<{
    plano: Plano;
}>();
</script>
