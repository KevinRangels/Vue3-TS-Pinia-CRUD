<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import TNavbar from '@/components/ui/TNavbar.vue'
</script>

<template>
  <TNavbar />
  <div class="container">
    <RouterView />
  </div>
</template>