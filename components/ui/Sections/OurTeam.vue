<template>
    <view-component :name="name" :code="code">
        <div class="py-6" slot="component">
            <section class="container p-6 mx-auto bg-white dark:bg-gray-800">
                <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Our Team</h2>

                <div class="flex items-center justify-center">
                    <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div class="w-full max-w-xs text-center">
                            <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar"/>

                            <div class="mt-2">
                                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
                                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                            </div>
                        </div>

                        <div class="w-full max-w-xs text-center">
                            <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                            <div class="mt-2">
                                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
                            </div>
                        </div>

                        <div class="w-full max-w-xs text-center">
                            <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar"/>

                            <div class="mt-2">
                                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>
                            </div>
                        </div>

                        <div class="w-full max-w-xs text-center">
                            <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                            <div class="mt-2">
                                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3>
                                <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Our Team',
                code: `
        <section class="container p-6 mx-auto bg-white dark:bg-gray-800">
            <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Our Team</h2>

            <div class="flex items-center justify-center">
                <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="w-full max-w-xs text-center">
                        <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar"/>

                        <div class="mt-2">
                            <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
                            <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                        </div>
                    </div>

                    <div class="w-full max-w-xs text-center">
                        <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                        <div class="mt-2">
                            <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                            <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
                        </div>
                    </div>

                    <div class="w-full max-w-xs text-center">
                        <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar"/>

                        <div class="mt-2">
                            <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                            <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>
                        </div>
                    </div>

                    <div class="w-full max-w-xs text-center">
                        <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                        <div class="mt-2">
                            <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3>
                            <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
            }
        }
    }
</script>