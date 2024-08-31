<script setup lang="ts">
definePageMeta({
    layout: "clean-layout",
});
</script>

<template>
    <main>
        <section
            class="bg-[url('https://www.academiazenith.com.br/images/7078118458ec29316db719d9225ad107.jpg')] bg-center bg-no-repeat bg-cover h-[100dvh] flex flex-col justify-between"
        >
            <div
                class="flex gap-[12rem] md:gap-[11rem] flex-col justify-start h-[90vh]"
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
                        class="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] 2xl:text-[6vw] main-font font-bold italic text-white text-center drop-shadow-[3px_3px_2px_#000] uppercase m-0 p-4"
                    >
                        Reach Your <span class="text-lime-400">Best</span>
                    </h1>
                </div>
            </div>
            <div class="flex justify-center">
                <UButton
                    class="animate-bounce m-4 filter rounded-full"
                    icon="heroicons:chevron-down-16-solid"
                />
            </div>
        </section>
    </main>
</template>

<style scoped>
.main-font {
    font-family: "Oswald", sans-serif;
}
</style>
