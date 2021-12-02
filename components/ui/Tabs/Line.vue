<template>
    <view-component :name="name" :code="code">
        <div class="flex items-center justify-center px-3 py-8" slot="component">
            <div class="flex border-b border-gray-200 dark:border-gray-700">
                <button class="h-10 px-4 py-2 -mb-px text-sm text-center text-indigo-600 bg-transparent border-b-2 border-indigo-500 sm:text-base dark:border-indigo-400 dark:text-indigo-300 whitespace-nowrap focus:outline-none">
                    Profile
                </button>

                <button class="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                    Account
                </button>

                <button class="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                    Notifiaction
                </button>
            </div>
        </div>
    </view-component>
</template>


<script>
    export default {
        data() {
            return {
                name: 'Line',
                code: `
        <div class="flex border-b border-gray-200 dark:border-gray-700">
            <button class="h-10 px-4 py-2 -mb-px text-sm text-center text-indigo-600 bg-transparent border-b-2 border-indigo-500 sm:text-base dark:border-indigo-400 dark:text-indigo-300 whitespace-nowrap focus:outline-none">
                Profile
            </button>

            <button class="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                Account
            </button>

            <button class="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                Notifiaction
            </button>
        </div>`
            }
        }
    }
</script>