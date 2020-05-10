<template>
    <div class="min-h-screen bg-gray-100 font-roboto" id="app">
        <Header></Header>
        <main-component></main-component>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import MainComponent from "./components/Main";

    export default {
        components: {
            Header, MainComponent
        },
        mounted() {
            this.$ga.page('/');
        }
    }
</script>

<style src="./assets/css/app.css"></style>
