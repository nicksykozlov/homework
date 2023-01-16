import axios from 'axios' // онсновной api запрос. его передадим в productSlice
export const url = 'http://localhost:3001/'
export default {
    getProducts: ()=> axios.get(url+'products')
}