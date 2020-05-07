<template>
    <div :id="name | toId">
        <div class="pattern bg-gray-900">
            <div class="container mx-auto px-6">
                <nav class="flex flex-col py-2 sm:flex-row sm:justify-between sm:items-center">
                    <div>
                        <a class="text-2xl font-semibold text-white hover:text-gray-300">Brand</a>
                    </div>

                    <div class="flex items-center -mx-2 mt-2 sm:mt-0">
                        <a class="px-3 py-1 border-2 font-semibold rounded text-sm text-white hover:bg-gray-700">Sign In</a>
                        <a class="mx-2 px-3 py-2 font-semibold bg-black rounded text-sm text-white hover:bg-gray-800">Sign Up</a>
                    </div>
                </nav>

                <div class="flex items-center flex-col py-6 md:py-0 md:flex-row md:h-96">
                    <div class="md:w-1/2">
                        <h1 class="text-4xl font-semibold text-gray-100">Brand</h1>
                        <p class="text-2xl font-semibold text-gray-100">
                            Hello <span class="text-indigo-400">Guest</span>
                        </p>
                        <p class="text-gray-100 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>

                    <div class="md:w-1/2 flex md:justify-end mt-8 md:mt-0">
                        <div class="max-w-sm bg-white rounded-lg">
                            <div class="p-5 text-center">
                                <h2 class="text-2xl font-semibold text-gray-700 fo">Sign In</h2>

                                <form action="#">
                                    <div class="mt-4">
                                        <input class="w-full py-2 px-4 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:bg-white" type="email" placeholder="Email address">
                                        <input class="w-full mt-4 py-2 px-4 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:bg-white" type="password" placeholder="Password">
                                    </div>

                                    <div class="mt-4 flex items-center justify-between">
                                        <a class="text-gray-600 text-sm hover:underline">Forget Password?</a>

                                        <button class="px-4 py-2 font-semibold bg-gray-900 rounded text-white hover:bg-gray-800">Login</button>
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