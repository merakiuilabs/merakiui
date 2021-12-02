<template>
    <view-component :name="name" :code="code">
        <div class="flex items-center justify-center px-3 py-8" slot="component">
            <div class="p-1.5 w-full sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <div class="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                    <button class="w-full px-4 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                        Upload
                    </button>
                    
                    <button class="w-full px-4 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                        Drift
                    </button>

                    <button class="w-full px-4 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                        View
                    </button>
                </div>
            </div>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Group',
                code: `
        <div class="p-1.5 w-full sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div class="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                <button class="w-full px-4 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                    Upload
                </button>
                
                <button class="w-full px-4 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                    Drift
                </button>

                <button class="w-full px-4 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                    View
                </button>
            </div>
        </div>`
            }
        }
    }
</script>
