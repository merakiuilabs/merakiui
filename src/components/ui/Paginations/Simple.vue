<template>
    <view-component :name="name" :code="code">
        <div class="px-3 py-6" slot="component">
            <div class="flex justify-center items-center">
                <div class="flex">
                    <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-500 rounded-md cursor-not-allowed">
                        previous
                    </a>

                    <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
                        1
                    </a>

                    <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
                        2
                    </a>

                    <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
                        3
                    </a>

                    <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
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
            <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-500 rounded-md cursor-not-allowed">
                previous
            </a>

            <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
                1
            </a>

            <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
                2
            </a>

            <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
                3
            </a>

            <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
                Next
            </a>
        </div>`
            }
        }
    }
</script>
