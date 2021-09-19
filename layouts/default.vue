<template>
    <div class="bg-white">
        <Nuxt />
        <footer-component />

        <back-to-top visibleoffset="800">
            <app-button class="fixed bottom-0 right-0 p-2 mx-5 my-10 text-white bg-gray-800 rounded-md lg:mx-10 hover:bg-gray-900 focus:outline-none" aria-label="Back to top">
                <svg class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
            </app-button>
        </back-to-top>
    </div>
</template>

<script>
import AppButton from "~/components/utilities/AppButton.vue";
import FooterComponent from "~/components/Footer";
import BackToTop from "vue-backtotop";

export default {
    components: { AppButton, FooterComponent, BackToTop }
};
</script>
