import { defineStore } from 'pinia'
import * as postService from '@/services/PostService'
import type { Post, Posts } from '@/interfaces/PostInterface'

interface State {
  posts: Posts | null,
  post: Post | null
}

export const usePostStore = defineStore({
  id: 'post',
  
  state: (): State => ({
    posts: null,
    post: null
  }),
  
  getters: {
      
  },
  
  actions: {
  
    getPosts() {
      this.posts = null
      postService.getPosts()
        .then(posts => {
          this.posts = posts
        })
    }
  }
})