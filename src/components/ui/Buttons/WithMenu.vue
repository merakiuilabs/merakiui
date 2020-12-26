<template>
    <view-component :name="name" :code="code">
        <div class="px-3 pt-6 pb-40 flex justify-center" slot="component">
            <div class="flex items-center">
                <button class="py-2 px-4 capitalize tracking-wide bg-blue-600 dark:bg-gray-800 text-white font-medium rounded hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">Download</button>
                
                <span class="border border-transparent"></span>

                <div class="relative">
                    <button @click="menuOpen = !menuOpen" class="relative z-10 block bg-blue-600 dark:bg-gray-800 rounded p-2 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </button>

                    <div v-show="menuOpen" class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md overflow-hidden shadow-xl z-20">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 border-b dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">small <span class="text-gray-600 dark:text-gray-400">(640x426)</span></a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 border-b dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">medium <span class="text-gray-600 dark:text-gray-400">(1920x1280)</span></a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">large <span class="text-gray-600 dark:text-gray-400">(2400x1600)</span></a>
                    </div>
                </div>
            </div>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'With Menu',
                code: `
        <div class="flex items-center">
            <button class="py-2 px-4 capitalize tracking-wide bg-blue-600 dark:bg-gray-800 text-white font-medium rounded hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">Download</button>
            
            <span class="border border-transparent"></span>

            <div class="relative">
                <!-- Menu toggle button --> 
                <button class="relative z-10 block bg-blue-600 dark:bg-gray-800 rounded p-2 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </button>

                <!-- Menu list -->
                <div class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md overflow-hidden shadow-xl z-20">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 border-b dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">small <span class="text-gray-600 dark:text-gray-400">(640x426)</span></a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 border-b dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">medium <span class="text-gray-600 dark:text-gray-400">(1920x1280)</span></a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">large <span class="text-gray-600 dark:text-gray-400">(2400x1600)</span></a>
                </div>
            </div>
        </div>`,
            menuOpen: true
            }
        }
    }
</script>
