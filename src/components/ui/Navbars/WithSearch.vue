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
                        
                        <div>
                            <input type="text" class="w-full lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-900 rounded-md placeholder-gray-500 dark:placeholder-gray-200 border border-transparent focus:outline-none focus:bg-white focus:ring focus:border-blue-400" placeholder="Search" aria-label="Search">
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
                <div class="w-full hidden md:flex md:items-center md:justify-between">
                    <div class="flex flex-col -mx-4 px-2 py-3 md:flex-row md:mx-0 md:py-0">
                        <a href="#" class="py-1 px-2 text-gray-700 dark:text-gray-200 rounded text-sm font-medium hover:bg-gray-900 hover:text-gray-100 md:mx-2">Home</a>
                        <a href="#" class="py-1 px-2 text-gray-700 dark:text-gray-200 rounded text-sm font-medium hover:bg-gray-900 hover:text-gray-100 md:mx-2">About</a>
                        <a href="#" class="py-1 px-2 text-gray-700 dark:text-gray-200 rounded text-sm font-medium hover:bg-gray-900 hover:text-gray-100 md:mx-2">Contact</a>
                    </div>
                    
                    <div>
                        <input type="text" class="w-full lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-900 rounded-md placeholder-gray-500 dark:placeholder-gray-200 border border-transparent focus:outline-none focus:bg-white focus:ring focus:border-blue-400" placeholder="Search" aria-label="Search">
                    </div>
                </div>
            </div>
        </nav>`,
            }
        }
    }
</script>