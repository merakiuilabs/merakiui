<template>
    <div :id="name | toId">
        <div class="bg-white p-6 rounded shadow">
            <h2 class="text-lg text-gray-700 font-semibold">Account settings</h2>
            <div class="flex flex-col sm:flex-row py-4">
                <div class="sm:w-1/4">
                    <h2 class="text-xl text-gray-700">Profile</h2>
                </div>
                <div class="sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            </div>
            <div class="flex flex-col sm:flex-row py-4">
                <div class="sm:w-1/4">
                    <h2 class="text-xl text-gray-700">Settings</h2>
                </div>
                <div class="sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label class="block">
                        <span class="text-gray-700">Forward to</span>
                        <input type="text"
                               class="px-4 py-2 rounded bg-gray-200 border border-gray-300 mt-1 block w-full">
                    </label>
                    <label class="block">
                        <span class="text-gray-700">API Token</span>
                        <input type="text"
                               class="px-4 py-2 rounded bg-gray-200 border border-gray-300 mt-1 block w-full">
                    </label>
                </div>
            </div>
            <div class="flex justify-end mt-4">
                <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Multi Column Form'
            }
        }
    }
</script>

<style scoped>

</style>