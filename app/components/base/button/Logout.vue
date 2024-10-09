<script setup lang="ts">
import type FetchContext from "~~/types/api/FetchContext";
import type ZenithApiResponse from "~~/types/api/ZenithApiResponse";
import type Usuario from "~~/types/Usuario";

function onLogout() {
    useLazyFetch("/api/logout", {
        method: "POST",
        body: JSON.stringify({ id: useAuth().user()?.id }),
        onResponse: (response: FetchContext<ZenithApiResponse<Usuario>>) => {
            if (response.response._data.success) {
                useNotification.success("Logout efetuado com sucesso");
                useAuth().logout();
                useRouter().push("/login");
            }
        },
    });
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
