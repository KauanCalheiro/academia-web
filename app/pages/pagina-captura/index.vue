<script setup lang="ts">
import mockedDataPlanos from "~~/server/mock/Planos";
import type Plano from "~~/types/Plano";

definePageMeta({
    layout: "clean-layout",
});

const planos: Plano[] = mockedDataPlanos;

const sectionPlans = ref<HTMLElement | null>(null);

const scrollToSectionPlans = () => {
    if (sectionPlans.value) {
        sectionPlans.value.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};
</script>

<template>
    <main>
        <section
            class="bg-[url('https://www.academiazenith.com.br/images/7078118458ec29316db719d9225ad107.jpg')] bg-center bg-no-repeat bg-cover h-[90vh] flex flex-col justify-between"
        >
            <div class="flex flex-col justify-start h-[90vh] gap-[5rem]">
                <div class="flex items-center justify-start">
                    <img
                        class="w-[50vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw] m-4 p-2 filter drop-shadow-[3px_2px_1px_#000]"
                        src="~~/public/logo.png"
                        alt="Logo"
                    />
                </div>
                <div>
                    <h1
                        class="main-font font-bold italic text-white text-center drop-shadow-[3px_3px_2px_#000] uppercase text-[20vw] m-0 p-8 md:text-[10vw] xl:text-[6vw] 2xl:text-[5vw]"
                    >
                        Reach Your <span class="text-lime-500"> Best</span>
                    </h1>
                </div>
            </div>
            <div class="flex justify-center">
                <UButton
                    class="animate-bounce m-4 filter rounded-full text-black"
                    icon="heroicons:chevron-down-16-solid"
                    color="lime"
                    @click="scrollToSectionPlans"
                />
            </div>
        </section>
        <!-- cria a sessao de planos -->
        <section ref="sectionPlans" class="bg-gray-900">
            <h1
                class="main-font font-bold italic text-lime-400 text-center uppercase drop-shadow-[3px_3px_2px_#000] text-[10vw] m-0 p-8 md:text-[5vw]"
            >
                Planos
            </h1>
            <div class="flex flex-row flex-wrap justify-center items-center">
                <template v-for="plano in planos">
                    <CatchPageCard
                        :backgroundImageRef="plano.imagePath"
                        class="m-4 p-2 filter drop-shadow-[3px_2px_1px_#000]"
                    >
                        <div class="flex flex-col justify-center items-center">
                            <h2
                                class="main-font font-bold italic text-white text-center drop-shadow-[3px_3px_2px_#000] uppercase text-[10vw] m-0 px-4 md:text-[2vw]"
                            >
                                {{ plano.descricao }}
                            </h2>
                        </div>

                        <div class="flex flex-col justify-center items-center">
                            <h3
                                class="main-font font-bold italic text-white text-center drop-shadow-[3px_3px_2px_#000] text-[5vw] m-0 p-8 md:text-[2vw]"
                            >
                                {{ plano.parcelas }}x de R$
                                <span class="text-lime-400">
                                    {{ plano.valor }}
                                </span>

                                <br />
                                <span v-if="plano.obs" class="text-[2vw]"
                                    >Obs: {{ plano.obs }}</span
                                >
                            </h3>

                            <UButton
                                class="m-4 filter rounded-lg text-black"
                                color="lime"
                                label="Inscrever-se"
                                to="https://www.academiazenith.com.br/zntSystem/index.php?class=VendaCheckoutForm&plano=13"
                                target="_blank"
                            />
                        </div>
                    </CatchPageCard>
                </template>
            </div>
        </section>
    </main>
</template>

<style scoped>
.main-font {
    font-family: "Oswald", sans-serif;
}
</style>
