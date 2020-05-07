<template>
    <div :id="name | toId">
        <nav class="bg-white shadow-md">
            <div class="container mx-auto px-6 py-3 md:flex">
                <div class="flex justify-between items-center">
                    <div>
                        <a class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Brand</a>
                    </div>

                    <div class="md:hidden">
                        <button @click="isOpen = !isOpen" type="button" class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div :class="!isOpen ? 'hidden' : ''" class="w-full md:flex md:items-center md:justify-between md:block">
                    <div class="flex flex-col -mx-4 px-2 py-3 md:flex-row md:mx-0 md:py-0">
                        <a class="py-1 px-2 text-gray-800 rounded text-sm hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Home</a>
                        <a class="py-1 px-2 text-gray-800 rounded text-sm hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">About</a>
                        <a class="py-1 px-2 text-gray-800 rounded text-sm hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Contact</a>
                    </div>
                    
                    <div>
                        <input type="text" class="w-full px-4 py-3 leading-tight text-sm text-gray-100 bg-gray-800 rounded placeholder-gray-200 focus:outline-none focus:bg-gray-700" placeholder="Search">
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Navbar With Search',
                isOpen: false,
            }
        }
    }
</script>