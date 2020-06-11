<template>
    <div class="px-3" :id="name | toId">
        <div class="max-w-2xl mx-auto bg-white overflow-hidden shadow-md rounded-lg">
            <div>
                <img class="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                     alt="Article">
            </div>

            <div class="p-6">
                <div>
                    <span class="text-blue-600 text-xs font-medium uppercase">Product</span>
                    <a href="#" class="block text-gray-800 font-semibold text-2xl mt-2 hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</a>
                    <p class="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                </div>

                <div class="mt-4">
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <img class="h-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                alt="Avatar">
                            <a href="#" class="mx-2 text-gray-700 font-semibold">Jone Doe</a>
                        </div>
                        <span class="mx-1 text-gray-600 text-xs">21 SEP 2015</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Article Card With Image'
            }
        }
    }
</script>