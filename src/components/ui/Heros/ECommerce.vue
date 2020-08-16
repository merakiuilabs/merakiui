<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <header class="bg-white">
                <nav class="shadow">
                    <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                        <div class="flex justify-between items-center">
                            <div>
                                <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">Brand</a>
                            </div>
                            
                            <div @click="isOpen = !isOpen" class="flex md:hidden">
                                <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div :class="isOpen ? 'block' : 'hidden'" class="md:flex items-center">
                            <div class="flex flex-col md:flex-row md:mx-6">
                                <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Home</a>
                                <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Shop</a>
                                <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Contact</a>
                                <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">About</a>
                            </div>

                            <div class="flex justify-center md:block">
                                <a class="relative text-gray-700 hover:text-gray-600" href="#">
                                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <span class="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="container mx-auto px-6 py-16">
                    <div class="md:flex items-center">
                        <div class="w-full md:w-1/2">
                            <div class="max-w-lg">
                                <h1 class="text-gray-800 text-2xl font-semibold uppercase md:text-3xl">Best Place To Choose Your Clothes</h1>
                                <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                                <button class="mt-6 px-3 py-2 bg-indigo-600 text-white text-xs uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Shop Now</button>
                            </div>
                        </div>
                
                        <div class="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
                            <img class="max-w-2xl w-full h-full" src="../../../assets/svg/Catalogue-pana.svg" alt="">
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
        <header class="bg-white">
            <nav class="shadow">
                <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                    <div class="flex justify-between items-center">
                        <div>
                            <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">Brand</a>
                        </div>

                        <!-- Mobile menu button -->
                        <div class="flex md:hidden">
                            <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div class="md:flex items-center">
                        <div class="flex flex-col md:flex-row md:mx-6">
                            <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Home</a>
                            <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Shop</a>
                            <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Contact</a>
                            <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">About</a>
                        </div>

                        <div class="flex justify-center md:block">
                            <a class="relative text-gray-700 hover:text-gray-600" href="#">
                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <span class="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container mx-auto px-6 py-16">
                <div class="md:flex items-center">
                    <div class="w-full md:w-1/2">
                        <div class="max-w-lg">
                            <h1 class="text-gray-800 text-2xl font-semibold uppercase md:text-3xl">Best Place To Choose Your Clothes</h1>
                            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                            <button class="mt-4 px-3 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Shop Now</button>
                        </div>
                    </div>
            
                    <div class="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
                        <img class="max-w-2xl w-full h-full" src="../../../assets/svg/Catalogue-pana.svg" alt="">
                    </div>
                </div>
            </div>
        </header>`,
            }
        }
    }
</script>