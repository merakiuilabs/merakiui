<template>
    <div class="rounded overflow-hidden">
        <pre><code class="px-8 py-6 rounded-md overflow-x-scroll overflow-hidden">{{ code }}</code></pre>
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
    },
}
</script>
