<template>
    <div class="relative bg-white font-roboto">
        <Nuxt />

        <transition
            leave-active-class="transition duration-300 ease-in transform"
            leave-class="translate-x-0 opacity-100"
            leave-to-class="translate-x-20 opacity-0"
        >
            <div v-show="byMeCoffee" class="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-16">
                <div class="lg:w-[24rem] px-6 lg:px-0">
                    <div class="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
                        <div class="flex flex-wrap items-center justify-between">
                            <a target="_blank" href="https://www.buymeacoffee.com/khatabwedaa/e/54228" class="flex items-center flex-1 w-0">
                                <span class="flex p-2 bg-blue-800 rounded-lg">
                                    <!-- Heroicon name: outline/speakerphone -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                    </svg>
                                </span>

                                <p class="ml-3 font-medium tracking-wide text-white truncate">
                                    Support Meraki UI
                                </p>
                            </a>
                            
                            <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
                                <button @click="byMeCoffee = false" type="button" class="flex p-2 -mr-1 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white">
                                    <span class="sr-only">Dismiss</span>
                                    <!-- Heroicon name: outline/x -->
                                    <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            byMeCoffee: true
        }
    }
};
</script>
