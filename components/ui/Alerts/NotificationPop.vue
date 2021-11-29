<template>
    <view-component :name="name" :code="code">
        <div class="px-3 py-6" slot="component">
            <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div class="w-2 bg-gray-800 dark:bg-gray-900"></div>
                
                <div class="flex items-center px-2 py-3">
                    <img class="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200">
                    
                    <div class="mx-3">
                        <p class="text-gray-600 dark:text-gray-200">Sara has replied on the <a class="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline">uploaded image</a>.</p>
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
                name: 'Notification Pop',
                code: `
        <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="w-2 bg-gray-800 dark:bg-gray-900"></div>

            <div class="flex items-center px-2 py-3">
                <img class="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200">
                
                <div class="mx-3">
                    <p class="text-gray-600 dark:text-gray-200">Sara has replied on the <a class="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline">uploaded image</a>.</p>
                </div>
            </div>
        </div>`,
            }
        },
    }
</script>