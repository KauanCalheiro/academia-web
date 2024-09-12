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
    <div class="bg-gray-900">
        <section
            class="bg-[url('https://www.academiazenith.com.br/images/7078118458ec29316db719d9225ad107.jpg')] bg-center bg-no-repeat bg-cover h-full md:h-screen flex flex-col justify-between gap-11 md:gap-0"
        >
            <div class="flex items-center justify-start">
                <img
                    class="w-[50vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw] m-4 p-2 filter drop-shadow-[3px_2px_1px_#000]"
                    src="~~/public/logo.png"
                    alt="Logo"
                />
            </div>
            <div>
                <h1
                    class="main-font font-bold italic text-white text-center drop-shadow-[3px_3px_2px_#000] uppercase text-[20vw] m-0 p-8 xl:pb-24 md:text-[10vw] xl:text-[7vw]"
                >
                    Reach Your <span class="text-lime-500"> Best</span>
                </h1>
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
        <section ref="sectionPlans">
            <h1
                class="main-font font-bold italic text-lime-400 text-center uppercase drop-shadow-[3px_3px_2px_#000] text-[10vw] m-0 p-8 md:text-[3vw]"
            >
                Planos
            </h1>
            <div
                class="flex flex-row flex-wrap justify-center items-center gap-8"
            >
                <template v-for="plano in planos">
                    <CardPlanos :plano="plano" />
                </template>
            </div>
        </section>

        <br />

        <div class="w-[80%] m-auto">
            <UDivider
                :ui="{
                    border: {
                        base: 'flex border-gray-800',
                    },
                }"
            />
        </div>

        <footer class="w-[75%] m-auto">
            <div class="endereco flex flex-col gap-8 py-4">
                <div class="w-full flex justify-center">
                    <img
                        class="w-[150px] filter drop-shadow-[3px_2px_1px_#000]"
                        src="~~/public/logo.png"
                        alt="Logo"
                    />
                </div>

                <div class="flex flex-col gap-6">
                    <a
                        href="https://maps.app.goo.gl/GoMbmYseb97eBnbx5"
                        target="_blank"
                        class="flex flex-row"
                    >
                        <UIcon name="i-logos:google-maps" class="w-8 h-8" />
                        <h1
                            class="main-font font-bold italic text-white text-center px-2 xl:text-[1.2vw]"
                        >
                            Venha nos visitar
                        </h1>
                        <br />
                    </a>
                    <a
                        href="https://www.instagram.com/zenith.academia/"
                        target="_blank"
                        class="flex flex-row"
                    >
                        <UIcon name="i-skill-icons:instagram" class="w-8 h-8" />
                        <h1
                            class="main-font font-bold italic text-white text-center px-2 xl:text-[1.2vw]"
                        >
                            Siga-nos no Instagram
                        </h1>
                    </a>
                    <br />
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.main-font {
    font-family: "Oswald", sans-serif;
}
</style>
