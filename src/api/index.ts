import axios from 'axios'

const baseUrl = `https://jsonplaceholder.typicode.com/` // usar como variable de entorno, no directo en el archivo, esto sólo es un ejemplo

const Api = axios.create({
  baseURL: baseUrl
})

export default Api