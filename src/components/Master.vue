<template>
    <div class="min-h-screen container mx-auto px-6">
        <div class="py-16 text-center">
            <h1 class="text-xl md:text-2xl text-gray-800 font-medium">Discover new components. Build amazing things 🔥</h1>
            <div class="max-w-2xl mx-auto">
                <div>
                    <input class="w-full bg-white mt-6 px-6 py-4 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 placeholder-gray-700" type="text" placeholder="Search.." v-model="searchText">
                </div>
                <div class="flex items-center mt-5 flex justify-start">
                    <span class="text-gray-700">Categories : </span>
                    <a @click="searchText = ''" class="ml-1 text-gray-700 hover:text-gray-600 cursor-pointer font-light hover:underline">all</a>
                    <span v-for="category in categories" :key="category.name">
                        <a @click="searchText = category.name" class="ml-2 text-gray-700 hover:text-gray-600 cursor-pointer font-light hover:underline">{{ category.name }}</a>
                    </span>
                </div>
            </div>
        </div>

        <div class="w-full max-w-5xl mx-auto">
            <div class="mb-16" v-for="category in list" :key="category.name">
                <h1 class="text-2xl text-gray-800 font-semibold mb-6 capitalize" v-text="category.name"></h1>
                <component v-for="component in category.components" :key="component.name" :is="component.name" class="mb-10"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import NotificationPop from "./UI/Alert/NotificationPop";
    import UserDetails from "./UI/Cards/UserDetails";
    import Testimonial from "./UI/Cards/Testimonial";
    import Article from "./UI/Cards/Article";
    import Product from "./UI/Cards/Product";
    import ProductEvaluation from "./UI/Cards/ProductWithEvaluation";
    import Login from "./UI/Forms/Login";
    import Subscribe from "./UI/Forms/Subscribe";
    import componentList from "./../components";

    export default {
        components: {
            NotificationPop,
            UserDetails,
            Testimonial,
            Article,
            Product,
            ProductEvaluation,
            Login,
            Subscribe
        },
        data() {
            return {
                categories: componentList,
                searchText: '',
            }
        },
        computed: {
            list() {

                if (this.searchText.length === 0) return componentList;

                return this.search(this.searchText);
            },
        },

        methods: {
            search(string) {
                let pattern = new RegExp(`^${string}`, 'i');

                return this.categories.filter(category => category.name.match(pattern));
            }
        },
    }
</script>