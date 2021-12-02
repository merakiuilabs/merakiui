<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <section class="bg-white dark:bg-gray-800">
                <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div class="flex items-center justify-between">
                        <div>
                            <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>
            
                        <!-- Mobile menu button -->
                        <div class="flex lg:hidden">
                            <button @click="isOpen = !isOpen" type="button"
                                class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
            
                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div :class="isOpen ? 'flex' : 'hidden lg:flex'" class="flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">
                        <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-indigo-400 hover:text-indigo-500"
                            href="#">Home</a>
                        <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-indigo-400 hover:text-indigo-500"
                            href="#">Components</a>
                        <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-indigo-400 hover:text-indigo-500"
                            href="#">Pricing</a>
                        <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-indigo-400 hover:text-indigo-500"
                            href="#">Contact</a>
                        <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-indigo-400 hover:text-indigo-500"
                        href="#">FAQ</a>
                    </div>
            
                    <a :class="isOpen ? 'block' : 'hidden lg:block'" class="h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto"
                        href="#">
                        Contact Us
                    </a>
                </nav>
            
                <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                                Easiest way to create your website
                            </h1>
                            
                            <div class="mt-8 space-y-5">
                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Clean and Simple Layout</span>
                                </p>

                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Just Copy Paste Codeing</span>
                                </p>

                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Easy to Use</span>
                                </p>
                            </div>
                        </div>

                        <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-indigo-500 focus-within:ring focus-within:ring-indigo-500 dark:focus-within:border-indigo-500 focus-within:ring-opacity-40">
                            <form class="flex flex-col lg:flex-row">
                                <input type="email" placeholder="Enter your email address" class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" /> 
                                
                                <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">
                                    Join Us
                                </button>
                            </form>
                        </div>
                    </div>
            
                    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo">
                    </div>
                </div>
            </section>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Image With Newsletter',
                isOpen: false,
                code: `
        <section class="bg-white dark:bg-gray-800">
            <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                <div class="flex items-center justify-between">
                    <div>
                        <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                    </div>
        
                    <!-- Mobile menu button -->
                    <div class="flex lg:hidden">
                        <button type="button"
                            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
        
                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">
                    <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-indigo-400 hover:text-indigo-500"
                        href="#">Home</a>
                    <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-indigo-400 hover:text-indigo-500"
                        href="#">Components</a>
                    <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-indigo-400 hover:text-indigo-500"
                        href="#">Pricing</a>
                    <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-indigo-400 hover:text-indigo-500"
                        href="#">Contact</a>
                    <a class="text-gray-700 dark:text-gray-200 lg:px-6 dark:hover:text-indigo-400 hover:text-indigo-500"
                    href="#">FAQ</a>
                </div>
        
                <a class="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto"
                    href="#">
                    Contact Us
                </a>
            </nav>
        
            <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                            Easiest way to create your website
                        </h1>
                        
                        <div class="mt-8 space-y-5">
                            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span class="mx-2">Clean and Simple Layout</span>
                            </p>

                            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span class="mx-2">Just Copy Paste Codeing</span>
                            </p>

                            <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span class="mx-2">Easy to Use</span>
                            </p>
                        </div>
                    </div>

                    <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-indigo-500 focus-within:ring focus-within:ring-indigo-500 dark:focus-within:border-indigo-500 focus-within:ring-opacity-40">
                        <form class="flex flex-col lg:flex-row">
                            <input type="email" placeholder="Enter your email address" class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" /> 
                            
                            <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">
                                Join Us
                            </button>
                        </form>
                    </div>
                </div>
        
                <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo">
                </div>
            </div>
        </section>`,
            }
        }
    }
</script>