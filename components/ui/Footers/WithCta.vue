<template>
     <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <footer class="bg-white dark:bg-gray-800">
                <div class="container px-6 py-8 mx-auto">
                    <div class="text-center">
                        <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>

                        <p class="max-w-lg mx-auto mt-2 text-gray-500 dark:text-gray-300">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                        <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                            <button class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-200 transform border rounded-md sm:mx-2 dark:border-gray-300 dark:text-white dark:hover:bg-gray-700 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z" fill="currentColor"></path>
                                </svg>

                                <span class="mx-1">View Demo</span>
                            </button>

                            <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">Get started</button>
                        </div>
                    </div>

                    <hr class="my-10 dark:border-gray-700" />

                    <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p class="text-sm text-gray-400">© Copyright 2021. All Rights Reserved.</p>

                        <div class="flex mt-3 -mx-2 sm:mt-0">
                            <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                            <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                            <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
     </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'With CTA',
                code: `
        <footer class="bg-white dark:bg-gray-800">
            <div class="container px-6 py-8 mx-auto">
                <div class="text-center">
                <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>

                <p class="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                    <button class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-200 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                    <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z" fill="currentColor"></path>
                    </svg>

                    <span class="mx-1">View Demo</span>
                    </button>

                    <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">Get started</button>
                </div>
                </div>

                <hr class="my-10 dark:border-gray-500" />

                <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                <p class="text-sm text-gray-400">© Copyright 2021. All Rights Reserved.</p>

                <div class="flex mt-3 -mx-2 sm:mt-0">
                    <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                    <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                    <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                </div>
                </div>
            </div>
        </footer>`
            }
        }
    }
</script>