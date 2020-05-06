<template>
    <div :id="name | toId">
        <div class="w-ful pattern bg-gray-900">
            <!--
                on the {pattern} class but your pattern background
                We are using https://www.heropatterns.com/ give it a try
             -->
            <div class="px-4 md:px-12 container mx-auto">
                <nav class="py-4 flex justify-between items-center flex-col md:flex-row text-gray-100">
                    <a href="#" class="text-2xl font-semibold">Brand</a>
                    <div class="flex items-center -mx-2 mt-2 md:mt-0">
                        <a href="#" class="px-4 py-1 border-2 border-white font-semibold rounded">Sign in</a>
                        <a href="#" class="px-4 py-2 mx-2 font-semibold bg-black rounded">Sign up</a>
                    </div>
                </nav>
                <div class="flex items-center flex-col md:flex-row mt-12 pb-12">
                    <div class="md:w-1/2">
                        <h1 class="text-4xl font-semibold text-gray-100">Brand</h1>
                        <p class="text-2xl font-semibold text-gray-100">Hello <span class="text-indigo-400">Guest</span>
                        </p>
                        <p class="text-gray-100 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                    <div class="md:w-1/2 flex md:justify-end mt-8 md:mt-0">
                        <div class="max-w-sm bg-white rounded-lg">
                            <div class="p-5 text-center">
                                <h2 class="text-2xl font-semibold text-gray-700 fo">Sign in</h2>
                                <form action="#">
                                    <div class="mt-4">
                                        <input class="bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full"
                                               type="email" placeholder="Email address">
                                        <input class="bg-gray-100 px-4 py-2 border border-gray-300 rounded w-full mt-3"
                                               type="password" placeholder="Password">
                                    </div>
                                    <div class="mt-4 flex items-center justify-between">
                                        <a href="#" class="text-gray-500 text-sm">Forget Password?</a>
                                        <button class="px-4 py-2 font-semibold bg-black rounded text-gray-100">Login</button>
                                    </div>
                                </form>

                            </div>
                        </div>
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
                name: 'Hero With Pattern'
            }
        }
    }
</script>