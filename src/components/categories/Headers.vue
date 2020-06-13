<template>
    <div class="w-full max-w-5xl mx-auto my-10">        
        <h1 class="text-2xl text-gray-800 font-semibold capitalize mb-6">Headers</h1>

        <with-image></with-image>
        <with-pattern></with-pattern>
    </div>
</template>

<script>
import WithImage from "../ui/Headers/WithImage";
import WithPattern from "../ui/Headers/WithPattern";

export default {
    components: { 
        WithImage,
        WithPattern,
    },
};
</script>