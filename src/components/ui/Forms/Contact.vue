<template>
    <view-component :name="name" :code="code">
        <div class="px-3 py-6" slot="component">
            <div class="max-w-2xl w-full mx-auto bg-white dark:bg-gray-800 rounded-md shadow-md px-6 py-4">
                <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Get in touch</h2>
                <p class="text-gray-600 dark:text-gray-400 text-center mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    <a href="#" class="flex flex-col items-center py-3 px-4 text-gray-700 dark:text-gray-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-500">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>

                        <span class="mt-2">121 Street, NY</span>
                    </a>

                    <a href="#" class="flex flex-col items-center py-3 px-4 text-gray-700 dark:text-gray-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-500">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>

                        <span class="mt-2">+2499999666600</span>
                    </a>

                    <a href="#" class="flex flex-col items-center py-3 px-4 text-gray-700 dark:text-gray-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-500">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>

                        <span class="mt-2">example@example.com</span>
                    </a>
                </div>
                
                <div class=" mt-6">
                    <div class="md:flex items-center -mx-2">
                        <div class="mx-2 w-full">
                            <label class="block text-gray-600 dark:text-gray-200 text-sm font-medium mb-2">Name</label>

                            <input class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text">
                        </div>

                        <div class="mx-2 w-full mt-4 md:mt-0">
                            <label class="block text-gray-600 dark:text-gray-200 text-sm font-medium mb-2">E-mail</label>

                            <input class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email">
                        </div>
                    </div>

                    <div class="mt-4 w-full">
                        <label class="block text-gray-600 dark:text-gray-200 text-sm font-medium mb-2">Message</label>

                        <textarea class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full h-40 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                    </div>

                    <div class="flex justify-center mt-6">
                        <button class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
                    </div>
                </div>
            </div>
        </div>   
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Contact',
                code: `
        <div class="max-w-2xl w-full mx-auto bg-white dark:bg-gray-800 rounded-md shadow-md px-6 py-4">
            <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Get in touch</h2>
            <p class="text-gray-600 dark:text-gray-400 text-center mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                <a href="#" class="flex flex-col items-center py-3 px-4 text-gray-700 dark:text-gray-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-500">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>

                    <span class="mt-2">121 Street, NY</span>
                </a>

                <a href="#" class="flex flex-col items-center py-3 px-4 text-gray-700 dark:text-gray-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-500">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>

                    <span class="mt-2">+2499999666600</span>
                </a>

                <a href="#" class="flex flex-col items-center py-3 px-4 text-gray-700 dark:text-gray-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-500">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>

                    <span class="mt-2">example@example.com</span>
                </a>
            </div>
            
            <div class=" mt-6">
                <div class="md:flex items-center -mx-2">
                    <div class="mx-2 w-full">
                        <label class="block text-gray-600 dark:text-gray-200 text-sm font-medium mb-2">Name</label>

                        <input class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text">
                    </div>

                    <div class="mx-2 w-full mt-4 md:mt-0">
                        <label class="block text-gray-600 dark:text-gray-200 text-sm font-medium mb-2">E-mail</label>

                        <input class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email">
                    </div>
                </div>

                <div class="mt-4 w-full">
                    <label class="block text-gray-600 dark:text-gray-200 text-sm font-medium mb-2">Message</label>

                    <textarea class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full h-40 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                </div>

                <div class="flex justify-center mt-6">
                    <button class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
                </div>
            </div>
        </div>`
            }
        }
    }
</script>