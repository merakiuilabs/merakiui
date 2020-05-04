<template>
    <div class="py-12">
        <div class="container mx-auto px-6">
            <h1 class="text-2xl text-gray-800 font-semibold mb-6">Alert</h1>
            <notification-pop></notification-pop>
        </div>
    </div>
</template>

<script>
import NotificationPop  from "./Alert/NotificationPop";

export default {
    components: {
        NotificationPop
    }
}
</script>