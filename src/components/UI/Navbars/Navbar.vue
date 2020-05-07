<template>
    <div :id="name | toId">
        <nav class="bg-white shadow-md">
            <div class="container py-3 px-6 mx-auto">
                <div class="md:flex justify-between items-center">
                    <div class="flex justify-between items-center">
                        <div>
                            <a class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl" href="#">Brand</a>
                        </div>

                        <div class="md:hidden">
                            <button type="button" class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex flex-col mt-3 md:flex-row md:mt-0">
                        <a class="text-gray-800 text-sm hover:font-medium md:mx-4" href="#">Home</a>
                        <a class="text-gray-800 text-sm hover:font-medium md:mx-4" href="#">Contact</a>
                        <a class="text-gray-800 text-sm hover:font-medium md:mx-4" href="#">About Us</a>
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
                name: 'Navbar'
            }
        }
    }
</script>