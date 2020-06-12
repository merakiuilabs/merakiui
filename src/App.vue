<template>
    <div class="bg-white font-roboto" id="app">
        <Header></Header>

        <main class="container mx-auto px-6" id="main">
            <div class="mt-16 text-center">
                <h1 class="text-xl md:text-3xl text-gray-800 font-medium">Discover new components. Build amazing things 🔥</h1>
            </div>

            <div class="max-w-2xl mx-auto mt-6">
                <span class="ml-2" v-for="route in routes" :key="route.path">
                    <router-link class="inline-block px-3 py-1 rounded text-sm font-medium bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-700 hover:text-gray-200" :to="route.path">
                        {{route.name}}
                    </router-link>
                </span>
            </div>

            <div class="mt-20">
                <router-view></router-view>
            </div>
        </main>

        <back-to-top visibleoffset="800">
            <button class="bg-gray-800 text-white fixed bottom-0 right-0 my-10 mx-10 p-2 rounded-md focus:outline-none" aria-label="Back to top">
                <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
            </button>
        </back-to-top>
    </div>
</template>

<script>
import Header from "./components/Header";
import BackToTop from 'vue-backtotop';

export default {
    components: {
        Header,
        BackToTop
    },

    data() {
        return {
            routes: this.$router.options.routes,
        };
    },
    
    mounted() {
        this.$ga.page('/');
    }
}
</script>

<style src="./assets/css/app.css"></style>
