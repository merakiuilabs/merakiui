<template>
    <view-component :name="name" :code="code">
        <div class="px-3 pt-6 pb-96 flex justify-end md:justify-center" slot="component">
            <div class="relative">
                <!-- Dropdown toggle button -->
                <button @click="dropdownOpen = !dropdownOpen" class="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                    <svg class="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                </button>

                <!-- Dropdown menu -->
                <div v-show="dropdownOpen" class="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20">
                    <div class="py-2">
                        <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                            <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
                            <p class="text-gray-600 text-sm mx-2">
                                <span class="font-bold" href="#">Sara Salah</span> replied on the <span class="font-bold text-blue-500" href="#">Upload Image</span> artical . 2m
                            </p>
                        </a>
                        <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                            <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar">
                            <p class="text-gray-600 text-sm mx-2">
                                <span class="font-bold" href="#">Slick Net</span> start following you . 45m
                            </p>
                        </a>
                        <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                            <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
                            <p class="text-gray-600 text-sm mx-2">
                                <span class="font-bold" href="#">Jane Doe</span> Like Your reply on <span class="font-bold text-blue-500" href="#">Test with TDD</span> artical . 1h
                            </p>
                        </a>
                        <a href="#" class="flex items-center px-4 py-3 hover:bg-gray-100 -mx-2">
                            <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80" alt="avatar">
                            <p class="text-gray-600 text-sm mx-2">
                                <span class="font-bold" href="#">Abigail Bennett</span> start following you . 3h
                            </p>
                        </a>
                    </div>
                    <a href="#" class="block bg-gray-800 text-white text-center font-bold py-2">See all notifications</a>
                </div>
            </div>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Notification',
                code: `
        <div class="relative">
            <!-- Dropdown toggle button -->
            <button class="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                <svg class="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
            </button>

            <!-- Dropdown menu -->
            <div class="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20" style="width:20rem;">
                <div class="py-2">
                    <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                        <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
                        <p class="text-gray-600 text-sm mx-2">
                            <span class="font-bold" href="#">Sara Salah</span> replied on the <span class="font-bold text-blue-500" href="#">Upload Image</span> artical . 2m
                        </p>
                    </a>
                    <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                        <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar">
                        <p class="text-gray-600 text-sm mx-2">
                            <span class="font-bold" href="#">Slick Net</span> start following you . 45m
                        </p>
                    </a>
                    <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                        <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
                        <p class="text-gray-600 text-sm mx-2">
                            <span class="font-bold" href="#">Jane Doe</span> Like Your reply on <span class="font-bold text-blue-500" href="#">Test with TDD</span> artical . 1h
                        </p>
                    </a>
                    <a href="#" class="flex items-center px-4 py-3 hover:bg-gray-100 -mx-2">
                        <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80" alt="avatar">
                        <p class="text-gray-600 text-sm mx-2">
                            <span class="font-bold" href="#">Abigail Bennett</span> start following you . 3h
                        </p>
                    </a>
                </div>
                <a href="#" class="block bg-gray-800 text-white text-center font-bold py-2">See all notifications</a>
            </div>
        </div>`,
                dropdownOpen: true
            }
        }
    }
</script>
