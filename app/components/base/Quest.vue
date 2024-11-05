<script setup lang="ts">
const isOpen = defineModel<boolean>();

const emit = defineEmits<{
    accept: [];
    decline: [];
}>();
</script>

<template>
    <UModal v-model="isOpen" :prevent-close="true">
        <div class="flex flex-col gap-8 items-center p-12">
            <slot />
            <div class="flex flex-row gap-16 justify-between">
                <UButton @click="emit('decline')">
                    <slot name="decline">Não</slot>
                </UButton>
                <UButton @click="emit('accept')">
                    <slot name="accept">Sim</slot>
                </UButton>
            </div>
        </div>
    </UModal>
</template>
