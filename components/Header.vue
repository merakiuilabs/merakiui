<template>
    <header class="bg-gray-900 border-b-4 border-blue-500 pattern">
        <nav>
            <div class="container p-4 mx-auto">
                <div class="flex flex-col sm:items-center sm:flex-row sm:justify-between">
                    <div class="flex items-center justify-between sm:justify-start sm:space-x-4 lg:space-x-12">
                        <a href="/" class="inline-flex items-center text-xl font-bold text-white md:text-2xl hover:text-blue-400">
                            <img class="w-10 h-10 mr-1" src="../assets/svg/logo.svg" alt="logo"> <span class="hidden md:inline">Meraki <span class="text-blue-400">UI</span></span>
                        </a>

                        <div class="mt-2 space-x-4 sm:mt-0">
                            <NuxtLink class="font-medium text-gray-200 hover:text-blue-400" to="/">Components</NuxtLink>
                            <NuxtLink class="font-medium text-gray-200 hover:text-blue-400" to="/resources">Resources</NuxtLink>
                        </div>
                    </div>

                    <div class="flex items-center justify-center mt-6 space-x-4 sm:space-x-6 sm:mt-0">
                        <a target="_blank" :href="SHARE_LINK" class="flex items-center space-x-3 font-medium text-white hover:text-blue-400 hover:underline">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z" fill="currentColor"></path>
                            </svg>

                            <span>Share on twitter</span>
                        </a>

                        <dark-mode />

                        <a class="text-white hover:text-blue-400" href="https://github.com/bakateam/merakiui" target="_blink">
                            <svg class="w-5 h-5 fill-current sm:w-6 sm:h-6" viewBox="0 0 30 30">
                                <path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <slot></slot>
    </header>
</template>

<script>
import DarkMode from './utilities/DarkMode.vue';

export default {
  components: { DarkMode },
    data() {
        return {
            SHARE_LINK: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            'Beautiful Tailwind CSS components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant Dark Mode 🔥. \n #tailwindcss #100DaysOfCode \n'
            )}&url=${encodeURIComponent('https://merakiui.com')}`
        }
    },
}
</script>
