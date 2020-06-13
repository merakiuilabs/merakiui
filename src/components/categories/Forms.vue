<template>
    <div class="w-full max-w-5xl mx-auto my-10">
        <h1 class="text-2xl text-gray-800 font-semibold capitalize mb-6">Forms</h1>

        <simple></simple>
        <newsletter></newsletter>
        <sign-in></sign-in>
        <sign-in-with-image></sign-in-with-image>
    </div>
</template>

<script>
import Simple from "../ui/Forms/Simple";
import Newsletter from "../ui/Forms/Newsletter";
import SignIn from "../ui/Forms/SignIn";
import SignInWithImage from "../ui/Forms/SignInWithImage";

export default {
    components: { 
        Simple,
        Newsletter,
        SignIn,
        SignInWithImage
    },
};
</script>