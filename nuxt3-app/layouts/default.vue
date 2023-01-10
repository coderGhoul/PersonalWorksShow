<script setup lang="ts">
import AppHeader from '@/components/AppHeader/index.vue'
import AppFooter from '@/components/AppFooter/index.vue'
</script>

<template>
  <div class="layout flex flex-col">
    <AppHeader
      class="sticky top-0 z-20 hidden border-transparent lg:block backdrop-blur-md bg-white/75 dark:bg-black/75 shadow shadow-gray-200 dark:shadow-gray-900"
    />
    <slot></slot>
    <AppFooter />
  </div>
</template>

<style scoped></style>
