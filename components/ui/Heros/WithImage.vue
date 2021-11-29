<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <header class="bg-white dark:bg-gray-800">
                <nav class="border-b dark:border-gray-700">
                    <div class="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                        <div class="flex items-center justify-between">
                            <div>
                                <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                            </div>
                            
                            <!-- Mobile menu button -->
                            <div @click="isOpen = !isOpen" class="flex lg:hidden">
                                <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                        <div :class="isOpen ? '' : 'hidden'" class="items-center lg:flex">
                            <div class="flex flex-col mt-4 space-y-8 lg:flex-row lg:items-center lg:mt-0 lg:space-y-0 lg:-px-8">
                                <a class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">glasses Search</a>
                                <a class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">How it works!</a>
                                <a class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Why us?</a>
                                <a class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Contact</a>

                                <button class="flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                    Get in touch
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">Find your premium new glasses exported from US</h1>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>
                            <div class="grid gap-6 mt-8 sm:grid-cols-2">
                                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="mx-3">Premium selection</span>
                                </div>

                                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="mx-3">Insurance</span>
                                </div>

                                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="mx-3">All legal documents</span>
                                </div>

                                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="mx-3">From US glasses dealers</span>
                                </div>

                                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="mx-3">Payment Security</span>
                                </div>

                                <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span class="mx-3">Fast shipping (+ Express)</span>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo">
                    </div>
                </div>
            </header>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'With Image',
                isOpen: false,
                code: `
        <!-- Add this to your tailwind.config.js -->
        module.exports = {
            theme: {
                extend: {
                    spacing: {
                        128: '32rem',
                    },
                },
            },
        }

        <header class="bg-white dark:bg-gray-800">
            <nav class="border-b dark:border-gray-700">
                <div class="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div class="flex items-center justify-between">
                        <div>
                            <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>
                        
                        <!-- Mobile menu button -->
                        <div class="lg:hidden">
                            <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div class="items-center lg:flex">
                        <div class="flex flex-col mt-4 space-y-8 lg:flex-row lg:items-center lg:mt-0 lg:space-y-0 lg:-px-8">
                            <a class="block mx-8 font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">glasses Search</a>
                            <a class="block mx-8 font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">How it works!</a>
                            <a class="block mx-8 font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Why us?</a>
                            <a class="block mx-8 font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Contact</a>

                            <button class="flex items-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Get in touch
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">Find your premium new glasses exported from US</h1>
                        <p class="mt-2 text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>
                        <div class="grid gap-6 mt-8 sm:grid-cols-2">
                            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span class="mx-3">Premium selection</span>
                            </div>

                            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span class="mx-3">Insurance</span>
                            </div>

                            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span class="mx-3">All legal documents</span>
                            </div>

                            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span class="mx-3">From US glasses dealers</span>
                            </div>

                            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span class="mx-3">Payment Security</span>
                            </div>

                            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span class="mx-3">Fast shipping (+ Express)</span>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo">
                </div>
            </div>
        </header>`,
            }
        }
    }
</script>