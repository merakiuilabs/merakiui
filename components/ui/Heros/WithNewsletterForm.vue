<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <header class="bg-white dark:bg-gray-800">
                <nav class="border-t-4 border-indigo-500">
                    <div class="container flex items-center justify-between px-6 py-3 mx-auto">
                        <div>
                            <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>
                        
                        <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </nav>

                <div class="container px-6 py-16 mx-auto">
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2">
                            <div class="lg:max-w-lg">
                                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Subscribe To The <span class="text-indigo-500">Newsletter</span></h1>

                                <p class="mt-4 text-gray-600 dark:text-gray-400">be the first to knows when our <span class="font-medium text-indigo-500">Brand</span> is live</p>

                                <div class="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                                    <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Email Address">
                                    
                                    <button class="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                
                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img class="w-full h-full max-w-md" src="~/assets/svg/Email-campaign-bro.svg" alt="#">
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
                name: 'With Newsletter Form',
                code: `
        <header class="bg-white dark:bg-gray-800">
            <nav class="border-t-4 border-indigo-500">
                <div class="container flex items-center justify-between px-6 py-3 mx-auto">
                    <div>
                        <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                    </div>
                    
                    <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </nav>

            <div class="container px-6 py-16 mx-auto">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Subscribe To The <span class="text-indigo-500">Newsletter</span></h1>

                            <p class="mt-4 text-gray-600 dark:text-gray-400">be the first to knows when our <span class="font-medium text-indigo-500">Brand</span> is live</p>

                            <div class="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Email Address">
                                
                                <button class="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
            
                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full max-w-md" src="~/svg/assets/Email campaign-bro.svg" alt="#">
                    </div>
                </div>
            </div>
        </header>`,
            }
        }
    }
</script>