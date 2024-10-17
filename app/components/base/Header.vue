<script setup lang="ts">
function onClickLogo() {
    useRouter().push({
        path: "/treino",
    });
}
</script>

<template>
    <div class="flex flex-row p-4 w-full justify-between items-center mb-4">
        <BaseZenithLogo @click="onClickLogo" class="hover:cursor-pointer" />
        <BaseSideMenu />
    </div>
</template>
