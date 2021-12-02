<template>
    <div class="mb-16">
        <div class="flex flex-col items-center justify-between md:flex-row">
            <div class="flex items-center">
                <h3 class="text-gray-700 capitalize md:text-lg">{{ name }} </h3>
            </div>

            <div class="flex items-center mt-4 space-x-4 md:mt-0">
                <app-button @click="rtl =! rtl" class="p-1 rounded-md hover:text-gray-700 hover:bg-gray-400 focus:outline-none" :class="rtl? 'bg-gray-400 text-gray-700' : 'bg-gray-200 text-gray-600'" aria-label="Rtl">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none">
                        <path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="currentColor" />
                        <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="currentColor" />
                    </svg>
                </app-button>

                <app-button @click="dark =! dark" class="p-1 text-gray-600 bg-gray-200 rounded-md hover:text-gray-700 hover:bg-gray-400 focus:outline-none" aria-label="dark mode button">
                    <svg v-if="dark" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg v-if="!dark" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </app-button>

                <app-button @click="viewCode =! viewCode" class="p-1 rounded-md hover:text-gray-700 hover:bg-gray-400 focus:outline-none" :class="viewCode? 'bg-gray-400 text-gray-700' : 'bg-gray-200 text-gray-600'" aria-label="View code snippet">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </app-button>

                <app-button v-clipboard:success="onCopy" v-clipboard:copy="code" class="p-1 text-gray-600 bg-gray-200 rounded-md hover:text-gray-700 hover:bg-gray-400 focus:outline-none" aria-label="Copy">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </app-button>
            </div>
        </div>

        <div :class="{ 'dark': dark }">
            <div class="flex items-center justify-center mt-4 overflow-hidden bg-gray-100 border border-gray-100 rounded-lg dark:bg-gray-900 dark:border-gray-900">
                <div class="relative w-full" :dir="rtl? 'rtl' : 'ltr'">
                    <slot class="absolute top-0 left-0 w-full h-full" name="component"></slot>

                    <transition name="fade">
                        <div v-if="copied">
                            <div class="absolute top-0 left-0 z-50 w-full h-full">
                                <div class="flex items-center justify-center h-full bg-gray-200 dark:bg-gray-700">
                                    <p class="text-2xl text-gray-700 dark:text-gray-200">Copied!</p>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>

        <div v-if="viewCode">
            <code-snippet @onCopy="onCopy" :code="code"></code-snippet>
        </div>
    </div>
</template>

<script>
import AppButton from "~/components/utilities/AppButton.vue";
import CodeSnippet from "./CodeSnippet";

export default {
    props: ['name' , 'code'],

    components: {
        AppButton,
        CodeSnippet
    },

    data() {
        return {
            viewCode: false,
            dark: false,
            rtl: false,
            copied: false,
        }
    },
    
    methods: {
        onCopy() {
            this.copied = ! this.copied;

            setTimeout(() => {
                this.copied = false
            }, 800);
        },
    },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>