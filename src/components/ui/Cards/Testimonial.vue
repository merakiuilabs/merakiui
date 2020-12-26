<template>
    <view-component :name="name" :code="code">
        <div class="px-3 pb-6 pt-16" slot="component">
            <div class="max-w-md mx-auto py-4 px-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <div class="flex justify-center md:justify-end -mt-16">
                    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500 dark:border-indigo-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80">
                </div>

                <h2 class="text-gray-800 dark:text-white text-2xl mt-2 md:mt-0 md:text-3xl font-semibold">Design Tools</h2>

                <p class="mt-2 text-gray-600 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                
                <div class="flex justify-end mt-4">
                    <a href="#" class="text-xl font-medium text-indigo-500 dark:text-indigo-300">John Doe</a>
                </div>
            </div>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Testimonial',
                code: `
        <div class="max-w-md mx-auto py-4 px-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div class="flex justify-center md:justify-end -mt-16">
                <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500 dark:border-indigo-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80">
            </div>

            <h2 class="text-gray-800 dark:text-white text-2xl mt-2 md:mt-0 md:text-3xl font-semibold">Design Tools</h2>

            <p class="mt-2 text-gray-600 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
            
            <div class="flex justify-end mt-4">
                <a href="#" class="text-xl font-medium text-indigo-500 dark:text-indigo-300">John Doe</a>
            </div>
        </div>`
            }
        }
    }
</script>
