<template>
    <div class="w-full max-w-5xl mx-auto my-10">        
        <h1 class="text-2xl text-gray-800 font-semibold capitalize mb-6">Heros</h1>

        <e-commerce></e-commerce>
        <with-image></with-image>
        <with-pattern></with-pattern>
    </div>
</template>

<script>
import ECommerce from "../ui/Heros/ECommerce";
import WithImage from "../ui/Heros/WithImage";
import WithPattern from "../ui/Heros/WithPattern";

export default {
    components: { 
        ECommerce,
        WithImage,
        WithPattern,
    },
};
</script>