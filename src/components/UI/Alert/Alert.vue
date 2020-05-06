<template>
    <div :id="name | toId">
        <div class="flex flex-col items-center justify-center">
            <div class="flex bg-white rounded-lg overflow-hidden">
                <div class="flex justify-center items-center bg-green-500 w-20">
                    <div class="p-3">
                        <svg class="fill-current text-white h-8 w-8 md:h-10 md:h-10" viewBox="0 0 40 40" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                                  fill="white"/>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center px-4 py-3">
                    <span class="mx-2 text-gray-600 text-sm md:text-base">Your  account was registered , confirm your email !</span>
                </div>
            </div>

            <div class="flex bg-white rounded-lg overflow-hidden mt-4">
                <div class="flex justify-center items-center bg-blue-500 w-20">
                    <div class="p-3">
                        <svg class="fill-current text-white h-8 w-8 md:h-10 md:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center px-4 py-3">
                    <span class="mx-2 text-gray-600 text-sm md:text-base">Your  account was registered , confirm your email !</span>
                </div>
            </div>

            <div class="flex bg-white rounded-lg overflow-hidden mt-4">
                <div class="flex justify-center items-center bg-yellow-500 w-20">
                    <div class="p-3">
                        <svg class="fill-current text-white h-8 w-8 md:h-10 md:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center px-4 py-3">
                    <span class="mx-2 text-gray-600 text-sm md:text-base">Your  account was registered , confirm your email !</span>
                </div>
            </div>
            <div class="flex bg-white rounded-lg overflow-hidden mt-4">
                <div class="flex justify-center items-center bg-red-500 w-20">
                    <div class="p-3">
                        <svg class="fill-current text-white h-8 w-8 md:h-10 md:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" fill="white"/>
                        </svg>

                    </div>
                </div>
                <div class="flex items-center px-4 py-3">
                    <span class="mx-2 text-gray-600 text-sm md:text-base">Your  account was registered , confirm your email !</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Alert',
            }
        }
    }
</script>