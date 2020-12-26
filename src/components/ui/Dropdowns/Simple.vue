<template>
    <view-component :name="name" :code="code">
        <div class="px-3 pt-6 pb-56 flex justify-end sm:justify-center" slot="component">
            <div class="relative">
                <!-- Dropdown toggle button -->
                <button @click="dropdownOpen = !dropdownOpen" class="relative z-10 block rounded-md bg-white dark:bg-gray-800 p-2 focus:outline-none">
                    <svg class="h-5 w-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>

                <!-- Dropdown menu -->
                <div v-show="dropdownOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20">
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                        your profile
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                        Your projects
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                        Help
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                        Settings
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                        Sign Out
                    </a>
                </div>
            </div>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Simple',
                code: `
        <div class="relative">
            <!-- Dropdown toggle button -->
            <button class="relative z-10 block rounded-md bg-white dark:bg-gray-800 p-2 focus:outline-none">
                <svg class="h-5 w-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>

            <!-- Dropdown menu -->
            <div class="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20">
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                    your profile
                </a>
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                    Your projects
                </a>
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                    Help
                </a>
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                    Settings
                </a>
                <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white">
                    Sign Out
                </a>
            </div>
        </div>`,
                dropdownOpen: true
            }
        }
    }
</script>
