<template>
    <div class="w-full max-w-5xl mx-auto my-10">
        <h1 class="text-2xl text-gray-800 font-semibold capitalize mb-6">Cards</h1>

        <Article></Article>
        <article-with-s-m-icons></article-with-s-m-icons>
        <article-with-image></article-with-image>
        <product></product>
        <product-with-evaluation></product-with-evaluation>
        <simple-product></simple-product>
        <testimonial></testimonial>
        <user></user>
        <user-with-details></user-with-details>
    </div>
</template>

<script>
import Article from "../ui/Cards/Article";
import ArticleWithImage from "../ui/Cards/ArticleWithImage";
import ArticleWithSMIcons from "../ui/Cards/ArticleWithSMIcons";
import Product from "../ui/Cards/Product";
import ProductWithEvaluation from "../ui/Cards/ProductWithEvaluation";
import SimpleProduct from "../ui/Cards/SimpleProduct";
import Testimonial from "../ui/Cards/Testimonial";
import User from "../ui/Cards/User";
import UserWithDetails from "../ui/Cards/UserWithDetails";

export default {
    components: { 
        Article,
        ArticleWithImage,
        ArticleWithSMIcons,
        Product,
        ProductWithEvaluation,
        SimpleProduct,
        Testimonial,
        User,
        UserWithDetails
    },
};
</script>