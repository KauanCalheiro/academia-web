<script setup lang="ts">
import mockedDataPlanos from "~~/server/mock/Planos";
import type Plano from "~~/types/Plano";

definePageMeta({
    layout: "clean-layout",
});

const planos: Plano[] = mockedDataPlanos;

const sectionPlans = ref<HTMLElement | null>(null);
const loginTooltip = ref<HTMLElement | null>(null);

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
            <!-- <div class="flex flex-row justify-between"> -->
            <div class="flex items-center justify-start">
                <img
                    class="w-[50vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw] m-4 p-2 filter drop-shadow-[3px_2px_1px_#000]"
                    src="public/logo.png"
                    alt="Logo"
                />
            </div>
            <div
                class="z-50 fixed top-4 right-10 md:top-7 md:right-16 lg:top-14 lg:right-[10rem] flex flex-row items-center"
            >
                <UTooltip
                    text="Fazer login"
                    ref="loginTooltip"
                    :popper="{ placement: 'left', arrow: true, locked: false }"
                >
                    <UButton
                        square
                        class="rounded-full p-4"
                        icon="mingcute:user-4-fill"
                        color="lime"
                        @click="() => useRouter().push('/login')"
                    />
                </UTooltip>
            </div>
            <!-- </div> -->
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

        <section ref="sectionVisitUs">
            <h1
                class="main-font font-bold italic text-lime-400 text-center uppercase drop-shadow-[3px_3px_2px_#000] m-0 pt-8 pb-6 text-[10vw] md:text-[3vw]"
            >
                Venha nos visitar &nbsp;
            </h1>
            <div class="flex flex-row justify-center items-center gap-8">
                <div class="flex flex-col gap-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4150.718698850995!2d-52.193958699999996!3d-29.611879199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c91006903fe6f%3A0x884064f59dcda0ce!2sAcademia%20Zenith!5e1!3m2!1spt-BR!2sbr!4v1726101305948!5m2!1spt-BR!2sbr"
                        width="300"
                        height="300"
                        style="border: 0"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <br />
                </div>
            </div>
        </section>

        <section ref="sectionInstagram">
            <h1
                class="main-font font-bold italic text-lime-400 text-center uppercase drop-shadow-[3px_3px_2px_#000] m-0 pt-8 pb-6 text-[10vw] md:text-[3vw]"
            >
                Instagram
            </h1>
            <div class="flex flex-row justify-center items-center gap-8">
                <div class="flex flex-col gap-4">
                    <iframe
                        src="https://www.instagram.com/zenith.academia/embed"
                        width="300"
                        height="400"
                        style="border: 0"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <br />
                </div>
            </div>
        </section>

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
                        src="public/logo.png"
                        alt="Logo"
                    />
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
