<template>
<div>
    <header-component>
        <div class="container px-4 py-8 mx-auto md:py-0">
            <div class="md:flex">
                <div class="flex items-center w-full md:w-1/2 md:h-128">
                    <div class="max-w-xl text-white">
                        <div class="text-xs font-light">Simple UI Starter</div>

                        <h1 class="mt-3 text-2xl font-semibold text-white md:text-3xl">Meraki <span class="text-blue-400">UI </span> Components</h1>
                        
                        <p class="mt-3 text-gray-300 md:text-lg">
                            Beautiful <a href="https://tailwindcss.com" class="font-normal text-blue-400 hover:underline">Tailwind CSS</a> 
                            components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant
                            <a href="https://tailwindcss.com/docs/dark-mode" class="font-normal text-blue-400 hover:underline">Dark Mode</a>.
                        </p>

                        <div class="flex flex-wrap items-center mt-4">
                            <a class="flex text-white cursor-pointer hover:underline">
                                <svg class="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                                </svg>

                                <p class="mx-2 text-sm">{{ components_count }} Components</p>
                            </a>

                            <a class="flex ml-2 text-white hover:underline" href="https://github.com/merakiui/merakiui/blob/master/LICENSE">
                                <svg class="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clip-rule="evenodd" />
                                </svg>

                                <p class="mx-2 text-sm">MIT Licensed</p>
                            </a>
                        </div>

                    </div>
                </div>
                
                <div class="flex items-center justify-center w-full mt-6 md:w-1/2 md:justify-end md:mt-0">
                    <div class="w-full max-w-md">
                        <img src="../assets/svg/Responsive-bro.svg" alt="moon">
                    </div>
                </div>
            </div>
        </div>
    </header-component>

    <div class="container px-4 mx-auto">
        <div class="py-16 text-center">
            <h1
                class="text-xl font-medium text-gray-800 md:text-3xl dark:text-white"
            >
                Discover new components. Build amazing things 🔥
            </h1>
            <div class="max-w-2xl mx-auto">
                <div class="flex items-center justify-center mt-5">
                    <div class="mt-2 md:mt-0">
                        <span
                            v-for="category in categories"
                            :key="category.name"
                        >
                            <app-button
                                @click="activeCategory = category.name"
                                class="px-3 py-1 mt-2 ml-2 text-sm rounded cursor-pointer hover:bg-gray-700 hover:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-200 focus:outline-none"
                                :class="
                                    category.name === activeCategory
                                        ? 'bg-gray-700 text-gray-200 dark:bg-gray-600 dark:text-gray-200'
                                        : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'"
                                >
                                {{ category.name }}
                            </app-button>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center mb-10">
            <carbon-ads></carbon-ads>
        </div>

        <div class="w-full max-w-6xl mx-auto">
            <div class="mb-16" v-for="category in list" :key="category.name">
                <h1
                    class="mb-6 text-2xl font-semibold text-gray-800 capitalize dark:text-white"
                    v-text="category.name"
                ></h1>

                <div
                    v-for="component in category.components"
                    :key="component.name"
                    :name="component.name"
                >
                    <component :is="category.name + component.name"></component>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// Application components
import HeaderComponent from "~/components/Header";
import AppButton from "~/components/utilities/AppButton.vue";

