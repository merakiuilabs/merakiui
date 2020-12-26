<template>
    <view-component :name="name" :code="code">
        <div class="px-3 py-6" slot="component">
            <div class="flex flex-col max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex-row md:h-48">
                <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
                    <div class="py-6 px-6 md:px-8 md:py-0">
                        <h2 class="text-gray-700 dark:text-white text-lg font-bold md:text-gray-100">Sign Up For <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">Project</span> Updates</h2>
                        
                        <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
                    </div>
                </div>

                <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form>
                        <div class="flex flex-col rounded-lg border dark:border-gray-600 overflow-hidden lg:flex-row">
                            <input class="py-3 px-6 bg-white dark:bg-gray-800 text-gray-700 outline-none placeholder-gray-500 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email">
                            
                            <button class="py-3 px-4 bg-gray-700 text-gray-100 text-sm font-medium tracking-wider uppercase hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>   
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Newsletter',
                code: `
        <div class="flex flex-col max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex-row md:h-48">
            <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
                <div class="py-6 px-6 md:px-8 md:py-0">
                    <h2 class="text-gray-700 dark:text-white text-lg font-bold md:text-gray-100">Sign Up For <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">Project</span> Updates</h2>
                    
                    <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
                </div>
            </div>

            <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                <form>
                    <div class="flex flex-col rounded-lg border dark:border-gray-600 overflow-hidden lg:flex-row">
                        <input class="py-3 px-6 bg-white dark:bg-gray-800 text-gray-700 outline-none placeholder-gray-500 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email">
                        
                        <button class="py-3 px-4 bg-gray-700 text-gray-100 text-sm font-medium tracking-wider uppercase hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
                    </div>
                </form>
            </div>
        </div>`
            }
        }
    }
</script>