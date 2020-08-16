<template>
    <div class="w-full max-w-5xl mx-auto my-10">
        <h1 class="text-2xl text-gray-800 font-semibold capitalize mb-6">Forms</h1>

        <simple></simple>
        <newsletter></newsletter>
    </div>
</template>

<script>
import Simple from "../ui/Forms/Simple";
import Newsletter from "../ui/Forms/Newsletter";

export default {
    components: { 
        Simple,
        Newsletter,
    },
};
</script>