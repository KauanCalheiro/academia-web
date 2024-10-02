<script setup lang="ts" generic="T">
import AsyncDataRequestStatus from "~~/enum/AsyncDataRequestStatus";
import type TableColumn from "~~/types/ui/TableColumn";
import type TableSort from "~~/types/ui/TableSort";

const {
    title,
    columns,
    rows,
    useActions = false,
    status,
    error,
} = defineProps<{
    title?: string;
    columns: TableColumn<T>[];
    rows: (any | T)[];
    useActions?: boolean;
    status: string;
    error: string | undefined;
}>();

const emit = defineEmits<{
    "update:sort": [sort: TableSort];
    add: [];
    edit: [row: T];
    delete: [row: T];
}>();

const actions = [
    [
        {
            key: "edit",
            label: "Editar",
            icon: "material-symbols:edit",
            click: (row: T) => emit("edit", row),
        },
        {
            key: "delete",
            label: "Excluir",
            icon: "material-symbols:delete",
            click: (row: T) => emit("delete", row),
        },
    ],
];

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
        class="flex flex-col w-[75%] m-auto gap-4 py-8 px-10 my-8 bg-gray-900 rounded-lg shadow-lg"
    >
        <div class="flex flex-row justify-between">
            <BaseTitle v-if="title" :title="title" />
            <UButton
                @click="emit('add')"
                icon="material-symbols:add"
                size="md"
                color="primary"
                class="flex items-center"
            >
                Adicionar
            </UButton>
        </div>
        <UTable
            @update:sort="onUpdateSort"
            :columns="[
                ...columns,
                ...(useActions ? [{ title: '', key: 'actions' }] : []),
            ]"
            :rows="rows"
            :loading="loading"
            :ui="{}"
        >
            <template v-if="useActions" #actions-data="{ row }">
                <UDropdown
                    :items="
                        actions.map((actionGroup) =>
                            actionGroup.map((action) => ({
                                ...action,
                                click: () => action.click(row),
                            }))
                        )
                    "
                >
                    <UButton
                        icon="material-symbols:more-vert"
                        size="md"
                        color="gray"
                        variant="ghost"
                        class="flex items-center rounded-full"
                    />
                </UDropdown>
            </template>
        </UTable>
    </div>
</template>
