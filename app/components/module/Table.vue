<script setup lang="ts">
import type ZenithApiResponse from "~~/types/api/ZenithApiResponse";
import type Modulo from "~~/types/Modulo";
import type TableColumn from "~~/types/ui/TableColumn";
import type TableSort from "~~/types/ui/TableSort";

const emit = defineEmits<{
    add: [];
    edit: [row: Modulo];
    delete: [row: Modulo];
}>();

const columns: TableColumn[] = [
    { label: "ID", key: "id", sortable: true },
    { label: "Módulo", key: "descricao", sortable: true },
    { label: "Caminho", key: "path", sortable: true },
];

const sortRequest = ref<TableSort>({
    column: "id",
    direction: "asc",
});

const order = computed(() => {
    return sortRequest.value.column;
});

const direction = computed(() => {
    return sortRequest.value.direction;
});

const { data, status, error, refresh, clear, execute } = useLazyFetch<
    ZenithApiResponse<Modulo>
>("/api/module", {
    params: {
        offset: 0,
        limit: 10,
        order: order,
        direction: direction,
    },
    watch: [order, direction],
});

function onUpdateSort(sort: TableSort) {
    sortRequest.value = sort;
}

function onEdit(row: Modulo) {
    emit("edit", row);
}

function onDelete(row: Modulo) {
    emit("delete", row);
}

defineExpose({
    refresh,
});
</script>

<template>
    <BaseTable
        title="Módulos"
        :columns="columns"
        :rows="(data?.payload as Modulo[]) ?? []"
        :status="status"
        :error="error?.message"
        :use-actions="true"
        @update:sort="onUpdateSort"
        @edit="onEdit"
        @delete="onDelete"
        @add="$emit('add')"
    ></BaseTable>
</template>
