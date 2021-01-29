<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <section class="bg-white dark:bg-gray-800">
                <div class="max-w-3xl mx-auto px-6 py-16 text-center">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-gray-100">Want to see Back in action?</h1>
                    <p class="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, minus tempora nemo quos</p>

                    <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4 mt-8">
                        <input id="email" type="text" class="py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Email Address">
                        
                        <button class="py-2 px-4 capitalize tracking-wide bg-indigo-700 text-sm text-white font-medium rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Simple Newsletter',
                code: `
        <section class="bg-white dark:bg-gray-800">
            <div class="max-w-3xl mx-auto px-6 py-16 text-center">
                <h1 class="text-3xl font-semibold text-gray-800 dark:text-gray-100">Want to see Back in action?</h1>
                <p class="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, minus tempora nemo quos</p>

                <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4 mt-8">
                    <input id="email" type="text" class="py-2 px-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Email Address">
                    
                    <button class="py-2 px-4 capitalize tracking-wide bg-indigo-700 text-sm text-white font-medium rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                        Get Started
                    </button>
                </div>
            </div>
        </section>`
            }
        }
    }
</script>