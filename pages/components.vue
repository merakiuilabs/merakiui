<template>
<div class="relative font-roboto">

    
    <div class="flex bg-white xl:h-screen">
        <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 xl:hidden"></div>
        
        <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed inset-y-0 left-0 z-30 flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto transition duration-300 transform bg-white border-r border-gray-200 xl:translate-x-0 xl:static xl:inset-0">
            <a href="/" class="inline-flex items-center text-xl font-bold text-gray-700 md:text-2xl hover:text-blue-500">
                <img class="mr-2 w-7 h-7" src="../assets/svg/logo-sidebar.svg" alt="logo"> <span class="hidden md:inline">Meraki <span class="text-blue-500">UI</span></span>
            </a>
            
            <nav class="mt-6 overflow-y-auto">
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

        <div class="flex flex-col flex-1 overflow-hidden">
            <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
            <div class="lg:flex lg:items-center">
                <div class="flex items-center justify-between">
                    <div>
                        <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex lg:hidden">
                        <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                    <a href="#" class="mt-2 lg:mt-0 lg:mx-4 hover:text-gray-800 dark:hover:text-gray-200">features</a>
                    <a href="#" class="mt-2 lg:mt-0 lg:mx-4 hover:text-gray-800 dark:hover:text-gray-200">downloads</a>
                    <a href="#" class="mt-2 lg:mt-0 lg:mx-4 hover:text-gray-800 dark:hover:text-gray-200">docs</a>
                    <a href="#" class="mt-2 lg:mt-0 lg:mx-4 hover:text-gray-800 dark:hover:text-gray-200">support</a>
                    <a href="#" class="mt-2 lg:mt-0 lg:mx-4 hover:text-gray-800 dark:hover:text-gray-200">blog</a>

                    <div class="relative mt-4 lg:mt-0 lg:mx-4">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="w-4 h-4 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>

                        <input type="text" class="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600" placeholder="Search">
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                        </path>
                    </svg>
                </a>

                <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                    aria-label="Facebook">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                        </path>
                    </svg>
                </a>

                <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </nav>
            <main class="flex-1 lg:overflow-y-auto">
                <div class="container px-4 mx-auto">
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
        }
    }
};
</script>
