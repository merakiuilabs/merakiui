<template>
    <div :id="name | toId">
        <div class="bg-white w-full max-w-sm rounded-lg overflow-hidden mx-auto">
            <div class="py-4 px-6">
                <div class="text-center font-bold text-gray-700 text-3xl">Brand</div>
                <div class="mt-1 text-center font-bold text-gray-600 text-xl">Welcome Back</div>
                <div class="mt-1 text-center text-gray-600">Login or create account</div>

                <form>
                    <div class="mt-4 w-full">
                        <input class="w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white" type="email" placeholder="Email Address">
                    </div>
                    <div class="mt-4 w-full">
                        <input class="w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white" type="password" placeholder="Password">
                    </div>
                    <div class="flex justify-between items-center mt-6">
                        <a href="#" class="text-gray-600 text-sm hover:text-gray-500">Forget Password?</a>
                        <button class="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none" type="button">
                            Login
                        </button>
                    </div>
                </form>
            </div>

            <div class="flex items-center justify-center py-4 bg-gray-100 text-center">
                <h1 class="text-gray-600 text-sm">Dont`t have an account? </h1>
                <a href="#" class="text-blue-600 font-bold mx-2 text-sm hover:text-blue-500">Register</a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                name: 'Sign In Form',
            }
        }
    }
</script>