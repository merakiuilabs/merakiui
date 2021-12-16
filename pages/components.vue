<template>
<div class="relative">
    <div class="flex flex-col bg-white xl:h-screen xl:overflow-hidden">
       <header-component class="fixed z-40 w-full xl:z-50"></header-component>

        <div class="flex pt-16 overflow-hidden 2xl:pt-20">
            <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed inset-0 z-50 transition-opacity bg-black opacity-50 xl:hidden"></div>
            
            <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed inset-y-0 left-0 z-50 flex flex-col w-64 h-screen px-4 py-8 pb-20 overflow-y-auto transition duration-300 transform bg-white border-gray-200 xl:translate-x-0 xl:static xl:inset-0">
                <a href="/" class="inline-flex items-center text-xl font-bold text-gray-700 md:text-2xl hover:text-blue-500">
                    <img class="mr-2 w-7 h-7" src="../assets/svg/logo-sidebar.svg" alt="logo"> Meraki <span class="text-blue-500">UI</span>
                </a>
                
                <nav class="mt-6">
                    <div
                        v-for="category in categories"
                        :key="category.name"
                        class="block px-4 py-2 mt-1 rounded-md focus:outline-none"
                        :class="
                                category.name === activeCategory
                                    ? 'text-blue-500 bg-blue-50'
                                    : 'text-gray-500 hover:text-blue-500 hover:underline'"
                    >
                        <app-button @click="updateCategory(category.name)" class="w-full text-left">
                            {{ category.name }}
                        </app-button>
                    </div>

                </nav>
            </div>

            <main id="main" class="flex flex-col flex-1 overflow-x-hidden lg:overflow-y-auto">
                <div class="container px-4 mx-auto sm:px-6 ">
                    <div class="py-8 text-center md:py-16">
                        <h1
                            class="text-xl font-medium text-gray-700 sm:flex sm:items-center sm:justify-center lg:text-3xl"
                        >
                            <span>Discover new components. Build amazing things. </span> &nbsp;
                            
                            <svg class="hidden w-8 h-8 text-blue-500 fill-current sm:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9837 21.9999C6.47237 21.9938 2.00605 17.5203 2 11.9999C2.39311 12.1112 2.79955 12.168 3.20803 12.1689C4.55933 12.1789 5.82888 11.5217 6.6025 10.412C7.29413 9.41154 7.44027 8.13091 6.99186 6.99997C7.27858 7.05119 7.5692 7.07729 7.86045 7.07797C9.1552 7.08764 10.3841 6.50698 11.2 5.49998C11.9984 4.52274 12.3106 3.2352 12.0486 2C17.5625 2.01795 22.0178 6.50963 21.9999 12.0324C21.982 17.5553 17.4976 22.0178 11.9837 21.9999ZM12.7455 18.5679C12.8991 18.634 13.0645 18.6681 13.2317 18.6679C13.7362 18.6674 14.1909 18.363 14.3842 17.8961C14.5775 17.4293 14.4714 16.8919 14.1152 16.5339C13.8805 16.2998 13.5629 16.1683 13.2317 16.1679C12.6392 16.1693 12.1294 16.5877 12.0115 17.1693C11.8937 17.7509 12.2004 18.3353 12.7455 18.5679ZM6.91199 16.8749C7.11205 16.9578 7.32647 17.0003 7.54296 16.9999C8.21842 16.9997 8.82678 16.5907 9.08272 15.9646C9.33866 15.3385 9.19143 14.6195 8.71006 14.1449C8.3989 13.838 7.97969 13.6659 7.54296 13.6659C6.62442 13.667 5.88022 14.4129 5.87967 15.3329C5.87984 16.0017 6.2781 16.606 6.89202 16.8689H6.89702H6.908L6.91199 16.8749ZM16.3276 14.3679C16.9987 14.6502 17.775 14.4627 18.2439 13.9051C18.7127 13.3475 18.7652 12.5493 18.3733 11.9349C18.2506 11.7436 18.0902 11.5793 17.9021 11.4519C17.3853 11.1024 16.7167 11.0716 16.17 11.3721C15.6233 11.6726 15.2902 12.254 15.307 12.8784C15.3238 13.5028 15.6877 14.0654 16.2498 14.3359H16.2378L16.2677 14.3489L16.2877 14.3569H16.2817C16.296 14.3615 16.31 14.3669 16.3236 14.3729L16.3276 14.3679ZM11.9837 10.333C11.5855 10.3323 11.2426 10.6141 11.1655 11.0054C11.0883 11.3967 11.2986 11.7879 11.6672 11.9389C12.0357 12.0899 12.4594 11.9583 12.6782 11.625C12.8969 11.2917 12.8493 10.8499 12.5648 10.571C12.4906 10.4978 12.4032 10.4394 12.3072 10.399L12.2892 10.391L12.2623 10.381C12.1729 10.349 12.0786 10.3328 11.9837 10.333ZM15.7276 6.16697C15.0888 6.16539 14.5526 6.64873 14.4871 7.28522C14.4216 7.92172 14.8481 8.50444 15.4738 8.63339C16.0995 8.76235 16.7211 8.39562 16.9118 7.78494C17.1025 7.17425 16.8004 6.51814 16.2128 6.26698H16.2028C16.0525 6.20267 15.8911 6.16869 15.7276 6.16697ZM4.49593 9.49996C4.03663 9.49996 3.66429 9.12701 3.66429 8.66696C3.66429 8.20691 4.03663 7.83397 4.49593 7.83397C4.95523 7.83397 5.32757 8.20691 5.32757 8.66696C5.32702 9.12679 4.95501 9.49941 4.49593 9.49996ZM3.24797 6.99997C2.55873 6.99997 2 6.44033 2 5.74998C2 5.05963 2.55873 4.49999 3.24797 4.49999C3.9372 4.49999 4.49593 5.05963 4.49593 5.74998C4.49483 6.43988 3.93674 6.99887 3.24797 6.99997ZM8.23983 5.33298C7.55059 5.33298 6.99186 4.77334 6.99186 4.08299C6.99186 3.39264 7.55059 2.833 8.23983 2.833C8.92906 2.833 9.48779 3.39264 9.48779 4.08299C9.48779 4.7735 8.92922 5.33343 8.23983 5.33398V5.33298ZM5.32857 3.66699C4.8694 3.66699 4.49711 3.29425 4.49693 2.83433C4.49675 2.37441 4.86873 2.00137 5.32791 2.001C5.78708 2.00063 6.15967 2.37308 6.16022 2.833C6.16022 3.29321 5.78804 3.66644 5.32857 3.66699Z"></path>
                            </svg>

                        </h1>
                    </div>

                    <div class="flex justify-center mb-10">
                        <carbon-ads></carbon-ads>
                    </div>

                    <section v-for="category in list" :key="category.name">
                        <h1
                            class="mb-6 text-2xl font-semibold text-gray-800 capitalize"
                            v-text="category.name"
                        ></h1>

                        <div
                            v-for="component in category.components"
                            :key="component.name"
                            :name="component.name"
                        >
                            <component :is="category.name + component.name"></component>
                        </div>
                    </section>

                    <div class="py-6 text-center">
                        <p class="text-gray-600">© Copyright {{ new Date().getFullYear() }} by <a href="https://github.com/merakiui" target="_blank" class="font-medium text-gray-700 underline decoration-blue-500">Meraki UI</a></p>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <button @click="sidebarOpen = !sidebarOpen" type="button" class="fixed z-50 flex items-center justify-center p-2 text-white bg-gray-900 rounded-full focus:outline-none xl:hidden bottom-4 right-4">
        <span class="sr-only">Open site navigation</span>
        <svg v-if="!sidebarOpen" class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 18H9V16H21V18ZM21 13H3V11H21V13ZM21 8H9V6H21V8Z" fill="currentColor"></path>
        </svg>

        <svg v-if="sidebarOpen" class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="currentColor"></path>
        </svg>
    </button>
