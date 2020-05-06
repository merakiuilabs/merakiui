<template>
    <div :id="name | toId">
        <div class="max-w-2xl mx-auto px-8 py-4 bg-white rounded-lg shadow-md">
            <div class="flex justify-between items-center">
                <span class="font-light text-gray-600">Mar 10, 2019</span>
                <a class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">Design</a>
            </div>

            <div class="mt-2">
                <a class="text-2xl text-gray-700 font-bold hover:text-gray-600 hover:underline" href="#">Accessibility tools for
                    designers and developers</a>
                <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita
                    dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!</p>
            </div>
            
            <div class="flex justify-between items-center mt-4">
                <a class="text-blue-600 hover:underline" href="#">Read more</a>
                <div>
                    <a class="flex items-center" href="#">
                        <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                             src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                             alt="avatar">
                        <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Article Card',
            }
        }
    }
</script>
