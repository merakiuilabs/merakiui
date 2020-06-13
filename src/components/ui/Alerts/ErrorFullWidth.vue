<template>
    <div :id="name | toId">
        <div class="w-full bg-red-500 text-white">
            <div class="flex justify-between items-center container mx-auto py-4 px-6">
                <div class="flex">
                    <svg viewBox="0 0 40 40" class="h-6 w-6 fill-current">
                       <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
                    </svg>

                    <p class="mx-3">Validation Error.</p>
                </div>

                <button class="rounded-md p-1 hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Error Full Width',
            }
        }
    }
</script>