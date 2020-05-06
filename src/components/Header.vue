<template>
<div class="border-b-4 border-blue-500">
    <nav class="bg-gray-900">
        <div class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <a href="/" class="text-white text-xl font-bold md:text-2xl inline-flex items-center">
                    <svg class="w-10 h-10 mr-1" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M132.843 179.487L135.617 172.553C136.312 170.571 138.433 169.476 140.451 170.057L177.142 181.072L216.408 116.962L116.598 88.434L132.843 179.487ZM218.547 109.077V71L183.402 97.349L218.547 109.077ZM253.574 93.6245L226.472 71.4358V91.2472L253.574 93.6245ZM217.477 130.434L187.721 179.17L214.585 171.008L217.477 130.434ZM171.594 187.887L141.64 178.892C132.804 200.962 138.985 185.906 111.566 250.728L171.594 187.887ZM108.396 87.6019L45.6736 100.796L120.957 157.179L108.396 87.6019ZM97.7774 149.809L64.6133 124.926L45.634 139.587L97.7774 149.809Z" fill="#4299E1"/>
                        <path d="M132.843 179.487L135.617 172.553C136.312 170.571 138.433 169.476 140.451 170.057L177.142 181.072L216.408 116.962L116.598 88.434L132.843 179.487ZM218.547 109.077V71L183.402 97.349L218.547 109.077ZM253.574 93.6245L226.472 71.4358V91.2472L253.574 93.6245ZM217.477 130.434L187.721 179.17L214.585 171.008L217.477 130.434ZM171.594 187.887L141.64 178.892C132.804 200.962 138.985 185.906 111.566 250.728L171.594 187.887ZM108.396 87.6019L45.6736 100.796L120.957 157.179L108.396 87.6019ZM97.7774 149.809L64.6133 124.926L45.634 139.587L97.7774 149.809Z" fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="149.604" y1="71" x2="149.604" y2="250.728" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3182CE"/>
                                <stop offset="1" stop-color="#81E6D9" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    Meraki <span class="text-blue-400">UI</span>
                </a>

                <a class="my-1 text-white text-sm font-normal hover:text-blue-400 md:mx-3 md:my-0" href="https://github.com/merakiui" target="_blank">
                    <svg class="h-6 w-6 inline fill-current" viewBox="0 0 30 30">
                        <path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z"/>
                    </svg>
                </a>
            </div>
        </div>
    </nav>
    <div class="bg-gray-900">
        <div class="container mx-auto px-6">
            <div class="md:flex md:h-96 py-16 md:py-0">
                <div class="flex items-center w-full w-1/2">
                    <div class="max-w-sm text-white">
                        <div class="text-xs font-light">Simple UI Starter</div>
                        <h1 class="font-semibold text-2xl mt-2 text-white md:text-3xl">Meraki <span class="text-blue-400">UI</span> Components</h1>
                        <p class="mt-2 text-gray-300">
                            Beautiful <a href="https://tailwindcss.com" class="text-blue-400 hover:underline font-normal">tailwindcss</a> 
                            components that support RTL languages & fully responsive based on flexbox, built by 
                            <a href="https://twitter.com/khatabwedaa" class="text-blue-400 hover:underline">@khatabwedaa</a> &
                            <a href="https://twitter.com/miaababikir" class="text-blue-400 hover:underline">@miaababikir</a>
                        </p>
                    </div>
                </div>
                <div class="hidden justify-end items-end w-full w-1/2 md:flex">
                    <div class="max-w-md">
                        <img src="../assets/img/undraw_moonlight_5ksn.svg" alt="moon">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>