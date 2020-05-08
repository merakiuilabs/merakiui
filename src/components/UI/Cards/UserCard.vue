<template>
    <div :id="name | toId">
        <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <img class="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar">
            
            <div class="py-5 text-center">
                <a href="#" class="block text-2xl text-gray-800 font-bold">John Doe</a>
                <span class="text-sm text-gray-700">Software Engineer</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'User Card',
            }
        }
    }
</script>
