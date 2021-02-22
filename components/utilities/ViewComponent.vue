<template>
    <div class="mb-12 overflow-hidden bg-gray-300 border rounded-lg dark:bg-gray-600 dark:border-gray-600">
        <div class="px-4 py-2 bg-white border-b dark:bg-gray-800 dark:border-gray-600">
            <div class="flex flex-col items-center justify-between md:flex-row">
                <div class="flex items-center">
                    <h3 class="font-medium text-gray-700 capitalize dark:text-gray-200 md:text-lg">{{ name }}</h3>
                </div>

                <div class="mt-4 md:mt-0">
                    <app-button @click="rtl =! rtl" class="p-1 rounded-md hover:text-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500 dark:hover:text-gray-200 focus:outline-none" :class="rtl? 'bg-gray-400 text-gray-700 dark:bg-gray-500 dark:text-gray-200' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200'" aria-label="Rtl">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none">
                            <path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="currentColor" />
                            <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="currentColor" />
                        </svg>
                    </app-button>

                    <app-button @click="viewCode =! viewCode" class="p-1 mx-4 rounded-md hover:text-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500 dark:hover:text-gray-200 focus:outline-none" :class="viewCode? 'bg-gray-400 text-gray-700 dark:bg-gray-500 dark:text-gray-200' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200'" aria-label="View code snippet">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </app-button>

                    <app-button v-clipboard:success="onCopy" v-clipboard:copy="code" class="p-1 text-gray-600 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200 hover:text-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500 dark:hover:text-gray-200 focus:outline-none" aria-label="Copy">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </app-button>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center">
            <div class="relative w-full" :dir="rtl? 'rtl' : 'ltr'">
                <slot class="absolute top-0 left-0 w-full h-full" name="component"></slot>

                <transition name="fade">
                    <div v-if="copied">
                        <div class="absolute top-0 left-0 z-50 w-full h-full">
                            <div class="flex items-center justify-center h-full bg-gray-300 dark:bg-gray-700">
                                <p class="text-2xl text-gray-700 dark:text-gray-200">Copied!</p>
                            </div>
                        </div>
                    </div>
                </transition>
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