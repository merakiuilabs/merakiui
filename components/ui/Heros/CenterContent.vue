<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <section class="bg-white dark:bg-gray-800">
                <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div class="flex items-center justify-between">
                        <div>
                            <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>
            
                        <!-- Mobile menu button -->
                        <div class="flex lg:hidden">
                            <button @click="isOpen = !isOpen" type="button"
                                class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
            
                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div :class="isOpen ? 'flex' : 'hidden lg:flex'" class="flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                        <a class="mx-8 text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                            href="#">Home</a>
                        <a class="mx-8 text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                            href="#">Components</a>
                        <a class="mx-8 text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                            href="#">Pricing</a>
                        <a class="mx-8 text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                            href="#">Contact</a>
                    </div>
            
                    <a :class="isOpen ? 'block' : 'hidden lg:block'" class="px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
                        href="#">
                        Get started
                    </a>
                </nav>
            
                <div class="container px-6 py-16 mx-auto text-center">
                    <div class="max-w-lg mx-auto">
                        <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Building Your Next App with our Awesome components</h1>
                        <p class="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                            obcaecati illum mollitia.</p>
                        <button
                            class="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 md:mx-0 md:w-auto focus:outline-none">
                            Start 14-Day free trial
                        </button>
                        <p class="mt-3 text-sm text-gray-400 ">No credit card required</p>
                    </div>
            
                    <div class="flex justify-center mt-10">
                        <div class="w-full h-64 bg-blue-600 rounded-xl md:w-4/5"></div>
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
                name: 'Center Content',
                isOpen: false,
                code: `
        <section class="bg-white dark:bg-gray-800">
            <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                <div class="flex items-center justify-between">
                    <div>
                        <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                    </div>
        
                    <!-- Mobile menu button -->
                    <div class="flex lg:hidden">
                        <button type="button"
                            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
        
                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                    <a class="mx-8 text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                        href="#">Home</a>
                    <a class="mx-8 text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                        href="#">Components</a>
                    <a class="mx-8 text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                        href="#">Pricing</a>
                    <a class="mx-8 text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                        href="#">Contact</a>
                </div>
        
                <a class="block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
                    href="#">
                    Get started
                </a>
            </nav>
        
            <div class="container px-6 py-16 mx-auto text-center">
                <div class="max-w-lg mx-auto">
                    <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Building Your Next App with our Awesome components</h1>
                    <p class="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                        obcaecati illum mollitia.</p>
                    <button
                        class="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 md:mx-0 md:w-auto focus:outline-none">
                        Start 14-Day free trial
                    </button>
                    <p class="mt-3 text-sm text-gray-400 ">No credit card required</p>
                </div>
        
                <div class="flex justify-center mt-10">
                    <div class="w-full h-64 bg-blue-600 rounded-xl md:w-4/5"></div>
                </div>
            </div>
        </section>`,
            }
        }
    }
</script>