<template>
    <a id="goToTop" href="#main" class="bg-gray-800 text-white fixed bottom-0 right-0 my-10 mx-10 p-2 rounded-md hidden">
        <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
        </svg>
    </a>
</template>

<script>
import $ from "jquery";

export default {
    mounted() {
        $(document).scroll(function() {
            let y = $(this).scrollTop();
            if (y > 800) {
                $('#goToTop').fadeIn();
            } else {
                $('#goToTop').fadeOut();
            }
        });
    }    
}
</script>