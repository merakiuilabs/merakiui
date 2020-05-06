<template>
        <div :id="name | toId">
            <div class="flex flex-col max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex-row md:h-56">
                <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700">
                    <div class="py-6 px-8 md:py-0">
                        <h2 class="text-gray-700 text-2xl font-bold md:text-gray-100">Sign Up For Project Updates</h2>
                        <p class="mt-2 text-gray-600 md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
                    </div>
                </div>
                <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
                    <form>
                        <div class="flex flex-col rounded-lg overflow-hidden lg:flex-row">
                            <input class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" type="text" name="email" placeholder="Enter your email">
                            <button class="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>   
</template>

<script>

export default {
    data() {
        return {
            name: 'Newsletter Form',
        }
    }
}
</script>