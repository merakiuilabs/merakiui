<template>
    <view-component :name="name" :code="code">
        <div class="px-3 py-6" slot="component">
            <div class="flex justify-center items-center">
                <ul class="flex">
                    <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
                        <a href="#" class="flex items-center font-bold cursor-not-allowed">
                            <span class="mx-1">previous</span>
                        </a>
                    </li>

                    <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                        <a href="#" class="font-bold">1</a>
                    </li>

                    <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                        <a href="#" class="font-bold">2</a>
                    </li>

                    <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                        <a href="#" class="font-bold">3</a>
                    </li>

                    <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                        <a href="#" class="flex items-center font-bold">
                            <span class="mx-1">Next</span>
                        </a>
                    </li>
                </ul>
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
        <ul class="flex">
            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
                <a href="#" class="flex items-center font-bold cursor-not-allowed">
                    <span class="mx-1">previous</span>
                </a>
            </li>

            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                <a href="#" class="font-bold">1</a>
            </li>

            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                <a href="#" class="font-bold">2</a>
            </li>

            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                <a href="#" class="font-bold">3</a>
            </li>
            
            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                <a href="#" class="flex items-center font-bold">
                    <span class="mx-1">Next</span>
                </a>
            </li>
        </ul>`
            }
        }
    }
</script>