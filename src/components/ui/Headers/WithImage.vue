<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <header class="bg-white">
                <nav class="px-6 py-3 shadow">
                    <div class="md:flex items-center justify-between">
                        <div class="flex justify-between items-center">
                            <div>
                                <a href="#" class="text-xl font-bold text-gray-800 hover:text-gray-700 md:text-2xl">Brand</a>
                            </div>
                    
                            <!-- Mobile menu button -->
                            <div class="md:hidden">
                                <button type="button" @click="isOpen = !isOpen" class="block text-gray-700 hover:text-gray-600 focus:text-gray-600 focus:outline-none" aria-label="Toggle menu">
                                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    
                        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                        <div :class="!isOpen ? 'hidden' : ''" class="flex flex-col -mx-2 mt-2 md:mt-0 md:flex-row md:block">
                            <a href="#" class="py-2 px-2 text-sm text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Home</a>
                            <a href="#" class="py-2 px-2 text-sm text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">About</a>
                            <a href="#" class="py-2 px-2 text-sm text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Contact</a>
                        </div>
                    </div>
                </nav>

                <div class="md:flex">
                    <div class="flex items-center justify-center px-6 py-8 md:h-96 w-full md:w-1/2">
                        <div class="max-w-xl">
                            <h2 class="text-2xl font-semibold text-gray-800 md:text-3xl">Build Your New <span class="text-indigo-600">Idea</span></h2>
                                
                            <p class="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                            <div class="flex mt-6">
                                <a href="#" class="px-3 py-2 block bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800">Get Started</a>
                                <a href="#" class="mx-4 px-3 py-2 block bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">Learn More</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-full h-64 md:w-1/2 md:h-auto">
                        <div class="h-full w-full object-cover object-center" style="background-image: url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)">
                            <div class="h-full w-full bg-black opacity-25"></div>
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
                name: 'Header With Image',
                isOpen: false,
                code: `
        <header class="bg-white">
            <nav class="px-6 py-2 shadow">
                <div class="md:flex items-center justify-between">
                    <div class="flex justify-between items-center">
                        <div>
                            <a href="#" class="text-xl font-bold text-gray-800 hover:text-gray-700 md:text-2xl">Brand</a>
                        </div>
                
                        <!-- Mobile menu button -->
                        <div class="md:hidden">
                            <button type="button" class="block text-gray-700 hover:text-gray-600 focus:text-gray-600 focus:outline-none" aria-label="Toggle menu">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                
                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div class="flex flex-col -mx-2 mt-2 md:mt-0 md:flex-row md:block">
                        <a href="#" class="py-2 px-2 text-sm text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Home</a>
                        <a href="#" class="py-2 px-2 text-sm text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">About</a>
                        <a href="#" class="py-2 px-2 text-sm text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Contact</a>
                    </div>
                </div>
            </nav>

            <div class="flex py-8 md:py-0 md:h-96">
                <div class="flex items-center justify-center px-6 md:w-1/2">
                    <div class="max-w-xl">
                        <h2 class="text-2xl font-semibold text-gray-800 md:text-3xl">Build Your New <span class="text-indigo-600">Idea</span></h2>
                            
                        <p class="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                        <div class="flex mt-6">
                            <a href="#" class="px-3 py-2 block bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800">Get Started</a>
                            <a href="#" class="mx-4 px-3 py-2 block bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div class="hidden md:block md:w-1/2">
                    <div class="h-full object-cover object-center" style="background-image: url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)">
                        <div class="h-full bg-black opacity-25"></div>
                    </div>
                </div>
            </div>
        </header>`,
            }
        }
    }
</script>