<script lang="ts" setup>
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>

<template>
  <h1>404</h1>
  <p>No se encontró la ruta: {{ route.path }}</p>
</template>