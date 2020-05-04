<template>
    <div class="flex h-screen container mx-auto px-6">
        <div class="w-64 border-r py-8">
            List
        </div>
        <div class="flex-1 py-12 overflow-y-auto">
            <div class="container mx-auto px-6">
                <div class="py-8">
                    <h1 class="text-2xl text-gray-800 font-semibold mb-6">Alert</h1>
                    <notification-pop></notification-pop>
                </div>

                <div class="py-8">
                    <h1 class="text-2xl text-gray-800 font-semibold mb-6">Cards</h1>
                    <user-details></user-details>
                    <testimonial class="mt-10"></testimonial>
                    <artical class="mt-10"></artical>
                    <product class="mt-10"></product>
                    <product-evaluation class="mt-10"></product-evaluation>
                </div>

                <div class="py-8">
                    <h1 class="text-2xl text-gray-800 font-semibold mb-6">Forms</h1>
                    <login></login>
                    <subscribe class="my-10"></subscribe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NotificationPop  from "./Alert/NotificationPop";
import UserDetails  from "./Cards/UserDetails";
import Testimonial  from "./Cards/Testimonial";
import Artical  from "./Cards/Artical";
import Product  from "./Cards/Product";
import ProductEvaluation from "./Cards/ProductWithEvaluation";
import Login from "./Forms/Login";
import Subscribe from "./Forms/Subscribe";

export default {
    components: {
        NotificationPop , 
        UserDetails , 
        Testimonial , 
        Artical , 
        Product , 
        ProductEvaluation,
        Login,
        Subscribe
    }
}
</script>