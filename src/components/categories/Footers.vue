<template>
    <div class="w-full max-w-5xl mx-auto my-10">
        <h1 class="text-2xl text-gray-800 font-semibold capitalize mb-6">Footers</h1>

        <simple></simple>
        <with-subscribe-form></with-subscribe-form>
    </div>
</template>

<script>
import Simple from "../ui/Footers/Simple";
import WithSubscribeForm from "../ui/Footers/WithSubscribeForm";

export default {
    components: { 
        Simple,
        WithSubscribeForm,
    },
};
</script>