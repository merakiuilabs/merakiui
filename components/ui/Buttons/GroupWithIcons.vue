<template>
    <view-component :name="name" :code="code">
        <div class="flex items-center justify-center px-3 py-8" slot="component">
            <div class="p-1.5 w-full sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <div class="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                    <button class="flex items-center justify-center w-full px-2 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span class="mx-1">
                            Upload
                        </span>
                    </button>
                    
                    <button class="flex items-center justify-center w-full px-2 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        <span class="mx-1">
                            Drift
                        </span>
                    </button>

                    <button class="flex items-center justify-center w-full px-2 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span class="mx-1">
                            View
                        </span>
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
                name: 'Group With Icons',
                code: `
        <div class="p-1.5 w-full sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div class="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                <button class="flex items-center justify-center w-full px-2 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="mx-1">
                        Upload
                    </span>
                </button>
                
                <button class="flex items-center justify-center w-full px-2 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    <span class="mx-1">
                        Drift
                    </span>
                </button>

                <button class="flex items-center justify-center w-full px-2 py-1 text-white bg-indigo-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-indigo-500 focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span class="mx-1">
                        View
                    </span>
                </button>
            </div>
        </div>`
            }
        }
    }
</script>
