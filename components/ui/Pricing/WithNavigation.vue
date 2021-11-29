<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <section class="bg-white dark:bg-gray-800">
                <div class="container px-6 py-8 mx-auto">
                    <div class="max-w-2xl p-1.5 mx-auto overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-700">
                        <div class="grid gap-3 md:grid-cols-3">
                            <button class="px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-200 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200">Monthly</button>
                            
                            <button class="flex items-center justify-center px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-200 transform bg-gray-200 rounded-lg dark:bg-gray-600 focus:outline-none dark:text-gray-200">
                                <span class="mx-1">Biannually</span>
                                <span class="text-xs mx-1 font-normal text-white bg-blue-500 rounded-full py-0.5 px-1.5">save 10%</span>
                            </button>

                            <button class="flex items-center justify-center px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-200 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200">
                                <span class="mx-1">Annually</span>
                                <span class="text-xs mx-1 font-normal text-white bg-blue-500 rounded-full py-0.5 px-1.5">save 20%</span>
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row">
                        <div class="w-full px-6 py-4 transition-colors duration-200 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-700">
                            <div class="text-center">
                                <p class="text-4xl font-semibold text-gray-800 dark:text-gray-100">Basic</p>
                                <p class="mt-4 text-gray-500 dark:text-gray-300">Essentail Features</p>
                                <h4 class="mt-2 text-gray-600 line-through dark:text-gray-400">$59.99</h4>
                                <h4 class="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">$53.99</h4>
                                <p class="mt-4 text-gray-500 dark:text-gray-300">/pre month</p>
                                <p class="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p>

                            </div>

                            <div class="mt-8 space-y-8">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-300">5 wathclists included</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-300">5 exclusive widgets</span>
                                </div>
                            </div>

                            <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                Choose Basic
                            </button>
                        </div>

                        <div class="w-full overflow-hidden transition-colors duration-200 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-700">
                            <p class="py-2 text-sm text-center text-white uppercase bg-blue-500">Recommended by experts</p>
                            <div class="px-6 py-4">
                                <div class="text-center">
                                    <p class="text-4xl font-semibold text-gray-800 dark:text-gray-100">Pro</p>
                                    <p class="mt-4 text-gray-500 dark:text-gray-300">Advance Features</p>
                                    <h4 class="mt-2 text-gray-600 line-through dark:text-gray-400">$89.99</h4>
                                    <h4 class="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">$80.99</h4>
                                    <p class="mt-4 text-gray-500 dark:text-gray-300">/pre month</p>
                                    <p class="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p>

                                </div>

                                <div class="mt-8 space-y-8">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>

                                        <span class="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                                    </div>

                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>

                                        <span class="mx-4 text-gray-700 dark:text-gray-300">Unlimited wathclists</span>
                                    </div>

                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>

                                        <span class="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                                    </div>

                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>

                                        <span class="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                                    </div>

                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>

                                        <span class="mx-4 text-gray-700 dark:text-gray-300">10+ exclusive pro widgets</span>
                                    </div>
                                </div>

                                <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                    Choose Pro
                                </button>
                            </div>
                        </div>
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
            name: "With Navigation",
            code: `
        <section class="bg-white dark:bg-gray-800">
            <div class="container px-6 py-8 mx-auto">
                <div class="max-w-2xl p-1.5 mx-auto overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-700">
                    <div class="grid gap-3 md:grid-cols-3">
                        <button class="px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-200 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200">Monthly</button>
                        
                        <button class="flex items-center justify-center px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-200 transform bg-gray-200 rounded-lg dark:bg-gray-600 focus:outline-none dark:text-gray-200">
                            <span class="mx-1">Biannually</span>
                            <span class="text-xs mx-1 font-normal text-white bg-blue-500 rounded-full py-0.5 px-1.5">save 10%</span>
                        </button>

                        <button class="flex items-center justify-center px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-200 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200">
                            <span class="mx-1">Annually</span>
                            <span class="text-xs mx-1 font-normal text-white bg-blue-500 rounded-full py-0.5 px-1.5">save 20%</span>
                        </button>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row">
                    <div class="w-full px-6 py-4 transition-colors duration-200 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-700">
                        <div class="text-center">
                            <p class="text-4xl font-semibold text-gray-800 dark:text-gray-100">Basic</p>
                            <p class="mt-4 text-gray-500 dark:text-gray-300">Essentail Features</p>
                            <h4 class="mt-2 text-gray-600 line-through dark:text-gray-400">$59.99</h4>
                            <h4 class="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">$53.99</h4>
                            <p class="mt-4 text-gray-500 dark:text-gray-300">/pre month</p>
                            <p class="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p>

                        </div>

                        <div class="mt-8 space-y-8">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span class="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                            </div>

                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span class="mx-4 text-gray-700 dark:text-gray-300">5 wathclists included</span>
                            </div>

                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span class="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                            </div>

                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span class="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                            </div>

                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span class="mx-4 text-gray-700 dark:text-gray-300">5 exclusive widgets</span>
                            </div>
                        </div>

                        <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Choose Basic
                        </button>
                    </div>

                    <div class="w-full overflow-hidden transition-colors duration-200 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-700">
                        <p class="py-2 text-sm text-center text-white uppercase bg-blue-500">Recommended by experts</p>
                        <div class="px-6 py-4">
                            <div class="text-center">
                                <p class="text-4xl font-semibold text-gray-800 dark:text-gray-100">Pro</p>
                                <p class="mt-4 text-gray-500 dark:text-gray-300">Advance Features</p>
                                <h4 class="mt-2 text-gray-600 line-through dark:text-gray-400">$89.99</h4>
                                <h4 class="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">$80.99</h4>
                                <p class="mt-4 text-gray-500 dark:text-gray-300">/pre month</p>
                                <p class="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p>

                            </div>

                            <div class="mt-8 space-y-8">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-300">Unlimited wathclists</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-300">10+ exclusive pro widgets</span>
                                </div>
                            </div>

                            <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                Choose Pro
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>`,
        };
    },
};
</script>
