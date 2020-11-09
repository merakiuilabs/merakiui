<template>
    <div class="bg-white font-roboto" id="app">
        <header-component></header-component>
        <main-component></main-component>

        <back-to-top visibleoffset="800">
            <app-button class="bg-gray-800 hover:bg-gray-900 text-white fixed bottom-0 right-0 my-10 mx-10 p-2 rounded-md focus:outline-none" aria-label="Back to top">
                <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
            </app-button>
        </back-to-top>
    </div>
</template>

<script>
import AppButton from "@/components/utilities/AppButton.vue";
import HeaderComponent from "./components/Header";
import MainComponent from "./components/Main";
import BackToTop from "vue-backtotop";

export default {
    components: { AppButton, HeaderComponent, MainComponent, BackToTop },

    data() {
        return {
            og: "https://merakiui.com" + require("./assets/merakiui-og.png"),
        };
    },

    metaInfo() {
        return {
            meta: [
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "Meraki UI Tailwindcss Components" },
                {
                  name: "twitter:description",
                  content:
                    "Beautiful Tailwindcss components that support RTL languages & fully responsive based on Flexbox & CSS Grid.",
                },
                { name: "twitter:image", content: this.og },
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
