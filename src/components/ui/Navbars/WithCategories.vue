<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <nav class="bg-white dark:bg-gray-800 shadow">
                <div class="container mx-auto px-6 py-3">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <a class="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>

                                <!-- Search input on desktop screen -->
                                <div class="mx-10 hidden md:block">
                                    <div class="relative">
                                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>

                                        <input type="text" class="pl-10 pr-4 py-2 w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                                    </div>
                                </div>
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
                        <div class="md:flex items-center" :class="isOpen ? 'block' : 'hidden'">
                            <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                                <a class="my-1 text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Home</a>
                                <a class="my-1 text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Blog</a>
                                <a class="my-1 text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Compoents</a>
                                <a class="my-1 text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Courses</a>
                            </div>

                            <div class="flex items-center py-2 -mx-1 md:mx-0">
                                <a class="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-gray-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-2 md:w-auto" href="#">Login</a>
                                <a class="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-0 md:w-auto" href="#">Join free</a>
                            </div>

                            <!-- Search input on mobile screen -->
                            <div class="mt-3 md:hidden">
                               <div class="relative">
                                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>

                                    <input type="text" class="pl-10 pr-4 py-2 w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-3 py-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">News</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Articles</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Videos</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Tricks</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">PHP</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Laravel</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Vue</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">React</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Tailwindcss</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Meraki UI</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">CPP</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">JavaScript</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Ruby</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Mysql</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Pest</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">PHPUnit</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Netlify</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">VS Code</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">PHPStorm</a>
                        <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Sublime</a>
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
                name: 'With Categories',
                isOpen: false,
                code: `
        <!-- Require css -->
        <style>
        .scroll-hidden::-webkit-scrollbar {
            height: 0px;
            background: transparent; /* make scrollbar transparent */
        }
        </style>

        <nav class="bg-white dark:bg-gray-800 shadow">
            <div class="container mx-auto px-6 py-3">
                <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <a class="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>

                            <!-- Search input on desktop screen -->
                            <div class="mx-10 hidden md:block">
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>

                                    <input type="text" class="pl-10 pr-4 py-2 w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                                </div>
                            </div>
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
                    <div class="md:flex items-center">
                        <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                            <a class="my-1 text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Home</a>
                            <a class="my-1 text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Blog</a>
                            <a class="my-1 text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Compoents</a>
                            <a class="my-1 text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Courses</a>
                        </div>

                        <div class="flex items-center py-2 -mx-1 md:mx-0">
                            <a class="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-gray-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-2 md:w-auto" href="#">Login</a>
                            <a class="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-0 md:w-auto" href="#">Join free</a>
                        </div>

                        <!-- Search input on mobile screen -->
                        <div class="mt-3 md:hidden">
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>

                                <input type="text" class="pl-10 pr-4 py-2 w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-3 py-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">News</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Articles</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Videos</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Tricks</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">PHP</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Laravel</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Vue</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">React</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Tailwindcss</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Meraki UI</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">CPP</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">JavaScript</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Ruby</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Mysql</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Pest</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">PHPUnit</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Netlify</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">VS Code</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">PHPStorm</a>
                    <a class="text-sm text-gray-700 dark:text-gray-200 leading-5 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline mx-4 md:my-0" href="#">Sublime</a>
                </div>
            </div>
        </nav>`,
            }
        }
    }
</script>

<style>
    .scroll-hidden::-webkit-scrollbar {
        height: 0px;
        background: transparent; /* make scrollbar transparent */
    }
</style>