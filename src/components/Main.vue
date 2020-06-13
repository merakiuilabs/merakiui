<template>
    <div class="container mx-auto px-6" id="main">
        <div class="py-16 text-center">
            <h1 class="text-xl md:text-3xl text-gray-800 font-medium">Discover new components. Build amazing things 🔥</h1>

            <div class="max-w-2xl mx-auto">
                <div class="mt-4">
                    <span v-for="i in categories" :key="i.name">
                        <button @click="category = i.name" class="ml-2 mt-2 px-3 py-1 cursor-pointer hover:bg-gray-700 hover:text-gray-200 rounded text-sm focus:outline-none" :class="i.name === category? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'">{{ i.name }}</button>
                    </span>
                </div>
            </div>

            <p class="mt-8 text-gray-700">Header components require simple <span class="font-semibold">- don't panic please 😎 -</span> <a class="text-blue-600 hover:underline" href="https://gist.github.com/Miaababikir/052e31b345781c0f73180b80a285781b" target="_blank">configuration</a></p>
        </div>

        <div class="w-full max-w-5xl mx-auto">
            <div class="mb-16" v-for="category in list" :key="category.name">
                <h1 class="text-2xl text-gray-800 font-semibold mb-6 capitalize" v-text="category.name"></h1>

                <view-component v-for="component in category.components" :key="component.name" :name="component.name" class="mt-6">
                    <div slot="component">
                        <div class="my-6">
                            <component :is="component.name | toId"></component>
                        </div>
                    </div>
                </view-component>
            </div>
        </div>
    </div>
</template>