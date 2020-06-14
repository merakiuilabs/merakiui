<template>
    <div class="w-full max-w-5xl mx-auto my-10">
        <h1 class="text-2xl text-gray-800 font-semibold capitalize mb-6">Navbars</h1>

        <e-commerce></e-commerce>
        <with-search></with-search>
        <with-avatar-and-alert-icon></with-avatar-and-alert-icon>
    </div>
</template>

<script>
import ECommerce from "../ui/Navbars/ECommerce";
import WithSearch from "../ui/Navbars/WithSearch";
import WithAvatarAndAlertIcon from "../ui/Navbars/WithAvatarAndAlertIcon";

export default {
    components: { 
        ECommerce,
        WithSearch,
        WithAvatarAndAlertIcon,
    },
};
</script>