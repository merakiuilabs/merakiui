<template>
    <div class="container mx-auto px-6 pb-12">
        <div class="py-16 text-center">
            <h1 class="text-xl md:text-3xl text-gray-800 font-medium">Discover new components. Build amazing things
                🔥</h1>
            <div class="max-w-2xl mx-auto">
                <div>
                    <input class="w-full bg-white mt-6 px-6 py-4 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 placeholder-gray-700"
                           type="text" placeholder="Search.." v-model="searchText">
                </div>
                <div class="flex flex-col md:flex-row items-center justify-start mt-5 ">
                    <span class="text-gray-700">Categories : </span>
                    <div class="mt-2 md:mt-0">
                        <button @click="searchText = ''"
                                class="ml-1 px-3 py-1 cursor-pointer hover:bg-gray-700 hover:text-gray-200 rounded text-sm focus:outline-none"
                                :class="searchText.length === 0 ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'">
                            all
                        </button>
                        <span v-for="category in categories" :key="category.name">
                            <button @click="searchText = category.name"
                                    class="ml-2 px-3 py-1 cursor-pointer hover:bg-gray-700 hover:text-gray-200 rounded text-sm focus:outline-none"
                                    :class="category.name === searchText? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'">{{ category.name }}</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full max-w-5xl mx-auto">
            <div class="mb-16" v-for="category in list" :key="category.name">
                <h1 class="text-2xl text-gray-800 font-semibold mb-6 capitalize" v-text="category.name"></h1>
                <view-component v-for="component in category.components" :key="component.name" :name="component.name" class="mt-6">
                    <div slot="component">
                        <component :is="component.name | toId" class="mb-10"></component>
                    </div>
                </view-component>
            </div>
        </div>
    </div>
</template>

<script>
    import NotificationPop from "./UI/Alert/NotificationPop";
    import Alert from "./UI/Alert/Alert";
    import UserDetails from "./UI/Cards/UserDetails";
    import Testimonial from "./UI/Cards/Testimonial";
    import ArticleCard from "./UI/Cards/ArticleCard";
    import Product from "./UI/Cards/Product";
    import ProductEvaluation from "./UI/Cards/ProductWithEvaluation";
    import Login from "./UI/Forms/Login";
    import Subscribe from "./UI/Forms/Subscribe";
    import Component from "../Models/Component";
    import ViewComponent from "./Utilities/ViewComponent";

    export default {
        components: {
            NotificationPop,
            Alert,
            UserDetails,
            Testimonial,
            ArticleCard,
            Product,
            ProductEvaluation,
            Login,
            Subscribe,
            ViewComponent
        },
        data() {
            return {
                categories: [],
                searchText: '',
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