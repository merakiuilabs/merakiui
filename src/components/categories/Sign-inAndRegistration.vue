<template>
    <div class="w-full max-w-5xl mx-auto my-10">
        <h1 class="text-2xl text-gray-800 font-semibold capitalize mb-6">Sign-in and Registration</h1>

        <simple-card></simple-card>
        <with-side-image></with-side-image>
    </div>
</template>

<script>
import SimpleCard from "../ui/Sign-inAndRegistration/SimpleCard";
import WithSideImage from "../ui/Sign-inAndRegistration/WithSideImage";

export default {
    components: { 
        SimpleCard,
        WithSideImage
    },
};
</script>