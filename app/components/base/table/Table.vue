<script setup lang="ts" generic="T">
import AsyncDataRequestStatus from "~~/enum/AsyncDataRequestStatus";
import type TableAction from "~~/types/ui/TableAction";
import type TableColumn from "~~/types/ui/TableColumn";
import type TableSort from "~~/types/ui/TableSort";

const { title, columns, rows, actions, status, error } = defineProps<{
    title?: string;
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
    <div
        class="flex flex-col w-[75%] m-auto gap-4 py-4 px-8 my-8 bg-gray-900 rounded-lg shadow-lg"
    >
        <BaseTitle v-if="title" :title="title" />
        <UTable
            @update:sort="onUpdateSort"
            :columns="columns"
            :rows="rows"
            :loading="loading"
            :ui="{}"
        ></UTable>
    </div>
</template>
