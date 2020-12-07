<template>
    <view-component :name="name" :code="code">
        <div class="px-3 py-6" slot="component">
            <div class="flex flex-col justify-center items-center max-w-sm mx-auto">
                <div class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)"></div>

                <div class="w-56 md:w-64 bg-white dark:bg-gray-800 -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <h3 class="py-2 text-center font-bold uppercase tracking-wide text-gray-800 dark:text-white">Nike Revolt</h3>
                    
                    <div class="flex items-center justify-between py-2 px-3 bg-gray-200 dark:bg-gray-700">
                        <span class="text-gray-800 dark:text-gray-200 font-bold">$129</span>
                        <button class="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Simple Product',
                code: `
        <div class="flex flex-col justify-center items-center max-w-sm mx-auto">
            <div class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)"></div>

            <div class="w-56 md:w-64 bg-white dark:bg-gray-800 -mt-10 shadow-lg rounded-lg overflow-hidden">
                <h3 class="py-2 text-center font-bold uppercase tracking-wide text-gray-800 dark:text-white">Nike Revolt</h3>
                
                <div class="flex items-center justify-between py-2 px-3 bg-gray-200 dark:bg-gray-700">
                    <span class="text-gray-800 dark:text-gray-200 font-bold">$129</span>
                    <button class="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                </div>
            </div>
        </div>`
            }
        }
    }
</script>
