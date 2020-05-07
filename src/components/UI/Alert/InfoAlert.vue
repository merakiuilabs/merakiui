<template>
    <div :id="name | toId">
        <div class="flex max-w-md mx-auto bg-white rounded-lg overflow-hidden">
            <div class="flex justify-center items-center w-16 py-3 bg-blue-500">
                 <svg class="h-8 w-8 fill-current text-white" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
                </svg>
            </div>
            
            <div class="-mx-3 py-3 px-4">
                <div class="mx-3">
                    <span class="text-blue-500 font-semibold text-xl">Info</span>
                    <p class="text-gray-600">This Channel archived by owner !</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Info Alert',
            }
        }
    }
</script>