</div>
</template>

<script>
// Application components
import AppButton from "~/components/utilities/AppButton.vue";
import HeaderComponent from "../components/Header.vue";

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
import AuthenticationLoginWithSocialMediaLinks from "~/components/ui/Authentication/LoginWithSocialMediaLinks";
import AuthenticationLoginWithSideImage from "~/components/ui/Authentication/LoginWithSideImage";
// Breadcrumbs
import BreadcrumbsSimple from "~/components/ui/Breadcrumbs/Simple";
import BreadcrumbsWithArrow from "~/components/ui/Breadcrumbs/WithArrow";
import BreadcrumbsWithIcons from "~/components/ui/Breadcrumbs/WithIcons";
import BreadcrumbsFullWidth from "~/components/ui/Breadcrumbs/FullWidth";
import BreadcrumbsFullWidthWithIcons from "~/components/ui/Breadcrumbs/FullWidthWithIcons";
// Buttons
import ButtonsPrimary from "~/components/ui/Buttons/Primary";
import ButtonsWithIcon from "~/components/ui/Buttons/WithIcon";
import ButtonsWithMenu from "~/components/ui/Buttons/WithMenu";
import ButtonsGroup from "~/components/ui/Buttons/Group";
import ButtonsGroupWithIcons from "~/components/ui/Buttons/GroupWithIcons";
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
import DropdownsMultiLevel from "~/components/ui/Dropdowns/MultiLevel";
import DropdownsMultiLevelWithIcons from "~/components/ui/Dropdowns/MultiLevelWithIcons";
import DropdownsUserInfo from "~/components/ui/Dropdowns/UserInfo";
import DropdownsUserInfoWithIcons from "~/components/ui/Dropdowns/UserInfoWithIcons";
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
import NavbarsWithSocialMediaLinks from "~/components/ui/Navbars/WithSocialMediaLinks";
// Heros
import HerosECommerce from "~/components/ui/Heros/ECommerce";
import HerosWithNewsletterForm from "~/components/ui/Heros/WithNewsletterForm";
import HerosCenterContent from "~/components/ui/Heros/CenterContent";
import HerosCenterContentWithNewsletter from "~/components/ui/Heros/CenterContentWithNewsletter";
import HerosImageWithNewsletter from "~/components/ui/Heros/ImageWithNewsletter";
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
import SectionsProductsWithSideLinks from "~/components/ui/Sections/ProductsWithSideLinks";
import SectionsOurTeam from "~/components/ui/Sections/OurTeam";
import SectionsParagraphWithImage from "~/components/ui/Sections/ParagraphWithImage";
// Tabs
import TabsLine from "~/components/ui//Tabs/Line";
import TabsLineWithIcons from "~/components/ui//Tabs/LineWithIcons";
import TabsEndClosed from "~/components/ui/Tabs/EndClosed";
import TabsEndClosedWithIcons from "~/components/ui/Tabs/EndClosedWithIcons";
// Pricing
import PricingSimple from "~/components/ui/Pricing/Simple";
import PricingPopular from "~/components/ui//Pricing/Popular";
import PricingWithNavigation from "~/components/ui//Pricing/WithNavigation";
// paginations
import PaginationSimple from "~/components/ui/Pagination/Simple";
// Footers
import FootersSimple from "~/components/ui/Footers/Simple";
import FootersWithCta from "~/components/ui/Footers/WithCta";
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
        AuthenticationLoginWithSocialMediaLinks,
        AuthenticationLoginWithSideImage,
        BreadcrumbsSimple,
        BreadcrumbsWithArrow,
        BreadcrumbsWithIcons,
        BreadcrumbsFullWidth,
        BreadcrumbsFullWidthWithIcons,
        ButtonsPrimary,
        ButtonsWithIcon,
        ButtonsWithMenu,
        ButtonsGroup,
        ButtonsGroupWithIcons,
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
        DropdownsMultiLevel,
        DropdownsMultiLevelWithIcons,
        DropdownsUserInfo,
        DropdownsUserInfoWithIcons,
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
        NavbarsWithSocialMediaLinks,
        NavbarsWithCategories,
        HerosECommerce,
        HerosWithNewsletterForm,
        HerosCenterContent,
        HerosCenterContentWithNewsletter,
        HerosImageWithNewsletter,
        HerosWithSlide,
        HerosWithImage,
        HerosWithSideImage,
        HerosWithBGImage,
        HerosWithPattern,
        SidebarWithAvatar,
        SidebarWithSearch,
        SectionsAboutMe,
        SectionsFeature,
        SectionsProductsWithSideLinks,
        SectionsOurTeam,
        SectionsParagraphWithImage,
        TabsLine,
        TabsLineWithIcons,
        TabsEndClosed,
        TabsEndClosedWithIcons,
        PricingSimple,
        PricingPopular,
        PricingWithNavigation,
        PaginationSimple,
        FootersSimple,
        FootersWithCta,
        FootersWithDetails,
        FootersWithLinks,
        FootersWithSubscribeForm,
    },

    data() {
        return {
            sidebarOpen: false,
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

    methods: {
        updateCategory(category) {
            this.activeCategory = category;
            this.sidebarOpen = false;
            document.getElementById('main').scrollTop = 0;
        }
    }
};
</script>
