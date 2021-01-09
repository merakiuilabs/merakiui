<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <header class="bg-white dark:bg-gray-800">
                <nav class="border-b dark:border-gray-700">
                    <div class="container mx-auto px-6 py-4 md:flex md:justify-between md:items-center">
                        <div class="flex justify-between items-center">
                            <div>
                            <a class="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                            </div>
                            
                            <!-- Mobile menu button -->
                            <div @click="isOpen = !isOpen" class="flex md:hidden">
                                <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                        <div :class="isOpen ? '' : 'hidden'" class="md:flex items-center">
                            <div class="flex flex-col space-y-8 mt-4 md:flex-row md:items-center md:mt-0 md:space-y-0 md:space-x-16">
                                <a class="block text-gray-700 dark:text-gray-200 font-medium hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">glasses Search</a>
                                <a class="block text-gray-700 dark:text-gray-200 font-medium hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">How it works!</a>
                                <a class="block text-gray-700 dark:text-gray-200 font-medium hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Why us?</a>
                                <a class="block text-gray-700 dark:text-gray-200 font-medium hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Contact</a>

                                <button class="flex items-center py-2 px-5 text-center capitalize tracking-wide text-sm bg-gray-700 text-white font-medium rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                    Get in touch
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="container mx-auto md:h-128 px-6 py-10 md:py-16 flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
                    <div class="w-full md:w-1/2">
                        <div class="max-w-lg">
                            <h1 class="text-gray-800 dark:text-white text-2xl font-medium md:text-4xl tracking-wide">Find your premium new glasses exported from US</h1>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>
                            <div class="mt-8 grid sm:grid-cols-2 gap-6">
                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>Premium selection</span>
                                </div>

                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>Insurance</span>
                                </div>

                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>All legal documents</span>
                                </div>

                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>From US glasses dealers</span>
                                </div>

                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>Payment Security</span>
                                </div>

                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>Fast shipping (+ Express)</span>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div class="flex items-center justify-center w-full h-72 md:w-1/2">
                        <img class="max-w-2xl w-full h-full rounded object-cover" src="https://images.unsplash.com/photo-1590412732351-8afb84aa0dd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="glasses photo">
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
        <header class="bg-white dark:bg-gray-800">
            <nav class="border-b dark:border-gray-700">
                <div class="container mx-auto px-6 py-4 md:flex md:justify-between md:items-center">
                    <div class="flex justify-between items-center">
                        <div>
                        <a class="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>
                        
                        <!-- Mobile menu button -->
                        <div class="md:hidden">
                            <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div class="md:flex items-center">
                        <div class="flex flex-col space-y-8 mt-4 md:flex-row md:items-center md:mt-0 md:space-y-0 md:space-x-16">
                            <a class="block text-gray-700 dark:text-gray-200 font-medium hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">glasses Search</a>
                            <a class="block text-gray-700 dark:text-gray-200 font-medium hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">How it works!</a>
                            <a class="block text-gray-700 dark:text-gray-200 font-medium hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Why us?</a>
                            <a class="block text-gray-700 dark:text-gray-200 font-medium hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">Contact</a>

                            <button class="flex items-center py-2 px-5 text-center capitalize tracking-wide text-sm bg-gray-700 text-white font-medium rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Get in touch
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container mx-auto md:h-128 px-6 py-10 md:py-16 flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
                <div class="w-full md:w-1/2">
                    <div class="max-w-lg">
                        <h1 class="text-gray-800 dark:text-white text-2xl font-medium md:text-4xl tracking-wide">Find your premium new glasses exported from US</h1>
                        <p class="mt-2 text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>
                        <div class="mt-8 grid sm:grid-cols-2 gap-6">
                            <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span>Premium selection</span>
                            </div>

                            <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span>Insurance</span>
                            </div>

                            <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span>All legal documents</span>
                            </div>

                            <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span>From US glasses dealers</span>
                            </div>

                            <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span>Payment Security</span>
                            </div>

                            <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>

                                <span>Fast shipping (+ Express)</span>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="flex items-center justify-center w-full h-72 md:w-1/2">
                    <img class="max-w-2xl w-full h-full rounded object-cover" src="https://images.unsplash.com/photo-1590412732351-8afb84aa0dd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="glasses photo">
                </div>
            </div>
        </header>`,
            }
        }
    }
</script>