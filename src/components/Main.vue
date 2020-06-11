<template>
    <div class="container mx-auto px-6" id="main">
        <div class="py-16 text-center">
            <h1 class="text-xl md:text-3xl text-gray-800 font-medium">Discover new components. Build amazing things 🔥</h1>

            <div class="max-w-2xl mx-auto">
                <div class="mt-4">
                    <span v-for="i in categories" :key="i.name">
                        <button @click="category = i.name" class="ml-2 mt-2 px-3 py-1 cursor-pointer hover:bg-gray-700 hover:text-gray-200 rounded text-sm focus:outline-none" :class="i.name === category? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'">{{ i.name }}</button>
                    </span>
                </div>
            </div>

            <p class="mt-8 text-gray-700">Header components require simple <span class="font-semibold">- don't panic please 😎 -</span> <a class="text-blue-600 hover:underline" href="https://gist.github.com/Miaababikir/052e31b345781c0f73180b80a285781b" target="_blank">configuration</a></p>
        </div>

        <div class="w-full max-w-5xl mx-auto">
            <div class="mb-16" v-for="category in list" :key="category.name">
                <h1 class="text-2xl text-gray-800 font-semibold mb-6 capitalize" v-text="category.name"></h1>

                <view-component v-for="component in category.components" :key="component.name" :name="component.name" class="mt-6">
                    <div slot="component">
                        <div class="my-6">
                            <component :is="component.name | toId"></component>
                        </div>
                    </div>
                </view-component>
            </div>
        </div>

        <back-to-top visibleoffset="800">
            <button class="bg-gray-800 text-white fixed bottom-0 right-0 my-10 mx-10 p-2 rounded-md focus:outline-none" aria-label="Back to top">
                <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
            </button>
        </back-to-top>
    </div>
</template>

<script>
// Alerts
import SuccessPop from "./UI/Alert/SuccessPop";
import InfoPop from "./UI/Alert/InfoPop";
import WarningPop from "./UI/Alert/WarningPop";
import ErrorPop from "./UI/Alert/ErrorPop";
import NotificationPop from "./UI/Alert/NotificationPop";
// Cards
import ArticleCard from "./UI/Cards/ArticleCard";
import ArticleCardWithImage from "./UI/Cards/ArticleCardWithImage";
import SimpleProductCard from "./UI/Cards/SimpleProductCard";
import ProductCard from "./UI/Cards/ProductCard";
import ProductCardWithEvaluation from "./UI/Cards/ProductCardWithEvaluation";
import TestimonialCard from "./UI/Cards/TestimonialCard";
import UserCard from "./UI/Cards/UserCard";
import UserCardWithDetails from "./UI/Cards/UserCardWithDetails";
// Forms
import InputsForm from "./UI/Forms/InputsForm";
import NewsletterForm from "./UI/Forms/NewsletterForm";
import SignInForm from "./UI/Forms/SignInForm";
import SignInFormWithImage from "./UI/Forms/SignInFormWithImage";
// Header
import HeaderWithImage from "./UI/Header/HeaderWithImage";
import HeaderWithPattern from "./UI/Header/HeaderWithPattern";
// Navbars
import Navbar from "./UI/Navbars/Navbar";
import NavbarWithSearch from "./UI/Navbars/NavbarWithSearch";
import NavbarWithAvatar from "./UI/Navbars/NavbarWithAvatar";
// Sections
import AboutMe from "./UI/Sections/AboutMe";
import CardsList from "./UI/Sections/CardsList";
import ParagraphWithImage from "./UI/Sections/ParagraphWithImage";
// Pagination
import Pagination from "./UI/Paginations/Pagination";
// Footers
import SimpleFooter from "./UI/Footers/SimpleFooter";
import FooterWithSubscribeForm from "./UI/Footers/FooterWithSubscribeForm";

import BackToTop from 'vue-backtotop';
import Filter from "../Models/Filter";
import ViewComponent from "./Utilities/ViewComponent";

export default {
    components: {
        SuccessPop,
        InfoPop,
        WarningPop,
        ErrorPop,
        NotificationPop,

        ArticleCard,
        ArticleCardWithImage,
        SimpleProductCard,
        ProductCard,
        ProductCardWithEvaluation,
        TestimonialCard,
        UserCard,
        UserCardWithDetails,

        InputsForm,
        NewsletterForm,
        SignInForm,
        SignInFormWithImage,

        HeaderWithImage,
        HeaderWithPattern,

        Navbar,
        NavbarWithSearch,
        NavbarWithAvatar,

        AboutMe,
        CardsList,
        ParagraphWithImage,

        Pagination,

        SimpleFooter,
        FooterWithSubscribeForm,

        BackToTop,
        ViewComponent,
    },
    data() {
        return {
            category: 'Alert',
            categories: [],
            component: new Filter(),
        }
    },
    
    created() {
        this.categories = this.component.all();
    },

    computed: {
        list() {
            return this.component.whereCategory(this.category);
        },
    },
}
</script>