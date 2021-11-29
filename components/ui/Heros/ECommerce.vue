<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <header class="bg-white dark:bg-gray-800">
                <nav class="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div class="flex items-center justify-between">
                        <div>
                            <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>

                        <div class="flex lg:hidden">
                            <button @click="isOpen = !isOpen" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div :class="isOpen ? '' : 'hidden'" class="items-center lg:flex">
                        <div class="flex flex-col lg:flex-row lg:mx-6">
                            <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0" href="#">Home</a>
                            <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0" href="#">Shop</a>
                            <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0" href="#">Contact</a>
                            <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0" href="#">About</a>
                        </div>

                        <div class="flex justify-center lg:block">
                            <a class="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <span class="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span>
                            </a>
                        </div>
                    </div>
                </nav>

                <div class="container px-6 py-16 mx-auto">
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2">
                            <div class="lg:max-w-lg">
                                <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>
                                <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                                <button class="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-indigo-600 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Shop Now</button>
                            </div>
                        </div>
                
                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img class="w-full h-full lg:max-w-2xl" src="~/assets/svg/Catalogue-pana.svg" alt="Catalogue-pana.svg">
                        </div>
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
                name: 'E-commerce',
                isOpen: false,
                code: `
        <header class="bg-white dark:bg-gray-800">
            <nav>
                <div class="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div class="flex items-center justify-between">
                        <div>
                            <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>
                        
                        <!-- Mobile menu button -->
                        <div class="flex lg:hidden">
                            <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div class="items-center lg:flex">
                        <div class="flex flex-col lg:flex-row lg:mx-6">
                            <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0" href="#">Home</a>
                            <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0" href="#">Shop</a>
                            <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0" href="#">Contact</a>
                            <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0" href="#">About</a>
                        </div>

                        <div class="flex justify-center lg:block">
                            <a class="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <span class="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container px-6 py-16 mx-auto">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>
                            <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                            <button class="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-indigo-600 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Shop Now</button>
                        </div>
                    </div>
            
                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full lg:max-w-2xl" src="../../../assets/svg/Catalogue-pana.svg" alt="Catalogue-pana.svg">
                    </div>
                </div>
            </div>
        </header>`,
            }
        }
    }
</script>