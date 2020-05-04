<template>
    <div class="bg-gray-300 border rounded-md overflow-hidden">
        <div class="bg-white p-4 border-b">
            <div class="flex justify-between items-center">
                <div class="text-gray-700 font-medium text-lg">{{ name }}</div>
               <div>
                    <button @click="viewCode =! viewCode" class="mx-4 bg-gray-200 rounded-md p-1 text-gray-600 hover:text-gray-700 hover:bg-gray-400 focus:outline-none">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3252 3.05011L8.66765 20.4323L10.5995 20.9499L15.257 3.56775L13.3252 3.05011Z"/>
                            <path d="M7.61222 18.3608L8.97161 16.9124L8.9711 16.8933L3.87681 12.1121L8.66724 7.00798L7.20892 5.63928L1.0498 12.2017L7.61222 18.3608Z"/>
                            <path d="M16.3883 18.3608L15.0289 16.9124L15.0294 16.8933L20.1237 12.1121L15.3333 7.00798L16.7916 5.63928L22.9507 12.2017L16.3883 18.3608Z"/>
                        </svg>
                    </button>
                    <button v-clipboard:copy="code" class="bg-gray-200 rounded-md p-1 text-gray-600 hover:text-gray-700 hover:bg-gray-400 focus:outline-none">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H15.9595C16.5118 13 16.9595 12.5523 16.9595 12C16.9595 11.4477 16.5118 11 15.9595 11H8Z"/>
                            <path d="M8.04053 15.0665C7.48824 15.0665 7.04053 15.5142 7.04053 16.0665C7.04053 16.6188 7.48824 17.0665 8.04053 17.0665H16C16.5523 17.0665 17 16.6188 17 16.0665C17 15.5142 16.5523 15.0665 16 15.0665H8.04053Z"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 5H5L5 19H19V5H17V6C17 7.65685 15.6569 9 14 9H10C8.34315 9 7 7.65685 7 6V5ZM9 5V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V5H9Z"/>
                        </svg>
                    </button>
               </div>
            </div>
        </div>

        <div class="flex justify-center items-center p-6">
            <div class="w-full">
                <slot name="component"></slot> 
            </div>
        </div>

        <div v-if="viewCode" class="flex justify-center items-center p-6">
            <code-snippet :code="code"></code-snippet>
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
            viewCode: false
        }
    }
}
</script>