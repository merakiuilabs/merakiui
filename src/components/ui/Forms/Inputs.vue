<template>
    <view-component :name="name" :code="code">
        <div class="px-3 py-6" slot="component">
            <div class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
                <h2 class="text-lg text-gray-700 font-semibold capitalize">Account settings</h2>
                
                <form>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                        <div>
                            <label class="text-gray-700" for="username">Username</label>
                            <input id="username" type="text" class="w-full mt-1 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white">
                        </div>

                        <div>
                            <label class="text-gray-700" for="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email" class="w-full mt-1 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white">
                        </div>

                        <div>
                            <label class="text-gray-700" for="password">Password</label>
                            <input id="password" type="password" class="w-full mt-1 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white">
                        </div>

                        <div>
                            <label class="text-gray-700" for="passwordConfirmation">Password Confirmation</label>
                            <input id="passwordConfirmation" type="password" class="w-full mt-1 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white">
                        </div>
                    </div>

                    <div class="flex justify-end mt-4">
                        <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </view-component>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Inputs',
                code: `
        <div class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
            <h2 class="text-lg text-gray-700 font-semibold capitalize">Account settings</h2>
            
            <form>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div>
                        <label class="text-gray-700" for="username">Username</label>
                        <input id="username" type="text" class="w-full mt-1 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white">
                    </div>

                    <div>
                        <label class="text-gray-700" for="emailAddress">Email Address</label>
                        <input id="emailAddress" type="email" class="w-full mt-1 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white">
                    </div>

                    <div>
                        <label class="text-gray-700" for="password">Password</label>
                        <input id="password" type="password" class="w-full mt-1 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white">
                    </div>

                    <div>
                        <label class="text-gray-700" for="passwordConfirmation">Password Confirmation</label>
                        <input id="passwordConfirmation" type="password" class="w-full mt-1 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white">
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                </div>
            </form>
        </div>`
            }
        }
    }
</script>