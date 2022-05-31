<template>
  <div class="container px-4 custom">
    <div>{{ title }}</div>
    <div>
      {{ store.count }}
    </div>
    <div>
      {{ store.countToString }}
    </div>
    <button
      class="bg-slate-300 border-2 border-cyan-200 rounded-sm"
      @click="store.increment">
      Click me
    </button>
  </div>
</template>

<script lang="ts">
  import { useMainStore } from '~~/stores/main'

  export default defineComponent({
    setup() {
      const title = 'Hello World'
      const store = useMainStore()

      return {
        title,
        store,
      }
    },
  })
</script>

<style lang="scss"></style>
