<script setup lang="ts">
import ToastService from "~/services/ToastService";

const useNotification = new ToastService();

async function onLogout() {
    const response = await $fetch("/api/logout", {
        method: "POST",
        body: JSON.stringify({ id: useAuth().user()?.id }),
    });

    if (response.success) {
        useNotification.success("Logout efetuado com sucesso");
        useAuth().logout();
        useRouter().push("/login");
    }
}
</script>

<template>
    <UButton
        icon="material-symbols:logout-rounded"
        size="sm"
        color="gray"
        variant="ghost"
        @click="onLogout"
    />
</template>
