<template>
<div class="relative">
    <div class="flex flex-col bg-white xl:h-screen xl:overflow-hidden">
        <div class="flex overflow-hidden">
            <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed inset-0 z-50 transition-opacity bg-black opacity-50 xl:hidden"></div>
            
            <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed inset-y-0 left-0 z-50 flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto transition duration-200 transform bg-white border-gray-200 shadow-lg xl:translate-x-0 xl:static xl:inset-0">
                <a href="/" class="inline-flex items-center text-xl font-bold text-gray-700 transition-colors duration-200 transform md:text-2xl hover:text-blue-500">
                    <img class="mr-2 w-7 h-7" src="../assets/svg/logo-sidebar.svg" alt="logo"> Meraki <span class="text-blue-500">UI</span>
                </a>
                
                <nav class="mt-6">
                    <div
                        v-for="category in categories"
                        :key="category.name"
                        class="flex items-center justify-between px-4 py-2 mt-1 rounded-md focus:outline-none"
                        :class="
                                category.name === activeCategory
                                    ? 'text-blue-500 bg-blue-50'
                                    : 'text-gray-500 hover:text-blue-500 transition-colors duration-200 transform'"
                    >
                        <app-button @click="updateCategory(category.name)" class="w-full text-left hover:underline">
                            {{ category.name }}
                        </app-button>

                        <span v-if="category.new" class="px-2 text-sm text-white bg-sky-300 rounded-xl">New</span>
                    </div>

                </nav>
            </div>

            <main id="main" class="flex flex-col flex-1 overflow-x-hidden lg:overflow-y-auto">
                <div class="container px-4 mx-auto sm:px-6 ">
                    <div class="py-8 text-center md:py-16">
                        <a href="/" class="inline-flex items-center text-xl font-bold text-gray-700 transition-colors duration-200 transform xl:hidden md:text-2xl hover:text-blue-500">
                            <img class="w-8 h-8 mr-2" src="../assets/svg/logo-sidebar.svg" alt="logo"> Meraki <span class="text-blue-500">UI</span>
                        </a>
                        
                        <h1
                            class="mt-2 text-xl font-medium text-gray-700 sm:flex sm:items-center sm:justify-center lg:text-3xl"
                        >
                            <span>Discover new components. Build amazing things. </span> &nbsp;
                            
                            <svg class="hidden w-8 h-8 text-blue-500 fill-current sm:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9837 21.9999C6.47237 21.9938 2.00605 17.5203 2 11.9999C2.39311 12.1112 2.79955 12.168 3.20803 12.1689C4.55933 12.1789 5.82888 11.5217 6.6025 10.412C7.29413 9.41154 7.44027 8.13091 6.99186 6.99997C7.27858 7.05119 7.5692 7.07729 7.86045 7.07797C9.1552 7.08764 10.3841 6.50698 11.2 5.49998C11.9984 4.52274 12.3106 3.2352 12.0486 2C17.5625 2.01795 22.0178 6.50963 21.9999 12.0324C21.982 17.5553 17.4976 22.0178 11.9837 21.9999ZM12.7455 18.5679C12.8991 18.634 13.0645 18.6681 13.2317 18.6679C13.7362 18.6674 14.1909 18.363 14.3842 17.8961C14.5775 17.4293 14.4714 16.8919 14.1152 16.5339C13.8805 16.2998 13.5629 16.1683 13.2317 16.1679C12.6392 16.1693 12.1294 16.5877 12.0115 17.1693C11.8937 17.7509 12.2004 18.3353 12.7455 18.5679ZM6.91199 16.8749C7.11205 16.9578 7.32647 17.0003 7.54296 16.9999C8.21842 16.9997 8.82678 16.5907 9.08272 15.9646C9.33866 15.3385 9.19143 14.6195 8.71006 14.1449C8.3989 13.838 7.97969 13.6659 7.54296 13.6659C6.62442 13.667 5.88022 14.4129 5.87967 15.3329C5.87984 16.0017 6.2781 16.606 6.89202 16.8689H6.89702H6.908L6.91199 16.8749ZM16.3276 14.3679C16.9987 14.6502 17.775 14.4627 18.2439 13.9051C18.7127 13.3475 18.7652 12.5493 18.3733 11.9349C18.2506 11.7436 18.0902 11.5793 17.9021 11.4519C17.3853 11.1024 16.7167 11.0716 16.17 11.3721C15.6233 11.6726 15.2902 12.254 15.307 12.8784C15.3238 13.5028 15.6877 14.0654 16.2498 14.3359H16.2378L16.2677 14.3489L16.2877 14.3569H16.2817C16.296 14.3615 16.31 14.3669 16.3236 14.3729L16.3276 14.3679ZM11.9837 10.333C11.5855 10.3323 11.2426 10.6141 11.1655 11.0054C11.0883 11.3967 11.2986 11.7879 11.6672 11.9389C12.0357 12.0899 12.4594 11.9583 12.6782 11.625C12.8969 11.2917 12.8493 10.8499 12.5648 10.571C12.4906 10.4978 12.4032 10.4394 12.3072 10.399L12.2892 10.391L12.2623 10.381C12.1729 10.349 12.0786 10.3328 11.9837 10.333ZM15.7276 6.16697C15.0888 6.16539 14.5526 6.64873 14.4871 7.28522C14.4216 7.92172 14.8481 8.50444 15.4738 8.63339C16.0995 8.76235 16.7211 8.39562 16.9118 7.78494C17.1025 7.17425 16.8004 6.51814 16.2128 6.26698H16.2028C16.0525 6.20267 15.8911 6.16869 15.7276 6.16697ZM4.49593 9.49996C4.03663 9.49996 3.66429 9.12701 3.66429 8.66696C3.66429 8.20691 4.03663 7.83397 4.49593 7.83397C4.95523 7.83397 5.32757 8.20691 5.32757 8.66696C5.32702 9.12679 4.95501 9.49941 4.49593 9.49996ZM3.24797 6.99997C2.55873 6.99997 2 6.44033 2 5.74998C2 5.05963 2.55873 4.49999 3.24797 4.49999C3.9372 4.49999 4.49593 5.05963 4.49593 5.74998C4.49483 6.43988 3.93674 6.99887 3.24797 6.99997ZM8.23983 5.33298C7.55059 5.33298 6.99186 4.77334 6.99186 4.08299C6.99186 3.39264 7.55059 2.833 8.23983 2.833C8.92906 2.833 9.48779 3.39264 9.48779 4.08299C9.48779 4.7735 8.92922 5.33343 8.23983 5.33398V5.33298ZM5.32857 3.66699C4.8694 3.66699 4.49711 3.29425 4.49693 2.83433C4.49675 2.37441 4.86873 2.00137 5.32791 2.001C5.78708 2.00063 6.15967 2.37308 6.16022 2.833C6.16022 3.29321 5.78804 3.66644 5.32857 3.66699Z"></path>
                            </svg>

                        </h1>
                    </div>

                    <section class="flex justify-center mb-16">
                        <div class="group">
                            <a target="_blank" href="https://tailgrids.com/?ref=merakiui" class="relative flex items-center max-w-sm p-2 space-x-4 overflow-hidden transition-colors duration-700 transform border border-gray-100 rounded-md group-hover:bg-blue-500">
                                <img class="h-20 rounded-md" src="https://cdn.tailgrids.com/meraki-tg.svg" alt="">
                                <h4 class="text-gray-600 group-hover:text-white">Tailwind CSS Components & Templates for Startup and SaaS and Business Sites</h4>
                                <span class="absolute bottom-0 right-0 px-2 py-1 text-xs text-white bg-blue-500 rounded-tl-md">ADS</span>
                            </a>
                        </div>
                    </section>

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

                    <div class="flex flex-col items-center py-6 sm:flex-row sm:justify-between">
                        <p class="text-gray-500 uppercase">© Copyright {{ new Date().getFullYear() }} by <a href="https://github.com/merakiui" target="_blank" class="font-medium text-gray-700 underline decoration-blue-500">Meraki UI</a></p>
                        
                        <div class="flex items-center mt-3 space-x-3 sm:mt-0 sm:space-x-6">
                            <a target="_blank" :href="SHARE_LINK" class="flex items-center space-x-3 text-sm text-gray-700 cursor-pointer hover:decoration-blue-500 hover:underline">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z" fill="currentColor"></path>
                                </svg>

                                <span>Share on TWITTER</span>
                            </a>

                            <a class="flex items-center space-x-3 text-sm text-gray-700 hover:underline hover:decoration-blue-500" href="https://github.com/merakiui/merakiui" target="_blink">
                                <svg class="w-5 h-5 fill-current sm:w-6 sm:h-6" viewBox="0 0 30 30">
                                    <path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z"/>
                                </svg>

                                <span>Code on GITHUB</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <button @click="sidebarOpen = !sidebarOpen" type="button" class="fixed z-50 flex items-center justify-center p-3 text-white bg-gray-900 rounded-full focus:outline-none xl:hidden bottom-24 right-8">
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
import AuthenticationFullPageWithImage from "~/components/ui/Authentication/FullPageWithImage";
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
// CTA
import CTACentered from "~/components/ui/CTA/Centered";
import CTAGrid from "~/components/ui/CTA/Grid";
import CTASimple from "~/components/ui/CTA/Simple";
import CTAWithForm from "~/components/ui/CTA/WithForm";
import CTAWithImage from "~/components/ui/CTA/WithImage";
// Dropdowns
import DropdownsSimple from "~/components/ui/Dropdowns/Simple";
import DropdownsMultiLevel from "~/components/ui/Dropdowns/MultiLevel";
import DropdownsMultiLevelWithIcons from "~/components/ui/Dropdowns/MultiLevelWithIcons";
import DropdownsUserInfo from "~/components/ui/Dropdowns/UserInfo";
import DropdownsUserInfoWithIcons from "~/components/ui/Dropdowns/UserInfoWithIcons";
import DropdownsNotification from "~/components/ui/Dropdowns/Notification";
// FAQ
import FAQCards from "~/components/ui/FAQ/Cards";
import FAQCentered from "~/components/ui/FAQ/Centered";
import FAQCollapse from "~/components/ui/FAQ/Collapse";
import FAQCollapseWithSideLinks from "~/components/ui/FAQ/CollapseWithSideLinks";
import FAQGrid from "~/components/ui/FAQ/Grid";
// Forms
import FormsNewsletter from "~/components/ui/Forms/Newsletter";
import FormsSimpleNewsletter from "~/components/ui/Forms/SimpleNewsletter";
import FormsSimple from "~/components/ui/Forms/Simple";
import FormsSearch from "~/components/ui/Forms/Search";
import FormsContact from "~/components/ui/Forms/Contact";
// Features
import FeaturesSimple from "~/components/ui/Features/Simple";
import FeaturesCards from "~/components/ui/Features/Cards";
import FeaturesCentered from "~/components/ui/Features/Centered";
import FeaturesMedia from "~/components/ui/Features/Media";
import FeaturesGridList from "~/components/ui/Features/GridList";
import FeaturesGridListWithImage from "~/components/ui/Features/GridListWithImage";
import FeaturesTrustedBy from "~/components/ui/Features/TrustedBy";
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
import SectionsProductsWithSideLinks from "~/components/ui/Sections/ProductsWithSideLinks";
import SectionsParagraphWithImage from "~/components/ui/Sections/ParagraphWithImage";
// Tabs
import TabsLine from "~/components/ui//Tabs/Line";
import TabsLineWithIcons from "~/components/ui//Tabs/LineWithIcons";
import TabsEndClosed from "~/components/ui/Tabs/EndClosed";
import TabsEndClosedWithIcons from "~/components/ui/Tabs/EndClosedWithIcons";
// Teams
import TeamsSimple from "~/components/ui//Teams/Simple";
import TeamsBackground from "~/components/ui//Teams/Background";
import TeamsCards from "~/components/ui//Teams/Cards";
import TeamsCards2x2 from "~/components/ui/Teams/Cards2x2";
import TeamsGridList from "~/components/ui/Teams/GridList";
import TeamsSideBySide from "~/components/ui/Teams/SideBySide";
import TeamsWithFilter from "~/components/ui/Teams/WithFilter";
// Pricing
import PricingSimple from "~/components/ui/Pricing/Simple";
import PricingPopular from "~/components/ui//Pricing/Popular";
import PricingWithNavigation from "~/components/ui/Pricing/WithNavigation";
import PricingSideBySide from "~/components/ui/Pricing/SideBySide";
import PricingCheckbox from "~/components/ui/Pricing/Checkbox";
import PricingCheckboxWithDetails from "~/components/ui/Pricing/CheckboxWithDetails";
import PricingCentered from "~/components/ui/Pricing/Centered";
// paginations
import PaginationSimple from "~/components/ui/Pagination/Simple";
import PaginationWithIcons from "~/components/ui/Pagination/WithIcons";
import PaginationWithArrows from "~/components/ui/Pagination/WithArrows";
import PaginationTable from "~/components/ui/Pagination/Table";
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
        AuthenticationFullPageWithImage,
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
        CTACentered,
        CTAGrid,
        CTASimple,
        CTAWithForm,
        CTAWithImage,
        DropdownsSimple,
        DropdownsMultiLevel,
        DropdownsMultiLevelWithIcons,
        DropdownsUserInfo,
        DropdownsUserInfoWithIcons,
        DropdownsNotification,
        FAQCards,
        FAQCentered,
        FAQCollapse,
        FAQCollapseWithSideLinks,
        FAQGrid,
        FormsNewsletter,
        FormsSimpleNewsletter,
        FormsSimple,
        FormsSearch,
        FormsContact,
        FeaturesSimple,
        FeaturesCards,
        FeaturesCentered,
        FeaturesMedia,
        FeaturesGridList,
        FeaturesGridListWithImage,
        FeaturesTrustedBy,
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
        SectionsProductsWithSideLinks,
        SectionsParagraphWithImage,
        TabsLine,
        TabsLineWithIcons,
        TabsEndClosed,
        TabsEndClosedWithIcons,
        TeamsSimple,
        TeamsBackground,
        TeamsCards,
        TeamsCards2x2,
        TeamsGridList,
        TeamsSideBySide,
        TeamsWithFilter,
        PricingSimple,
        PricingPopular,
        PricingWithNavigation,
        PricingSideBySide,
        PricingCheckbox,
        PricingCheckboxWithDetails,
        PricingCentered,
        PaginationSimple,
        PaginationWithIcons,
        PaginationWithArrows,
        PaginationTable,
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
            SHARE_LINK: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            'Beautiful Tailwind CSS components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant Dark Mode 🔥. Built By @khatabwedaa & @miaababikir. \n #tailwindcss #100DaysOfCode \n'
            )}&url=${encodeURIComponent('https://merakiui.com')}`
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
            window.scrollTo(0,0)
        }
    }
};
</script>
