<template>
    <view-component :name="name" :code="code">
        <div class="flex justify-center px-3 pt-6 pb-40" slot="component">
            <div class="flex items-center">
                <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">Download</button>
                
                <span class="border border-transparent"></span>

                <div class="relative inline-block">
                    <button @click="menuOpen = !menuOpen" class="relative z-10 block p-2 transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </button>

                    <transition
                        enter-active-class="transition duration-150 ease-out transform"
                        enter-class="scale-95 opacity-0"
                        enter-to-class="scale-100 opacity-100"
                        leave-active-class="transition duration-150 ease-in transform"
                        leave-class="scale-100 opacity-100"
                        leave-to-class="scale-95 opacity-0"
                    >
                        <div v-show="menuOpen" class="absolute right-0 z-20 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-700">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-800 border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">small <span class="text-gray-600 dark:text-gray-400">(640x426)</span></a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-800 border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">medium <span class="text-gray-600 dark:text-gray-400">(1920x1280)</span></a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">large <span class="text-gray-600 dark:text-gray-400">(2400x1600)</span></a>
                        </div>
                    </transition>
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
            <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">Download</button>
            
            <span class="border border-transparent"></span>

            <div class="relative">
                <!-- Menu toggle button --> 
                <button class="relative z-10 block p-2 transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                    <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </button>

                <!-- Menu list -->
                <div class="absolute right-0 z-20 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-700">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-800 border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">small <span class="text-gray-600 dark:text-gray-400">(640x426)</span></a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-800 border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">medium <span class="text-gray-600 dark:text-gray-400">(1920x1280)</span></a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">large <span class="text-gray-600 dark:text-gray-400">(2400x1600)</span></a>
                </div>
            </div>
        </div>`,
            menuOpen: true
            }
        }
    }
</script>
