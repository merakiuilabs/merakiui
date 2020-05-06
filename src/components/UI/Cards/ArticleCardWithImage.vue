<template>
    <div :id="name | toId">
        <div class="max-w-2xl mx-auto bg-white overflow-hidden shadow rounded-lg">
            <div>
                <img class="w-full object-cover h-64 shadow-lg" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                     alt="Article">
            </div>
            <div class="p-6">
                <div>
                    <span class="text-blue-600 text-xs uppercase">Product</span>
                    <h2 class="text-gray-800 font-semibold text-xl mt-2">I Built A Successful Blog In One Year</h2>
                    <p class="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                </div>
                <div class="flex mt-4 items-center">
                    <img class="h-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                         alt="Avatar">
                    <div class="flex items-center mx-4">
                        <a href="#" class="text-gray-700 font-semibold">Jone Doe</a>
                        <span class="text-gray-600 mx-1 text-xs">21 SEP 2015</span>
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