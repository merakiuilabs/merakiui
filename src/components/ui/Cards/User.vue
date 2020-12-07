<template>
    <view-component :name="name" :code="code">
        <div class="px-3 py-6" slot="component">
            <div class="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto">
                <img class="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar">
                
                <div class="py-5 text-center">
                    <a href="#" class="block text-2xl text-gray-800 dark:text-white font-bold">John Doe</a>
                    <span class="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
                </div>
            </div>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'User',
                code: `
        <div class="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto">
            <img class="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar">
            
            <div class="py-5 text-center">
                <a href="#" class="block text-2xl text-gray-800 dark:text-white font-bold">John Doe</a>
                <span class="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
            </div>
        </div>`
            }
        }
    }
</script>
