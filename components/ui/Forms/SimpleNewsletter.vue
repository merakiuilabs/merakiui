<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <section class="bg-white dark:bg-gray-800">
                <div class="max-w-3xl px-6 py-16 mx-auto text-center">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-gray-100">Want to see Back in action?</h1>
                    <p class="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, minus tempora nemo quos</p>

                    <div class="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                        <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Email Address">
                        
                        <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
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
            <div class="max-w-3xl px-6 py-16 mx-auto text-center">
                <h1 class="text-3xl font-semibold text-gray-800 dark:text-gray-100">Want to see Back in action?</h1>
                <p class="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, minus tempora nemo quos</p>

                <div class="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                    <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Email Address">
                    
                    <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Get Started
                    </button>
                </div>
            </div>
        </section>`
            }
        }
    }
</script>