<script setup lang="ts">
type Iprops = {
  title?: string
}

const props = withDefaults(defineProps<Iprops>(), {
  title: '',
})
</script>

<template>
  <div class="relative border-t u-bg-white u-border-gray-200 text-center">
    <div class="p-3">footer</div>
    <div
      class="fixed bottom-0 right-0 flex flex-col justify-end w-full z-[55] sm:w-96"
    ></div>
  </div>
</template>

<style scoped></style>
