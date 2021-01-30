<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <nav class="bg-white dark:bg-gray-800 shadow">
                <div class="container mx-auto px-6 py-3 md:flex">
                    <div class="flex justify-between items-center">
                        <div>
                            <a class="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>
                        
                        <!-- Mobile menu button -->
                        <div class="flex md:hidden">
                            <button @click="isOpen = !isOpen" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div :class="!isOpen ? 'hidden' : ''" class="w-full md:flex md:items-center md:justify-between">
                        <div class="flex flex-col -mx-4 px-2 py-3 md:flex-row md:mx-0 md:py-0">
                            <a href="#" class="py-1 px-2 text-gray-700 dark:text-gray-200 rounded text-sm font-medium hover:bg-gray-900 hover:text-gray-100 md:mx-2">Home</a>
                            <a href="#" class="py-1 px-2 text-gray-700 dark:text-gray-200 rounded text-sm font-medium hover:bg-gray-900 hover:text-gray-100 md:mx-2">About</a>
                            <a href="#" class="py-1 px-2 text-gray-700 dark:text-gray-200 rounded text-sm font-medium hover:bg-gray-900 hover:text-gray-100 md:mx-2">Contact</a>
                        </div>

                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text" class="pl-10 pr-4 py-2 w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'With Search',
                isOpen: false,
                code: `
        <nav class="bg-white dark:bg-gray-800 shadow">
            <div class="container mx-auto px-6 py-3 md:flex">
                <div class="flex justify-between items-center">
                    <div>
                        <a class="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                    </div>
                    
                    <!-- Mobile menu button -->
                    <div class="flex md:hidden">
                        <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="w-full md:flex md:items-center md:justify-between">
                    <div class="flex flex-col -mx-4 px-2 py-3 md:flex-row md:mx-0 md:py-0">
                        <a href="#" class="py-1 px-2 text-gray-700 dark:text-gray-200 rounded text-sm font-medium hover:bg-gray-900 hover:text-gray-100 md:mx-2">Home</a>
                        <a href="#" class="py-1 px-2 text-gray-700 dark:text-gray-200 rounded text-sm font-medium hover:bg-gray-900 hover:text-gray-100 md:mx-2">About</a>
                        <a href="#" class="py-1 px-2 text-gray-700 dark:text-gray-200 rounded text-sm font-medium hover:bg-gray-900 hover:text-gray-100 md:mx-2">Contact</a>
                    </div>
                    
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>

                        <input type="text" class="pl-10 pr-4 py-3 w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                    </div>
                </div>
            </div>
        </nav>`,
            }
        }
    }
</script>