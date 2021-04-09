<template>
    <div :class="{ 'dark' : darkMode }">
        <div class="bg-white dark:bg-gray-900 font-roboto">
            <header-component></header-component>
            <main-component></main-component>

            <back-to-top visibleoffset="800">
                <app-button class="fixed bottom-0 right-0 p-2 mx-10 my-10 text-white bg-gray-800 rounded-md hover:bg-gray-900 dark:hover:bg-gray-700 focus:outline-none" aria-label="Back to top">
                    <svg class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
                    </svg>
                </app-button>
            </back-to-top>

            <app-button @click="darkMode = !darkMode" class="fixed bottom-0 right-0 z-50 p-2 mx-10 my-24 text-white bg-gray-800 rounded-md hover:bg-gray-900 dark:hover:bg-gray-700 focus:outline-none" aria-label="Color Mode">
                <svg v-if="darkMode" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                </svg>
                <svg v-if="!darkMode" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            </app-button>
        </div>
    </div>
</template>

<script>
import AppButton from "~/components/utilities/AppButton.vue";
import HeaderComponent from "~/components/Header";
import MainComponent from "~/components/Main";
import BackToTop from "vue-backtotop";

export default {
    components: { AppButton, HeaderComponent, MainComponent, BackToTop },

    data() {
        return {
            darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
        };
    },

    watch: {
      darkMode() {
        localStorage.setItem("darkMode", this.darkMode);
        console.log('Night Mode: ' + this.darkMode);
      }
	},
};
</script>
