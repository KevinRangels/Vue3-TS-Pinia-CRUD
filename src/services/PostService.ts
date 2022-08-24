import Api from '@/api'
import type { AxiosResponse } from 'axios'
import type { Post, Posts } from '@/interfaces/PostInterface'


export const getPosts = async () => {
  try {
    const response: AxiosResponse<Posts> = await Api.get(`posts`)
    console.log('response', response.data)
    return response.data
  } catch (error) {
    throw new Error(`${error}`)
  }
}