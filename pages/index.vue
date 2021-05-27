<template>
    <div class="bg-white dark:bg-gray-900 font-roboto">
        <header-component />
        <main-component />
        <footer-component />

        <back-to-top visibleoffset="800">
            <app-button class="fixed bottom-0 right-0 p-2 mx-10 my-10 text-white bg-gray-800 rounded-md hover:bg-gray-900 dark:hover:bg-gray-700 focus:outline-none" aria-label="Back to top">
                <svg class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
            </app-button>
        </back-to-top>
    </div>
</template>

<script>
import AppButton from "~/components/utilities/AppButton.vue";
import HeaderComponent from "~/components/Header";
import MainComponent from "~/components/Main";
import FooterComponent from "~/components/Footer";
import BackToTop from "vue-backtotop";

export default {
    components: { AppButton, HeaderComponent, MainComponent, FooterComponent, BackToTop }
};
</script>
