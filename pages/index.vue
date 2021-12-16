<template>
    <header class="h-screen flex flex-col bg-gray-900 pattern">
        <div class="container p-6 mx-auto">
            <div class="flex items-center justify-between">
                <a href="/" class="inline-flex items-center text-xl font-bold text-white md:text-2xl hover:text-blue-400">
                    <img class="mr-2 w-7 h-7" src="../assets/svg/logo.svg" alt="logo"> <span class="hidden sm:inline">Meraki <span class="text-blue-400">UI</span></span>
                </a>

                <div class="flex items-center justify-center space-x-4 sm:space-x-6">
                    <a target="_blank" :href="SHARE_LINK" class="flex items-center space-x-3 cursor-pointer text-white hover:decoration-blue-500 hover:underline">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z" fill="currentColor"></path>
                        </svg>

                        <span>Share on TWITTER</span>
                    </a>

                    <a class="text-white flex items-center space-x-4 hover:underline hover:decoration-blue-500" href="https://github.com/merakiui/merakiui" target="_blink">
                        <svg class="w-5 h-5 fill-current sm:w-6 sm:h-6" viewBox="0 0 30 30">
                            <path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z"/>
                        </svg>

                        <span class="hidden sm:inline">Code on GITHUB</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="container flex flex-1 items-center px-6 py-8 mx-auto lg:py-0">
            <div class="text-white text-center max-w-3xl mx-auto">
                <h1 class="text-2xl font-semibold text-white lg:text-4xl leading-relaxed">Start building your next project with an awesome components build with utilities</h1>

                <p class="mt-4 lg:mt-6 text-gray-300 lg:text-xl">
                    Beautiful <a href="https://tailwindcss.com" class="font-normal decoration-blue-500 underline">Tailwind CSS</a>
                    components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant
                    <a href="https://tailwindcss.com/docs/dark-mode" class="font-normal decoration-blue-500 underline">Dark Mode</a>.
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

                <div class="text-center grid grid-cols-1 gap-3 sm:flex sm:justify-center mt-8 sm:gap-0 sm:space-x-4">
                    <a href="#" class="text-sm font-semibold bg-white text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-gray-100">Permium Themes</a>
                    <a href="/components" class="text-sm font-semibold bg-gray-800 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-gray-600">Browse Components</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    data() {
        return {
            components_count: 78,
            SHARE_LINK: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            'Beautiful Tailwind CSS components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant Dark Mode 🔥. Built By @khatabwedaa & @miaababikir. \n #tailwindcss #100DaysOfCode \n'
            )}&url=${encodeURIComponent('https://merakiui.com')}`
        };
    },
};
</script>
