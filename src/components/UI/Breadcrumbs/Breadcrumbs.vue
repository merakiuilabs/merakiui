<template>
  <div class="flex bg-gray-200 rounded">
    <div :id="name | toId">
      <ol class="flex">
        <li class="mx-1 px-1 py-2">
          <a href="#" class="flex items-center font-bold">
            <span class="mx-1">Home</span>
          </a>
        </li>

        <li>
          <span class="flex py-2">/</span>
        </li>

        <li class="mx-1 px-1 py-2">
          <a href="#" class="flex items-center font-bold">
            <span class="mx-1">Users</span>
          </a>
        </li>

        <li>
          <span class="flex py-2">/</span>
        </li>
        <li class="mx-1 px-1 py-2 text-gray-500 font-bold">
          <a href="#" class="flex items-center font-bold cursor-not-allowed">
            <span class="mx-1">Edit</span>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Breadcrumbs"
    };
  }
};
</script>