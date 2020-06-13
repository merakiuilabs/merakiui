<template>
    <div class="w-full max-w-5xl mx-auto my-10">
        <h1 class="text-2xl text-gray-800 font-semibold capitalize mb-6">Sections</h1>

        <about-me></about-me>
        <our-team></our-team>
        <paragraph-with-image></paragraph-with-image>
    </div>
</template>

<script>
import AboutMe from "../ui/Sections/AboutMe";
import OurTeam from "../ui/Sections/OurTeam";
import ParagraphWithImage from "../ui/Sections/ParagraphWithImage";

export default {
    components: { 
        AboutMe,
        OurTeam,
        ParagraphWithImage,
    },
};
</script>