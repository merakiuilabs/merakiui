<template>
    <div :id="name | toId">
        <ul class="flex mx-auto">
            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
                <a class="flex items-center font-bold" href="#">
                    <span class="mx-1">previous</span>
                </a>
            </li>
            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                <a class="font-bold" href="#">1</a>
            </li>
            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                <a class="font-bold" href="#">2</a>
            </li>
            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                <a class="font-bold" href="#">3</a>
            </li>
            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                <a class="flex items-center font-bold" href="#">
                    <span class="mx-1">Next</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Pagination',
            }
        }
    }
</script>