<template>
    <view-component :name="name" :code="code">
        <div class="flex items-center justify-center px-3 py-8" slot="component">
            <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                Primary
            </button>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Primary',
                code: `
        <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
            Primary
        </button>`
            }
        }
    }
</script>
