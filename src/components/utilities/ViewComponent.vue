<template>
    <div class="bg-gray-300 border rounded-md overflow-hidden mb-12">
        <div class="bg-white px-4 py-2 border-b">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="text-gray-700 font-medium capitalize md:text-lg">{{ name }}</div>

                <div class="mt-4 md:mt-0">
                    <button @click="rtl =! rtl" class="rounded-md p-1 hover:text-gray-700 hover:bg-gray-400 focus:outline-none" :class="rtl? 'bg-gray-400 text-gray-700' : 'bg-gray-200 text-gray-600'" aria-label="Rtl">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none">
                            <path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="currentColor" />
                            <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="currentColor" />
                        </svg>
                    </button>

                    <button @click="viewCode =! viewCode" class="mx-4 rounded-md p-1 hover:text-gray-700 hover:bg-gray-400 focus:outline-none" :class="viewCode? 'bg-gray-400 text-gray-700' : 'bg-gray-200 text-gray-600'" aria-label="View code snippet">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none">
                            <path d="M13.3252 3.05011L8.66765 20.4323L10.5995 20.9499L15.257 3.56775L13.3252 3.05011Z"/>
                            <path d="M7.61222 18.3608L8.97161 16.9124L8.9711 16.8933L3.87681 12.1121L8.66724 7.00798L7.20892 5.63928L1.0498 12.2017L7.61222 18.3608Z"/>
                            <path d="M16.3883 18.3608L15.0289 16.9124L15.0294 16.8933L20.1237 12.1121L15.3333 7.00798L16.7916 5.63928L22.9507 12.2017L16.3883 18.3608Z"/>
                        </svg>
                    </button>

                    <button v-clipboard:success="onCopy" v-clipboard:copy="code" class="bg-gray-200 rounded-md p-1 text-gray-600 hover:text-gray-700 hover:bg-gray-400 focus:outline-none" aria-label="Copy">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center">
            <div class="w-full relative" :dir="rtl? 'rtl' : 'ltr'">
                <slot class="w-full h-full absolute top-0 left-0" name="component"></slot>

                <transition name="fade">
                    <div v-if="copied">
                        <div class="w-full h-full absolute top-0 left-0 z-10">
                            <div class="bg-gray-300 h-full flex items-center justify-center">
                                <p class="text-gray-700 text-2xl">Copied!</p>
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
import CodeSnippet from "./CodeSnippet";

export default {
    props: ['name' , 'code'],

    components: {
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