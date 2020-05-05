<template>
    <div class="bg-gray-300 border rounded-md overflow-hidden">
        <div class="bg-white p-4 border-b">
            <div class="flex justify-between items-center">
                <div class="text-gray-700 font-medium text-sm md:text-lg">{{ name }}</div>
               <div>
                    <button @click="viewCode =! viewCode" class="mx-4 bg-gray-200 rounded-md p-1 text-gray-600 hover:text-gray-700 hover:bg-gray-400 focus:outline-none">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3252 3.05011L8.66765 20.4323L10.5995 20.9499L15.257 3.56775L13.3252 3.05011Z"/>
                            <path d="M7.61222 18.3608L8.97161 16.9124L8.9711 16.8933L3.87681 12.1121L8.66724 7.00798L7.20892 5.63928L1.0498 12.2017L7.61222 18.3608Z"/>
                            <path d="M16.3883 18.3608L15.0289 16.9124L15.0294 16.8933L20.1237 12.1121L15.3333 7.00798L16.7916 5.63928L22.9507 12.2017L16.3883 18.3608Z"/>
                        </svg>
                    </button>
                    <button v-clipboard:copy="code" class="bg-gray-200 rounded-md p-1 text-gray-600 hover:text-gray-700 hover:bg-gray-400 focus:outline-none">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                    </button>
               </div>
            </div>
        </div>

        <div class="flex justify-center items-center p-3 sm:p-6">
            <div class="w-full">
                <slot name="component"></slot>
            </div>
        </div>

        <div v-if="viewCode">
            <code-snippet :code="code"></code-snippet>
        </div>
    </div>
</template>

<script>

    import CodeSnippet from "./CodeSnippet";
    let beautify_html = require('js-beautify').html;

export default {
    props: ['name'],

    components: {
        CodeSnippet
    },

    data() {
        return {
            viewCode: false,
            code: null
        }
    },
    created() {
        this.$nextTick(() => {
            let id = this.$options.filters.toId(this.name);
            this.code = beautify_html(document.getElementById(id).innerHTML);
        });
    },
}
</script>