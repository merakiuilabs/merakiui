<template>
    <header class="flex flex-col h-screen overflow-hidden bg-gray-900 pattern">
        <header-component class="pattern"></header-component>

        <div class="container flex items-center flex-1 px-6 py-8 mx-auto lg:py-0">
            <div class="max-w-3xl mx-auto text-center text-white">
                <h1 class="text-2xl font-semibold leading-relaxed text-white lg:text-4xl">Start building your next project with an awesome components build with utilities</h1>

                <p class="mt-4 text-gray-300 lg:mt-6 lg:text-xl">
                    Beautiful <a target="_blank" href="https://tailwindcss.com" class="font-normal underline decoration-blue-500">Tailwind CSS</a>
                    components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant
                    <a target="_blank" href="https://tailwindcss.com/docs/dark-mode" class="font-normal underline decoration-blue-500">Dark Mode</a>.
                </p>

                <div class="flex flex-wrap items-center justify-center mt-6 space-x-5">
                    <a href="/components" class="flex text-white hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>

                        <p class="mx-2">{{ components_count }} Components</p>
                    </a>

                    <a class="flex text-white hover:underline" target="_blank" href="https://github.com/merakiui/merakiui/blob/master/LICENSE">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>

                        <p class="mx-2">MIT Licensed</p>
                    </a>
                </div>

                <div class="grid grid-cols-1 gap-3 mt-8 text-center sm:flex sm:justify-center sm:gap-0 sm:space-x-4">
                    <a href="/components" class="px-4 py-3 text-sm font-semibold text-gray-900 bg-white capitalize rounded-lg hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-gray-100"> Browse Components</a>
                    <a href="#" class="px-4 py-3 text-sm font-semibold text-gray-300 bg-gray-800 capitalize rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-gray-600">premium Themes</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import HeaderComponent from "../components/Header.vue";

export default {
    components: {
        HeaderComponent
    },
    
    data() {
        return {
            components_count: 97,
        };
    },
};
</script>
