<template>
    <div class="bg-white font-roboto" id="app">
        <Header></Header>

        <main class="container mx-auto px-6" id="main">
            <div class="mt-16 text-center">
                <h1 class="text-xl md:text-3xl text-gray-800 font-medium">
                    Discover new components. Build amazing things 🔥
                </h1>
            </div>

            <div class="max-w-2xl mx-auto mt-4">
                <div class="flex flex-wrap items-center justify-center">
                    <span class="ml-2" v-for="route in routes" :key="route.path">
                        <span v-if="route.path != '/'">
                            <router-link class="inline-block mt-2 px-3 py-1 rounded text-sm cursor-pointer hover:bg-gray-700 hover:text-gray-200" :class="currentPage == route.path ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'" :to="route.path">
                                {{ route.name }}
                            </router-link>
                        </span>
                    </span>
                </div>

                <p class="mt-8 text-gray-700 text-center">
                    Headers components require simple <span class="font-semibold">- don't panic please 😎 -</span>
                    <a href="https://gist.github.com/Miaababikir/052e31b345781c0f73180b80a285781b" target="_blank" class="text-blue-600 hover:underline">configuration</a>
                </p>
            </div>

            <div class="mt-16">
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
import BackToTop from "vue-backtotop";

export default {
    components: {
        Header,
        BackToTop,
    },

    computed: {
        currentPage() {
            return this.$route.path;
        },
    },

    data() {
        return {
            routes: this.$router.options.routes,
            og: "https://merakiui.com" + require("./assets/merakiui-og.png"),
        };
    },

    metaInfo() {
        return {
            meta: [
              // Twitter Card
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "Meraki UI Tailwindcss Components" },
                {
                  name: "twitter:description",
                  content:
                    "Beautiful Tailwindcss components that support RTL languages & fully responsive based on Flexbox & CSS Grid.",
                },
                // image must be an absolute path
                { name: "twitter:image", content: this.og },
                // Facebook OpenGraph
                { property: "og:title", content: "Meraki UI Tailwindcss Components" },
                { property: "og:site_name", content: "Meraki UI" },
                { property: "og:type", content: "website" },
                { property: "og:image", content: this.og },
                {
                  property: "og:description",
                  content:
                    "Beautiful Tailwindcss components that support RTL languages & fully responsive based on Flexbox & CSS Grid.",
                },
            ],
        };
    },

    mounted() {
        this.$ga.page("/");
    },
};
</script>

<style src="./assets/css/app.css"></style>
