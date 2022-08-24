<script setup lang="ts">
  import type { Posts } from '@/interfaces/PostInterface'
  import TTableItem from '@/components/ui/TTableItem.vue'

  const props = defineProps<{
    posts: Array<Posts>,
  }>()

</script>
<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Title
        </th>
        <th scope="col">
          Body
        </th>
        <th scope="col">
          Options
        </th>
      </tr>
    </thead>
    <tbody>
      <TTableItem
        v-for="{id, title, body} in posts"
        :id="id"
        :key="id"
        :title="title"
        :body="body"
      />
    </tbody>
  </table>
</template>


<style scoped>

</style>