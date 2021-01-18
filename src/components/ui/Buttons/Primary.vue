<template>
    <view-component :name="name" :code="code">
        <div class="px-3 py-8 flex items-center justify-center" slot="component">
            <button class="py-2 px-4 capitalize tracking-wide bg-blue-600 dark:bg-gray-800 text-white font-medium rounded hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
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
        <button class="py-2 px-4 capitalize tracking-wide bg-blue-600 dark:bg-gray-800 text-white font-medium rounded hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
            Primary
        </button>`
            }
        }
    }
</script>
