<script setup lang="ts" generic="T">
import AsyncDataRequestStatus from "~~/enum/AsyncDataRequestStatus";
import type TableAction from "~~/types/ui/TableAction";
import type TableColumn from "~~/types/ui/TableColumn";
import type TableSort from "~~/types/ui/TableSort";

const { columns, rows, actions, status, error } = defineProps<{
    columns: TableColumn<T>[];
    rows: (any | T)[];
    actions?: TableAction<T>[];
    status: string;
    error: string | undefined;
}>();

const emit = defineEmits<{
    (e: "update:sort", sort: TableSort): any;
}>();

const loading = computed(
    () =>
        status == AsyncDataRequestStatus.IDLE ||
        status == AsyncDataRequestStatus.PENDING
);

function onUpdateSort(sort: TableSort): any {
    emit("update:sort", sort);
}
</script>

<template>
    <UTable
        @update:sort="onUpdateSort"
        :columns="columns"
        :rows="rows"
        :loading="loading"
    ></UTable>
</template>
