<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    class="motion-reduce:transition-none transition-colors duration-150 ease-in-out"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>
