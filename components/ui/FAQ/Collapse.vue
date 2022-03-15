<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">FQA's</h1>

                    <hr class="my-6 border-gray-200 dark:border-gray-700">

                    <div>
                        <div>
                            <button class="flex items-center focus:outline-none">
                                <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>

                                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">How i can play for my appoinment ?</h1>
                            </button>

                            <div class="flex mt-8 md:mx-10">
                                <span class="border border-blue-500"></span>

                                <p class="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                                </p>
                            </div>
                        </div>
                        
                        <hr class="my-8 border-gray-200 dark:border-gray-700">

                        <div>
                            <button class="flex items-center focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                </svg>

                                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">What can i expect at my first consultation ?</h1>
                            </button>
                        </div>

                        <hr class="my-8 border-gray-200 dark:border-gray-700">

                        <div>
                            <button class="flex items-center focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                </svg>

                                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">What are your opening house ?</h1>
                            </button>
                        </div>

                        <hr class="my-8 border-gray-200 dark:border-gray-700">

                        <div>
                            <button class="flex items-center focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                </svg>

                                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">Do i need a referral ?</h1>
                            </button>
                        </div>

                        <hr class="my-8 border-gray-200 dark:border-gray-700">

                        <div>
                            <button class="flex items-center focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                </svg>

                                <h1 class="mx-4 text-xl text-gray-700 dark:text-white">Is the cost of the appoinment covered by private health insurance ?</h1>
                            </button>
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
                name: 'Collapse',
                code: `
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">FQA's</h1>

                <hr class="my-6 border-gray-200 dark:border-gray-700">

                <div>
                    <div>
                        <button class="flex items-center focus:outline-none">
                            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>

                            <h1 class="mx-4 text-xl text-gray-700 dark:text-white">How i can play for my appoinment ?</h1>
                        </button>

                        <div class="flex mt-8 md:mx-10">
                            <span class="border border-blue-500"></span>

                            <p class="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                            </p>
                        </div>
                    </div>
                    
                    <hr class="my-8 border-gray-200 dark:border-gray-700">

                    <div>
                        <button class="flex items-center focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>

                            <h1 class="mx-4 text-xl text-gray-700 dark:text-white">What can i expect at my first consultation ?</h1>
                        </button>
                    </div>

                    <hr class="my-8 border-gray-200 dark:border-gray-700">

                    <div>
                        <button class="flex items-center focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>

                            <h1 class="mx-4 text-xl text-gray-700 dark:text-white">What are your opening house ?</h1>
                        </button>
                    </div>

                    <hr class="my-8 border-gray-200 dark:border-gray-700">

                    <div>
                        <button class="flex items-center focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>

                            <h1 class="mx-4 text-xl text-gray-700 dark:text-white">Do i need a referral ?</h1>
                        </button>
                    </div>

                    <hr class="my-8 border-gray-200 dark:border-gray-700">

                    <div>
                        <button class="flex items-center focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>

                            <h1 class="mx-4 text-xl text-gray-700 dark:text-white">Is the cost of the appoinment covered by private health insurance ?</h1>
                        </button>
                    </div>
                </div>
            </div>
        </section>`
            }
        }
    }
</script>