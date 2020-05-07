<template>
    <div class="min-h-screen bg-gray-100 font-roboto" id="app">
        <Header></Header>
        <master-component></master-component>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import MasterComponent from "./components/Master";

    export default {
        components: {
            Header, MasterComponent
        },
        mounted() {
            this.$ga.page('/');
        }
    }
</script>

<style src="./assets/css/app.css"></style>
