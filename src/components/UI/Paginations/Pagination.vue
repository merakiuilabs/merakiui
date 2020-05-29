<template>
    <div class="flex justify-center items-center">
        <div :id="name | toId">
            <ul class="flex">
                <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
                    <a href="#" class="flex items-center font-bold cursor-not-allowed">
                        <span class="mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a202c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </span>
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
                        <span class="mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a202c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
                    </a>
                </li>
            </ul>
        </div>
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