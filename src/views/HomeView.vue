<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { usePostStore } from '@/stores/PostStore'
  import TTable from '@/components/ui/TTable.vue'

  const postStore = usePostStore()
  postStore.getPosts()

  const { posts } = storeToRefs(postStore)

</script>

<template>
  <h1>Posts</h1>
  <TTable
    v-if="posts"
    :posts="posts"
  />
</template>