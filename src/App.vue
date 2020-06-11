<template>
    <div class="bg-white font-roboto" id="app">
        <Header></Header>

        <div class="container mx-auto px-6" id="main">
            <div class="py-16 text-center">
                <h1 class="text-xl md:text-3xl text-gray-800 font-medium">Discover new components. Build amazing things 🔥</h1>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header";

export default {
    components: {
        Header
    },
    
    mounted() {
        this.$ga.page('/');
    }
}
</script>

<style src="./assets/css/app.css"></style>
