import axios from 'axios' // онсновной api запрос. его передадим в productSlice
export const url = 'http://194.87.94.216/'
export default {
    getProducts: ()=> axios.get(url+'api/products')
}