<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <header class="bg-white dark:bg-gray-800">
                <nav class="px-6 py-3 shadow">
                    <div class="items-center justify-between md:flex">
                        <div class="flex items-center justify-between">
                            <div>
                                <a class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                            </div>
                    
                            <!-- Mobile menu button -->
                            <div class="md:hidden">
                                <button type="button" @click="isOpen = !isOpen" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    
                        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                        <div :class="!isOpen ? 'hidden' : ''" class="flex flex-col mt-2 -mx-2 md:mt-0 md:flex-row md:block">
                            <a href="#" class="px-2 py-2 text-sm text-gray-800 rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Home</a>
                            <a href="#" class="px-2 py-2 text-sm text-gray-800 rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">About</a>
                            <a href="#" class="px-2 py-2 text-sm text-gray-800 rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Contact</a>
                        </div>
                    </div>
                </nav>

                <div class="md:flex">
                    <div class="flex items-center justify-center w-full px-6 py-8 md:h-128 md:w-1/2">
                        <div class="max-w-xl">
                            <h2 class="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Build Your New <span class="text-indigo-600 dark:text-indigo-400">Idea</span></h2>
                                
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                            <div class="flex mt-6">
                                <a href="#" class="block px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded hover:bg-gray-700">Get Started</a>
                                <a href="#" class="block px-3 py-2 mx-4 text-xs font-semibold text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded hover:bg-gray-300">Learn More</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-full h-64 md:w-1/2 md:h-auto">
                        <div class="w-full h-full bg-cover" style="background-image: url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)">
                            <div class="w-full h-full bg-black opacity-25"></div>
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
                name: 'With Side Image',
                isOpen: false,
                code: `
        <header class="bg-white dark:bg-gray-800">
            <nav class="px-6 py-3 shadow">
                <div class="items-center justify-between md:flex">
                    <div class="flex items-center justify-between">
                        <div>
                            <a class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>
                
                        <!-- Mobile menu button -->
                        <div class="md:hidden">
                            <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                
                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div class="flex flex-col mt-2 -mx-2 md:mt-0 md:flex-row md:block">
                        <a href="#" class="px-2 py-2 text-sm text-gray-800 rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Home</a>
                        <a href="#" class="px-2 py-2 text-sm text-gray-800 rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">About</a>
                        <a href="#" class="px-2 py-2 text-sm text-gray-800 rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Contact</a>
                    </div>
                </div>
            </nav>

            <div class="md:flex">
                <div class="flex items-center justify-center w-full px-6 py-8 md:h-128 md:w-1/2">
                    <div class="max-w-xl">
                        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Build Your New <span class="text-indigo-600 dark:text-indigo-400">Idea</span></h2>
                            
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                        <div class="flex mt-6">
                            <a href="#" class="block px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded hover:bg-gray-700">Get Started</a>
                            <a href="#" class="block px-3 py-2 mx-4 text-xs font-semibold text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded hover:bg-gray-300">Learn More</a>
                        </div>
                    </div>
                </div>
                
                <div class="w-full h-64 md:w-1/2 md:h-auto">
                    <div class="w-full h-full bg-cover" style="background-image: url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)">
                        <div class="w-full h-full bg-black opacity-25"></div>
                    </div>
                </div>
            </div>
        </header>`,
            }
        }
    }
</script>