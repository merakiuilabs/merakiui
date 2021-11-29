<template>
    <view-component :name="name" :code="code">
        <div class="flex items-center justify-center px-3 py-8" slot="component">
            <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
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
        <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
            Primary
        </button>`
            }
        }
    }
</script>
