<template>
  <div class="font-inter" id="app">
    <Header></Header>
    <master-component></master-component>
  </div>
</template>

<script>
import Header from "./views/Header";
import MasterComponent from "./components/Master";

export default {
  components: {
    Header , MasterComponent
  }
}
</script>

<style src="./assets/css/tailwind.css"></style>
