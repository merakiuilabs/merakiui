<template>
    <div class="relative overflow-hidden rounded">
        <pre><code class="px-8 py-6 overflow-hidden overflow-x-scroll text-sm rounded-md 2xl:text-base">{{ code }}</code></pre>

        <div class="absolute top-0 right-0">
            <button class="px-3 py-2 text-gray-600 hover:text-gray-400 focus:outline-none" v-clipboard:success="onCopy" v-clipboard:copy="code">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import hljs from 'highlight.js/lib/core';

hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));
import 'highlight.js/styles/atom-one-dark.css';

export default {
    props: ['code'],
    mounted() {
        this.highlightCode();
    },

    methods: {
        highlightCode() {
            this.$nextTick(() => {
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightBlock(block);
                });
            });
        },

        onCopy() {
            this.$emit("onCopy");
        }
    },
}
</script>
