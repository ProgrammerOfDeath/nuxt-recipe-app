<template>
  <div class="container px-4 custom">{{ title }}</div>
</template>

<script lang="ts">
  export default defineComponent({
    setup() {
      const title = 'Hello World'

      return {
        title,
      }
    },
  })
</script>

<style lang="scss"></style>