// Alerts
import AlertsSuccessPop from "~/components/ui/Alerts/SuccessPop";
import AlertsInfoPop from "~/components/ui/Alerts/InfoPop";
import AlertsWarningPop from "~/components/ui/Alerts/WarningPop";
import AlertsErrorPop from "~/components/ui/Alerts/ErrorPop";
import AlertsNotificationPop from "~/components/ui/Alerts/NotificationPop";
import AlertsSuccessFullWidth from "~/components/ui/Alerts/SuccessFullWidth";
import AlertsInfoFullWidth from "~/components/ui/Alerts/InfoFullWidth";
import AlertsWarningFullWidth from "~/components/ui/Alerts/WarningFullWidth";
import AlertsErrorFullWidth from "~/components/ui/Alerts/ErrorFullWidth";
// Authentication
import AuthenticationSimpleLogin from "~/components/ui/Authentication/SimpleLogin";
import AuthenticationLoginWithSocailMediaLinks from "~/components/ui/Authentication/LoginWithSocailMediaLinks";
import AuthenticationLoginWithSideImage from "~/components/ui/Authentication/LoginWithSideImage";
// Buttons
import ButtonsPrimary from "~/components/ui/Buttons/Primary";
import ButtonsWithIcon from "~/components/ui/Buttons/WithIcon";
import ButtonsWithMenu from "~/components/ui/Buttons/WithMenu";
// Cards
import CardsArticle from "~/components/ui/Cards/Article";
import CardsArticleWithImage from "~/components/ui/Cards/ArticleWithImage";
import CardsArticleWithSMIcons from "~/components/ui/Cards/ArticleWithSMIcons";
import CardsProduct from "~/components/ui/Cards/Product";
import CardsProductWithEvaluation from "~/components/ui/Cards/ProductWithEvaluation";
import CardsSimpleProduct from "~/components/ui/Cards/SimpleProduct";
import CardsTestimonial from "~/components/ui/Cards/Testimonial";
import CardsUser from "~/components/ui/Cards/User";
import CardsUserWithDetails from "~/components/ui/Cards/UserWithDetails";
// Dropdowns
import DropdownsSimple from "~/components/ui/Dropdowns/Simple";
import DropdownsNotification from "~/components/ui/Dropdowns/Notification";
// Forms
import FormsNewsletter from "~/components/ui/Forms/Newsletter";
import FormsSimpleNewsletter from "~/components/ui/Forms/SimpleNewsletter";
import FormsSimple from "~/components/ui/Forms/Simple";
import FormsSearch from "~/components/ui/Forms/Search";
import FormsContact from "~/components/ui/Forms/Contact";
// Navbars
import NavbarsSimple from "~/components/ui/Navbars/Simple";
import NavbarsECommerce from "~/components/ui/Navbars/ECommerce";
import NavbarsWithAvatar from "~/components/ui/Navbars/WithAvatar";
import NavbarsWithSearch from "~/components/ui/Navbars/WithSearch";
import NavbarsWithCategories from "~/components/ui/Navbars/WithCategories";
import NavbarsWithSocailMediaLinks from "~/components/ui/Navbars/WithSocailMediaLinks";
// Heros
import HerosECommerce from "~/components/ui/Heros/ECommerce";
import HerosWithNewsletterForm from "~/components/ui/Heros/WithNewsletterForm";
import HerosWithSlide from "~/components/ui/Heros/WithSlide";
import HerosWithImage from "~/components/ui/Heros/WithImage";
import HerosWithSideImage from "~/components/ui/Heros/WithSideImage";
import HerosWithBGImage from "~/components/ui/Heros/WithBGImage";
import HerosWithPattern from "~/components/ui/Heros/WithPattern";
// Sidebars
import SidebarWithSearch from "~/components/ui/Sidebar/WithSearch";
import SidebarWithAvatar from "~/components/ui/Sidebar/WithAvatar";
// Sections
import SectionsAboutMe from "~/components/ui/Sections/AboutMe";
import SectionsFeature from "~/components/ui/Sections/Feature";
import SectionsOurTeam from "~/components/ui/Sections/OurTeam";
import SectionsParagraphWithImage from "~/components/ui/Sections/ParagraphWithImage";
// Pricing
import PricingSimple from "~/components/ui//Pricing/Simple";
import PricingPopular from "~/components/ui//Pricing/Popular";
import PricingWithNavigation from "~/components/ui//Pricing/WithNavigation";
// paginations
import PaginationSimple from "~/components/ui/Pagination/Simple";
// Footers
import FootersSimple from "~/components/ui/Footers/Simple";
import FootersWithDetails from "~/components/ui/Footers/WithDetails";
import FootersWithLinks from "~/components/ui/Footers/WithLinks";
import FootersWithSubscribeForm from "~/components/ui/Footers/WithSubscribeForm";

// Components
import Component from "~/models/ComponentsFilter";

export default {
    components: {
        AppButton,
        HeaderComponent,
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
        NavbarsSimple,
        NavbarsECommerce,
        NavbarsWithAvatar,
        NavbarsWithSearch,
        NavbarsWithSocailMediaLinks,
        NavbarsWithCategories,
        HerosECommerce,
        HerosWithNewsletterForm,
        HerosWithSlide,
        HerosWithImage,
        HerosWithSideImage,
        HerosWithBGImage,
        HerosWithPattern,
        SidebarWithAvatar,
        SidebarWithSearch,
        SectionsAboutMe,
        SectionsFeature,
        SectionsOurTeam,
        SectionsParagraphWithImage,
        PricingSimple,
        PricingPopular,
        PricingWithNavigation,
        PaginationSimple,
        FootersSimple,
        FootersWithDetails,
        FootersWithLinks,
        FootersWithSubscribeForm,
    },
    
    data() {
        return {
            components_count: 58,
            categories: [],
            activeCategory: "Alerts",
            component: new Component(),
        };
    },

    created() {
        this.categories = this.component.all();
    },

    computed: {
        list() {
            return this.component.whereCategory(this.activeCategory);
        },
    },
};
</script>
