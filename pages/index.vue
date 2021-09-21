<template>
<div class="font-roboto">
    <header-component>
        <div class="container px-4 py-8 mx-auto lg:py-0">
            <div class="lg:flex">
                <div class="flex items-center w-full lg:w-1/2 lg:h-164">
                    <div class="max-w-xl text-white">
                        <div class="text-xs font-light">Simple UI Starter</div>

                        <h1 class="mt-3 text-2xl font-semibold text-white lg:text-3xl">Meraki <span class="text-blue-400">UI </span> Components</h1>

                        <p class="mt-3 text-gray-300 lg:text-lg">
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

                <div class="hidden w-full mt-6 md:flex md:items-center md:justify-center lg:w-1/2 lg:mt-0">
                    <div class="w-full animate-float">
                        <img src="../assets/images/header-img.png" alt="moon">
                    </div>
                </div>
            </div>
        </div>
    </header-component>

    <div class="flex h-screen bg-white font-roboto">
        <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r border-gray-200">
            <a href="/" class="inline-flex items-center text-xl font-bold text-gray-700 md:text-2xl hover:text-blue-500">
                <img class="mr-2 w-7 h-7" src="../assets/svg/logo-sidebar.svg" alt="logo"> <span class="hidden md:inline">Meraki <span class="text-blue-500">UI</span></span>
            </a>
            
            <nav class="mt-6 overflow-y-auto">
                <div
                    v-for="category in categories"
                    :key="category.name"
                >
                    <app-button
                        @click="activeCategory = category.name"
                        class="block px-4 py-2 mt-2 font-medium rounded-md focus:outline-none"
                        :class="
                            category.name === activeCategory
                                ? 'text-blue-500 bg-blue-50'
                                : 'text-gray-500 hover:text-blue-500 hover:underline'"
                        >
                        {{ category.name }}
                    </app-button>
                </div>

            </nav>
        </div>

        <div class="flex flex-col flex-1 overflow-hidden">
            <main class="flex-1 overflow-x-hidden overflow-y-auto">
                <div class="container px-4 mx-auto">
                    <div class="py-16 text-center">
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
                        <p class="flex items-center justify-center text-sm text-gray-500 sm:text-base">
                            Build with 
                            <svg class="w-5 h-5 mx-1 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 8.40001C1.99975 6.95035 2.58239 5.56146 3.61681 4.54584C4.65124 3.53022 6.05058 2.97317 7.5 3.00001C9.21732 2.99089 10.856 3.71919 12 5.00001C13.144 3.71919 14.7827 2.99089 16.5 3.00001C17.9494 2.97317 19.3488 3.53022 20.3832 4.54584C21.4176 5.56146 22.0002 6.95035 22 8.40001C22 13.756 15.621 17.8 12 21C8.387 17.773 2 13.76 2 8.40001Z" fill="currentColor"></path>
                            </svg> BY &nbsp;
                            <a href="https://twitter.com/khatabwedaa" target="_blank" class="text-blue-500 hover:underline">Khatab Wedaa</a> 
                            &nbsp; & &nbsp;
                            <a href="https://twitter.com/miaababikir" target="_blank" class="text-blue-500 hover:underline">Mosab Ibrahim</a>
                        </p>
                    </div>
                </div>
            </main>
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
import AuthenticationLoginWithSocialMediaLinks from "~/components/ui/Authentication/LoginWithSocialMediaLinks";
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
        AuthenticationLoginWithSocialMediaLinks,
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
            components_count: 64,
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
