<template>
     <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <footer class="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-800">
                <div class="container py-6">
                    <h1 class="text-lg font-bold text-center lg:text-2xl">
                        Join 31,000+ other and never miss <br> out on new tips, tutorials, and more.
                    </h1>

                    <div class="flex justify-center mt-6">
                        <div class="bg-white border rounded-md focus-within:ring focus-within:border-blue-500">
                            <div class="flex flex-wrap justify-between md:flex-row">
                                <input type="email" class="p-2 m-1 text-sm text-gray-700 appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email">
                                <button class="w-full p-2 m-1 text-sm font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded-md lg:w-auto hover:bg-gray-700">subscribe</button>
                            </div>
                        </div>
                    </div>

                    <hr class="h-px mt-6 bg-gray-200 border-none dark:bg-gray-700">

                    <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                        <div>
                            <a href="#" class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>
                        </div>

                        <div class="flex mt-4 md:m-0">
                            <div class="-mx-4">
                                <a href="#" class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">About</a>
                                <a href="#" class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">Blog</a>
                                <a href="#" class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">News</a>
                                <a href="#" class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
     </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'With Subscribe Form',
                code: `
        <footer class="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-800">
            <div class="container py-6">
                <h1 class="text-lg font-bold text-center lg:text-2xl">
                    Join 31,000+ other and never miss <br> out on new tips, tutorials, and more.
                </h1>

                <div class="flex justify-center mt-6">
                    <div class="bg-white border rounded-md focus-within:ring focus-within:border-blue-500">
                        <div class="flex flex-wrap justify-between md:flex-row">
                            <input type="email" class="p-2 m-1 text-sm text-gray-700 appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email">
                            <button class="w-full p-2 m-1 text-sm font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded-md lg:w-auto hover:bg-gray-700">subscribe</button>
                        </div>
                    </div>
                </div>

                <hr class="h-px mt-6 border-gray-300 border-none dark:bg-gray-700">

                <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                    <div>
                        <a href="#" class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>
                    </div>

                    <div class="flex mt-4 md:m-0">
                        <div class="-mx-4">
                            <a href="#" class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">About</a>
                            <a href="#" class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">Blog</a>
                            <a href="#" class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">News</a>
                            <a href="#" class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>`
            }
        }
    }
</script>