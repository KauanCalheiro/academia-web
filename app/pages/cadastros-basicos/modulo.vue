<script setup lang="ts">
import type Modulo from "~~/types/Modulo";

const isFormOpen = ref<boolean>(false);
const isExcludeOpen = ref<boolean>(false);

const refModuleTable = ref();

const moduleToPerformAction = ref<Modulo | undefined>(undefined);

function onAdd() {
    moduleToPerformAction.value = undefined;
    openForm();
}

function onEdit(row: Modulo) {
    moduleToPerformAction.value = row;
    openForm();
}

function onDelete(row: Modulo) {
    moduleToPerformAction.value = row;
    openExclude();
}

function onAfterSave() {
    closeForm();
    refModuleTable.value.refresh();
}

function openForm() {
    isFormOpen.value = true;
}

function closeForm() {
    isFormOpen.value = false;
}

function openExclude() {
    isExcludeOpen.value = true;
}
</script>

<template>
    <ModuleTable
        ref="refModuleTable"
        @add="onAdd"
        @edit="onEdit"
        @delete="onDelete"
    ></ModuleTable>
    <UModal v-model="isFormOpen" :prevent-close="true">
        <ModuleForm
            @after-save="onAfterSave"
            @cancel="isFormOpen = false"
            :module="moduleToPerformAction"
        ></ModuleForm>
    </UModal>

    <ModuleDelete
        v-model="isExcludeOpen"
        :module="(moduleToPerformAction as Modulo)"
        @after-delete="refModuleTable.refresh()"
    />
</template>
