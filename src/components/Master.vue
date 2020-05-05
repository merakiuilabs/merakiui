<template>
    <div class="min-h-screen container mx-auto px-6">

        <div class="container mx-auto px-6 py-16 text-center">
            <h1 class="text-2xl md:text-3xl text-gray-800">Discover new components. Build amazing things 🔥</h1>
            <input class="w-11/12 mt-6 px-6 py-4 bg-gray-200 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:bg-white placeholder-gray-700"
                   type="text" placeholder="search.." v-model="searchText">
        </div>

        <div class="flex">
            <div class="hidden md:w-64 md:block">
                <h2 class="text-gray-800 text-2xl font-semibold">Categories</h2>
                <ul class="flex flex-col mt-4">
                    <li class="text-gray-600 hover:text-gray-800 cursor-pointer text-lg">All Components</li>
                    <li class="text-gray-600 hover:text-gray-800 cursor-pointer text-lg">Alerts</li>
                    <li class="text-gray-600 hover:text-gray-800 cursor-pointer text-lg">Cards</li>
                    <li class="text-gray-600 hover:text-gray-800 cursor-pointer text-lg">Forms</li>
                    <li class="text-gray-600 hover:text-gray-800 cursor-pointer text-lg">Layouts</li>
                </ul>
            </div>
            <div class="w-full md:flex-1">
                <div class="container mx-auto px-6">
                    <div class="pb-8" v-for="category in list" :key="category.name">
                        <h1 class="text-2xl text-gray-800 font-semibold mb-6" v-text="category.name"></h1>
                        <component v-for="component in category.components" :key="component.name" :is="component.name"
                                   class="mt-8"></component>
                    </div>
                </div>
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