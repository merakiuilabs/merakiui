<template>
    <view-component :name="name" :code="code">
        <div class="px-3 py-6" slot="component">
            <div class="flex justify-center items-center">
                <div class="flex">
                    <a href="#" class="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-600 rounded-md cursor-not-allowed">
                        previous
                    </a>

                    <a href="#" class="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md">
                        1
                    </a>

                    <a href="#" class="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md">
                        2
                    </a>

                    <a href="#" class="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md">
                        3
                    </a>

                    <a href="#" class="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md">
                        Next
                    </a>
                </div>
            </div>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Pagination',
                code: `
        <div class="flex">
            <a href="#" class="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-600 rounded-md cursor-not-allowed">
                previous
            </a>

            <a href="#" class="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md">
                1
            </a>

            <a href="#" class="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md">
                2
            </a>

            <a href="#" class="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md">
                3
            </a>

            <a href="#" class="mx-1 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 rounded-md">
                Next
            </a>
        </div>`
            }
        }
    }
</script>
