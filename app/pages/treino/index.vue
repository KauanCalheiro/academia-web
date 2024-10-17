<script setup lang="ts">
import type ZenithApiResponse from "~~/types/api/ZenithApiResponse";
import type TreinoUsuario from "~~/types/TreinoUsuario";

const user = useAuth().user();
const { data, error, status } = await useLazyFetch<
    ZenithApiResponse<TreinoUsuario>
>(`/api/user/${user.id}/workout`, {
    method: "GET",
});

function onClickCard(group: string, refWorkout: number) {
    console.log(group, refWorkout);
    useRouter().push({
        path: `/treino/${refWorkout}/${group}`,
    });
}
</script>

<template>
    <UContainer class="pb-16">
        <div class="flex flex-col gap-6">
            <BaseTitle :title="`Olá, ${user.nome}`" />
            <BaseSubtitle subtitle="O que vamos treinar hoje?" />

            <div
                class="flex mt-4 gap-8 md:gap-32 flex-row flex-wrap justify-center"
            >
                <UCard
                    v-for="treino in data?.payload.exercicios_treino"
                    :key="((treino as unknown) as PropertyKey)"
                    class="w-[250px] h-[250px] flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out"
                    @click="
                        onClickCard(
                            treino[0]?.grupo as string,
                            data?.payload.id as number
                        )
                    "
                >
                    <BaseTitle :title="(treino[0]?.grupo as string)" />
                </UCard>
            </div>
        </div>
    </UContainer>
</template>
