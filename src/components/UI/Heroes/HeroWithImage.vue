<template>
    <div :id="name | toId">
        <div class="w-full">
            <nav class="bg-white">
                <div class="container mx-auto px-6 py-2">
                    <div class="md:flex items-center justify-between">
                        <div class="flex justify-between items-center">
                            <div>
                                <a class="text-xl font-bold text-gray-800 hover:text-gray-700 md:text-2xl">Brand</a>
                            </div>
                    
                            <div class="md:hidden">
                                <button type="button" @click="isOpen = !isOpen"
                                    class="block text-gray-700 hover:text-gray-600 focus:text-gray-600 focus:outline-none">
                                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                        <path
                                            d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                                            class="hidden"></path>
                                        <path
                                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    
                        <div :class="!isOpen ? 'hidden' : ''" class="flex flex-col -mx-2 mt-2 md:mt-0 md:flex-row md:block">
                            <a class="py-2 px-2 text-sm text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Home</a>
                            <a class="py-2 px-2 text-sm text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">About</a>
                            <a class="py-2 px-2 text-sm text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="bg-white relative">
                <div class="container mx-auto px-6">
                    <div class="flex h-64 md:h-96">
                        <div class="flex items-center lg:w-1/2">
                            <div class="absolute left-0 mx-6 max-w-md">
                                <h2 class="text-2xl font-semibold text-gray-800 md:text-3xl">
                                    Build Your New <span class="text-indigo-600">Idea</span>
                                </h2>
                    
                                <p class="mt-2 text-sm text-gray-500 md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
                                </p>
                    
                                <div class="flex mt-6">
                                    <a class="px-3 py-2 block bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800">
                                        Get Started
                                    </a>
                    
                                    <a class="mx-4 px-3 py-2 block bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                        <div class="absolute h-64 h-96 hidden lg:right-0 lg:block lg:w-1/2" style="clip-path: polygon(10% 0px, 100% 0%, 100% 100%, 0px 100%);">
                            <div class="h-full bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80');">
                                <div class="h-full bg-black opacity-25"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Hero With Image',
                isOpen: false,
            }
        }
    }
</script>