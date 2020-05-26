<template>
        <div class="px-3" :id="name | toId">
            <div class="flex flex-col max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex-row md:h-48">
                <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700">
                    <div class="py-6 px-6 md:px-8 md:py-0">
                        <h2 class="text-gray-700 text-lg font-bold md:text-gray-100">Sign Up For <span class="text-blue-600 md:text-blue-300">Project</span> Updates</h2>
                        <p class="mt-2 text-gray-600 text-sm md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
                    </div>
                </div>
                <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
                    <form>
                        <div class="flex flex-col rounded-lg overflow-hidden lg:flex-row">
                            <input class="py-3 px-6 bg-gray-200 text-gray-700 outline-none placeholder-gray-500 focus:bg-gray-300" type="text" name="email" placeholder="Enter your email">
                            <button class="py-3 px-4 bg-gray-700 text-gray-100 text-sm font-semibold uppercase hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
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