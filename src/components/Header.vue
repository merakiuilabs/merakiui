<template>
    <header class="bg-gray-900 border-b-4 border-blue-500">
        <nav>
            <div class="container mx-auto px-6 py-4">
                <div class="flex justify-between items-center">
                    <a href="/" class="text-white text-xl font-bold md:text-2xl inline-flex items-center hover:text-blue-400">
                        <img class="h-10 w-10 mr-1" src="../assets/svg/logo.svg" alt="logo"> Meraki <span class="text-blue-400">UI</span>
                    </a>

                    <div class="flex items-center">
                        <a :href="SHARE_LINK" class="text-white font-medium hover:underline">Share on twitter</a>

                        <a class="ml-4 text-white hover:text-blue-500" href="https://github.com/merakiui/merakiui" target="_blink">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 30 30">
                                <path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div>
            <div class="container mx-auto px-6 py-8 md:py-0">
                <div class="md:flex">
                    <div class="flex items-center w-full md:w-1/2 md:h-112">
                        <div class="max-w-lg text-white">
                            <div class="text-xs font-light">Simple UI Starter</div>

                            <h1 class="font-semibold text-2xl mt-3 text-white md:text-3xl">Meraki <span class="text-blue-400">UI </span> Components</h1>
                            
                            <p class="mt-3 text-gray-300">
                                Beautiful <a href="https://tailwindcss.com" class="text-blue-400 hover:underline font-normal">Tailwindcss</a> 
                                components that support RTL languages & fully responsive based on Flexbox & CSS Grid. Built by 
                                <a href="https://twitter.com/khatabwedaa" class="text-blue-400 hover:underline">@khatabwedaa</a> &
                                <a href="https://twitter.com/miaababikir" class="text-blue-400 hover:underline">@miaababikir</a>
                            </p>

                            <div class="flex flex-wrap items-center mt-4">
                                <a class="flex text-white hover:underline cursor-pointer">
                                    <svg class="h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                                    </svg>

                                    <p class="mx-2 text-sm">{{ components_count }} Components</p>
                                </a>

                                <a class="flex text-white hover:underline ml-2" href="https://github.com/merakiui/merakiui/blob/master/LICENSE">
                                    <svg class="h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clip-rule="evenodd" />
                                    </svg>

                                    <p class="mx-2 text-sm">MIT Licensed</p>
                                </a>
                            </div>

                        </div>
                    </div>
                    
                    <div class="mt-6 w-full md:w-1/2 flex justify-center md:justify-end items-center md:mt-0">
                        <div class="w-full max-w-md">
                            <img src="../assets/svg/Responsive-bro.svg" alt="moon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            components_count: 43,
            SHARE_LINK: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            'Check out Meraki UI Awesome @tailwindcss Components that support RTL and fully responsive by @khatabwedaa and @miaababikir 🔥.'
            )}&url=${encodeURIComponent('https://merakiui.com')}`
        }
    },
}
</script>
