<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
    <UButton
        icon="material-symbols:menu-rounded"
        size="md"
        @click="isOpen = true"
        color="white"
        variant="soft"
    />

    <USlideover v-model="isOpen">
        <UCard
            class="flex flex-col h-full justify-between"
            :ui="{
                header: {
                    base: 'h-fit',
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
                <div class="h-fit flex flex-row justify-between">
                    <BaseButtonLogout />

                    <UButton
                        icon="material-symbols:close-rounded"
                        size="sm"
                        color="gray"
                        variant="ghost"
                        @click="isOpen = false"
                    />
                </div>
            </template>

            <div class="flex flex-col gap-4 h-full">
                <ULink href="/treinos">Treinos</ULink>
            </div>

            <template #footer class="h-fit">
                <div class="h-fit flex justify-center">
                    <BaseZenithLogo />
                </div>
            </template>
        </UCard>
    </USlideover>
</template>
