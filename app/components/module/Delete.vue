<script setup lang="ts">
import type Modulo from "~~/types/Modulo";

const { module } = defineProps<{ module: Modulo }>();
const emit = defineEmits(["after-delete"]);
const isOpen = defineModel<boolean>();

function onDelete() {
    $fetch(`/api/module/${module.id}`, { method: "DELETE" });
    isOpen.value = false;
    emit("after-delete");
}

const onCancel = () => {
    isOpen.value = false;
};
</script>

<template>
    <BaseQuest v-model="isOpen" @accept="onDelete" @decline="onCancel">
        Tem certeza que deseja excluir o módulo?
    </BaseQuest>
</template>
