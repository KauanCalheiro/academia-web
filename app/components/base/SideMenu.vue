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
        <UCard>
            <template #header>
                <div class="flex flex-row justify-end">
                    <UButton
                        icon="material-symbols:close-rounded"
                        size="sm"
                        color="gray"
                        variant="ghost"
                        @click="isOpen = false"
                    />
                </div>
            </template>
        </UCard>
    </USlideover>
</template>
