<template>
    <div class="container mx-auto px-6 pb-12">
        <div class="py-16 text-center">
            <h1 class="text-xl md:text-3xl text-gray-800 font-medium">Discover new components. Build amazing things 🔥</h1>
            <div class="max-w-2xl mx-auto">
                <div class="flex items-center justify-center mt-5 ">
                    <div class="mt-2 md:mt-0">
                        <span v-for="category in categories" :key="category.name">
                            <button @click="searchText = category.name" class="ml-2 mt-2 px-3 py-1 cursor-pointer hover:bg-gray-700 hover:text-gray-200 rounded text-sm focus:outline-none" :class="category.name === searchText? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'">{{ category.name }}</button>
                        </span> 
                    </div>
                </div>
            </div>

            <p class="mt-8 text-gray-700 text-center"> Heros components require simple <span class="font-semibold">- don't panic please 😎 -</span><a href="https://gist.github.com/Miaababikir/052e31b345781c0f73180b80a285781b" target="_blank" class="text-blue-600 hover:underline"> configuration</a></p>
        </div>

        <div class="w-full max-w-5xl mx-auto">
            <div class="mb-16" v-for="category in list" :key="category.name">
                <h1 class="text-2xl text-gray-800 font-semibold mb-6 capitalize" v-text="category.name"></h1>

                <div v-for="component in category.components" :key="component.name" :name="component.name">
                    <component :is="category.name + component.name"></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Alerts
import AlertsSuccessPop from "./ui/Alerts/SuccessPop";
import AlertsInfoPop from "./ui/Alerts/InfoPop";
import AlertsWarningPop from "./ui/Alerts/WarningPop";
import AlertsErrorPop from "./ui/Alerts/ErrorPop";
import AlertsNotificationPop from "./ui/Alerts/NotificationPop";
import AlertsSuccessFullWidth from "./ui/Alerts/SuccessFullWidth";
import AlertsInfoFullWidth from "./ui/Alerts/InfoFullWidth";
import AlertsWarningFullWidth from "./ui/Alerts/WarningFullWidth";
import AlertsErrorFullWidth from "./ui/Alerts/ErrorFullWidth";
// Authentication
import AuthenticationSimpleLogin from "./ui/Authentication/SimpleLogin";
import AuthenticationLoginWithSideImage from "./ui/Authentication/LoginWithSideImage";
// Cards
import CardsArticle from "./ui/Cards/Article";
import CardsArticleWithImage from "./ui/Cards/ArticleWithImage";
import CardsArticleWithSMIcons from "./ui/Cards/ArticleWithSMIcons";
import CardsProduct from "./ui/Cards/Product";
import CardsProductWithEvaluation from "./ui/Cards/ProductWithEvaluation";
import CardsSimpleProduct from "./ui/Cards/SimpleProduct";
import CardsTestimonial from "./ui/Cards/Testimonial";
import CardsUser from "./ui/Cards/User";
import CardsUserWithDetails from "./ui/Cards/UserWithDetails";
// Forms
import FormsNewsletter from "./ui/Forms/Newsletter";
import FormsSimple from "./ui/Forms/Simple";
// Navbars
import NavbarsECommerce from "./ui/Navbars/ECommerce";
import NavbarsWithAvatar from "./ui/Navbars/WithAvatar";
import NavbarsWithSearch from "./ui/Navbars/WithSearch";
// Heros
import HerosECommerce from "./ui/Heros/ECommerce";
import HerosWithImage from "./ui/Heros/WithImage";
import HerosWithPattern from "./ui/Heros/WithPattern";
// Sections
import SectionsAboutMe from "./ui/Sections/AboutMe";
import SectionsFeature from "./ui/Sections/Feature";
import SectionsOurTeam from "./ui/Sections/OurTeam";
import SectionsParagraphWithImage from "./ui/Sections/ParagraphWithImage";
// paginations
import PaginationsSimple from "./ui/Paginations/Simple";
// Footers
import FootersSimple from "./ui/Footers/Simple";
import FootersWithDetails from "./ui/Footers/WithDetails";
import FootersWithSubscribeForm from "./ui/Footers/WithSubscribeForm";





import Component from "../models/ComponentsFilter";

export default {
    components: {
        AlertsSuccessPop,
        AlertsInfoPop,
        AlertsWarningPop,
        AlertsErrorPop,
        AlertsNotificationPop,
        AlertsSuccessFullWidth,
        AlertsInfoFullWidth,
        AlertsWarningFullWidth,
        AlertsErrorFullWidth,
        AuthenticationSimpleLogin,
        AuthenticationLoginWithSideImage,
        CardsArticle,
        CardsArticleWithImage,
        CardsArticleWithSMIcons,
        CardsProduct,
        CardsProductWithEvaluation,
        CardsSimpleProduct,
        CardsTestimonial,
        CardsUser,
        CardsUserWithDetails,
        FormsNewsletter,
        FormsSimple,
        NavbarsECommerce,
        NavbarsWithAvatar,
        NavbarsWithSearch,
        HerosECommerce,
        HerosWithImage,
        HerosWithPattern,
        SectionsAboutMe,
        SectionsFeature,
        SectionsOurTeam,
        SectionsParagraphWithImage,
        PaginationsSimple,
        FootersSimple,
        FootersWithDetails,
        FootersWithSubscribeForm,
    },
    data() {
        return {
            categories: [],
            searchText: 'Alerts',
            component: new Component(),
        }
    },

    created() {
        this.categories = this.component.all();
    },

    computed: {
        list() {
            return this.component.whereCategory(this.searchText);
        },
    },
}
</script>