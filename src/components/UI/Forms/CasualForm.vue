<template>
    <div :id="name | toId">
        <div class="bg-white p-6 rounded shadow">
            <h2 class="text-lg text-gray-700 font-semibold">Account settings</h2>
            <div class="mt-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label class="block">
                        <span class="text-gray-700">Username</span>
                        <input type="text"
                               class="px-4 py-2 rounded bg-gray-200 border border-gray-300 mt-1 block w-full">
                    </label>
                    <label class="block">
                        <span class="text-gray-700">Email Address</span>
                        <input type="email"
                               class="px-4 py-2 rounded bg-gray-200 border border-gray-300 mt-1 block w-full">
                    </label>
                    <label class="block">
                        <span class="text-gray-700">Password</span>
                        <input type="password"
                               class="px-4 py-2 rounded bg-gray-200 border border-gray-300 mt-1 block w-full">
                    </label>
                    <label class="block">
                        <span class="text-gray-700">Password Confirmation</span>
                        <input type="password"
                               class="px-4 py-2 rounded bg-gray-200 border border-gray-300 mt-1 block w-full">
                    </label>
                </div>
                <div class="flex justify-end mt-4">
                    <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Casual Form'
            }
        }
    }
</script>

<style scoped>

</style>