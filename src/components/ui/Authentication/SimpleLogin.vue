<template>
     <view-component :name="name" :code="code">
        <div class="px-3 py-6" slot="component">
            <div class="bg-white w-full max-w-sm rounded-lg shadow-md overflow-hidden mx-auto">
                <div class="py-4 px-6">
                    <h2 class="text-center font-bold text-gray-700 text-3xl">Brand</h2>

                    <h3 class="mt-1 text-center font-medium text-gray-600 text-xl">Welcome Back</h3>

                    <p class="mt-1 text-center text-gray-500">Login or create account</p>

                    <form>
                        <div class="mt-4 w-full">
                            <input class="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email Address" aria-label="Email Address">
                        </div>

                        <div class="mt-4 w-full">
                            <input class="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password">
                        </div>

                        <div class="flex justify-between items-center mt-4">
                            <a href="#" class="text-gray-600 text-sm hover:text-gray-500">Forget Password?</a>

                            <button class="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none" type="button">
                                Login
                            </button>
                        </div>
                    </form>
                </div>

                <div class="flex items-center justify-center py-4 bg-gray-100 text-center">
                    <span class="text-gray-600 text-sm">Don't have an account? </span>
                    
                    <a href="#" class="text-blue-600 font-bold mx-2 text-sm hover:text-blue-500">Register</a>
                </div>
            </div>
        </div>
     </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Simple Login',
                code: `
        <div class="bg-white w-full max-w-sm rounded-lg shadow-md overflow-hidden mx-auto">
            <div class="py-4 px-6">
                <h2 class="text-center font-bold text-gray-700 text-3xl">Brand</h2>

                <h3 class="mt-1 text-center font-medium text-gray-600 text-xl">Welcome Back</h3>

                <p class="mt-1 text-center text-gray-500">Login or create account</p>

                <form>
                    <div class="mt-4 w-full">
                        <input class="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email Address" aria-label="Email Address">
                    </div>

                    <div class="mt-4 w-full">
                        <input class="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password">
                    </div>

                    <div class="flex justify-between items-center mt-4">
                        <a href="#" class="text-gray-600 text-sm hover:text-gray-500">Forget Password?</a>

                        <button class="py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none" type="button">
                            Login
                        </button>
                    </div>
                </form>
            </div>

            <div class="flex items-center justify-center py-4 bg-gray-100 text-center">
                <span class="text-gray-600 text-sm">Don't have an account? </span>
                
                <a href="#" class="text-blue-600 font-bold mx-2 text-sm hover:text-blue-500">Register</a>
            </div>
        </div>`
            }
        }
    }
</script>