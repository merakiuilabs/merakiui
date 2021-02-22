<template>
    <div class="container px-6 pb-12 mx-auto">
        <div class="py-16 text-center">
            <h1 class="text-xl font-medium text-gray-800 md:text-3xl dark:text-white">Discover new components. Build amazing things 🔥</h1>
            <div class="max-w-2xl mx-auto">
                <div class="flex items-center justify-center mt-5 ">
                    <div class="mt-2 md:mt-0">
                        <span v-for="category in categories" :key="category.name">
                            <app-button @click="searchText = category.name" class="px-3 py-1 mt-2 ml-2 text-sm rounded cursor-pointer hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-200 focus:outline-none" :class="category.name === searchText? 'bg-gray-700 text-gray-200 dark:bg-gray-600 dark:text-gray-200' : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'">{{ category.name }}</app-button>
                        </span> 
                    </div>
                </div>
            </div>

            <p class="mt-8 text-center text-gray-700 dark:text-gray-300"> Heros components require simple <span class="font-semibold">- don't panic please 😎 -</span><a href="https://gist.github.com/khatabwedaa/352573904a5b2d5ff3598bcd54ce9f04" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline"> configuration</a></p>

            <a href="https://a.paddle.com/v2/click/37973/124351?link=3167" class="block max-w-5xl mx-auto mt-8 overflow-hidden rounded-md">
                <img class="hidden md:block" src="../assets/tails.jpg" alt="devdojo tails">
                <img class="md:hidden" src="../assets/tails_mobile.jpg" alt="devdojo tails">
            </a>
        </div>

        <div class="w-full max-w-6xl mx-auto">
            <div class="mb-16" v-for="category in list" :key="category.name">
                <h1 class="mb-6 text-2xl font-semibold text-gray-800 capitalize dark:text-white" v-text="category.name"></h1>

                <div v-for="component in category.components" :key="component.name" :name="component.name">
                    <component :is="category.name + component.name"></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Application components
import AppButton from "~/components/utilities/AppButton.vue";

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
import AuthenticationLoginWithSocailMediaLinks from "./ui/Authentication/LoginWithSocailMediaLinks";
import AuthenticationLoginWithSideImage from "./ui/Authentication/LoginWithSideImage";
// Buttons
import ButtonsPrimary from "./ui/Buttons/Primary";
import ButtonsWithIcon from "./ui/Buttons/WithIcon";
import ButtonsWithMenu from "./ui/Buttons/WithMenu";
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
// Dropdowns
import DropdownsSimple from "./ui/Dropdowns/Simple";
import DropdownsNotification from "./ui/Dropdowns/Notification";
// Forms
import FormsNewsletter from "./ui/Forms/Newsletter";
import FormsSimpleNewsletter from "./ui/Forms/SimpleNewsletter";
import FormsSimple from "./ui/Forms/Simple";
import FormsSearch from "./ui/Forms/Search";
import FormsContact from "./ui/Forms/Contact";
// Navbars
import NavbarsECommerce from "./ui/Navbars/ECommerce";
import NavbarsWithAvatar from "./ui/Navbars/WithAvatar";
import NavbarsWithCategories from "./ui/Navbars/WithCategories";
import NavbarsWithSearch from "./ui/Navbars/WithSearch";
// Heros
import HerosECommerce from "./ui/Heros/ECommerce";
import HerosWithImage from "./ui/Heros/WithImage";
import HerosWithSideImage from "./ui/Heros/WithSideImage";
import HerosWithBGImage from "./ui/Heros/WithBGImage";
import HerosWithPattern from "./ui/Heros/WithPattern";
// Sidebars
import SidebarsWithSearch from "./ui/Sidebars/WithSearch";
import SidebarsWithAvatar from "./ui/Sidebars/WithAvatar";
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
import FootersWithLinks from "./ui/Footers/WithLinks";
import FootersWithSubscribeForm from "./ui/Footers/WithSubscribeForm";

import Component from "~/models/ComponentsFilter";

export default {
    components: {
        AppButton,
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
        AuthenticationLoginWithSocailMediaLinks,
        AuthenticationLoginWithSideImage,
        ButtonsPrimary,
        ButtonsWithIcon,
        ButtonsWithMenu,
        CardsArticle,
        CardsArticleWithImage,
        CardsArticleWithSMIcons,
        CardsProduct,
        CardsProductWithEvaluation,
        CardsSimpleProduct,
        CardsTestimonial,
        CardsUser,
        CardsUserWithDetails,
        DropdownsSimple,
        DropdownsNotification,
        FormsNewsletter,
        FormsSimpleNewsletter,
        FormsSimple,
        FormsSearch,
        FormsContact,
        NavbarsECommerce,
        NavbarsWithAvatar,
        NavbarsWithCategories,
        NavbarsWithSearch,
        HerosECommerce,
        HerosWithImage,
        HerosWithSideImage,
        HerosWithBGImage,
        HerosWithPattern,
        SidebarsWithAvatar,
        SidebarsWithSearch,
        SectionsAboutMe,
        SectionsFeature,
        SectionsOurTeam,
        SectionsParagraphWithImage,
        PaginationsSimple,
        FootersSimple,
        FootersWithDetails,
        FootersWithLinks,
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