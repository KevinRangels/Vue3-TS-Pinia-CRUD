<script setup lang="ts">
  const props = defineProps<{
    id: number,
    title: string,
    body: string,
  }>()
</script>
<template>
  <tr>
    <th scope="row">
      {{ props.id }}
    </th>
    <td>{{ props.title }}</td>
    <td>{{ props.body }}</td>
    <td>@mdo</td>
  </tr>
</template>


<style scoped>

</style>