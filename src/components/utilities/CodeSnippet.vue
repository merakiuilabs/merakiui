<template>
    <div class="relative rounded overflow-hidden">
        <pre><code class="px-8 py-6 rounded-md overflow-x-scroll overflow-hidden text-sm">{{ code }}</code></pre>

        <div class="absolute right-0 top-0">
            <button class="px-3 py-2 text-gray-600 hover:text-gray-400 focus:outline-none" v-clipboard:success="onCopy" v-clipboard:copy="code">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
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
