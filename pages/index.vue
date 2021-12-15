<template>
<div class="relative font-roboto">
    <header-component class="h-screen overflow-hidden">
        <div class="container flex flex-col flex-1 h-full justify-center px-4 py-8 mx-auto lg:py-0">
            <div class="text-white text-center max-w-3xl mx-auto">
                <h1 class="text-2xl font-semibold text-white lg:text-4xl leading-relaxed">Start building your next project with an awesome components build with utilities</h1>

                <p class="mt-6 text-gray-300 lg:text-xl">
                    Beautiful <a href="https://tailwindcss.com" class="font-normal text-blue-400 hover:underline">Tailwind CSS</a>
                    components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant
                    <a href="https://tailwindcss.com/docs/dark-mode" class="font-normal text-blue-400 hover:underline">Dark Mode</a>.
                </p>

                <div class="flex space-x-5 flex-wrap justify-center items-center mt-6">
                    <a href="/components" class="flex text-white hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>

                        <p class="mx-2">{{ components_count }} Components</p>
                    </a>

                    <a class="flex text-white hover:underline" href="https://github.com/merakiui/merakiui/blob/master/LICENSE">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-gray-300 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>

                        <p class="mx-2">MIT Licensed</p>
                    </a>
                </div>
            </div>
        </div>
    </header-component>
</div>
</template>

<script>
import HeaderComponent from "~/components/Header";

export default {
    components: {
        HeaderComponent,
    },

    data() {
        return {
            components_count: 78,
        };
    },
};
</script>
