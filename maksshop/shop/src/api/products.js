import axios from "axios";

const url = 'http://194.87.94.216/'

export default {
    getProducts: (payload) => axios.get(url + `api/products?page=${payload?.page}`),
    getProduct: (id) => axios.get(url + `api/products/${id}`),
    register: (payload) => axios.post(url + 'api/register', payload),
    login: (payload) => axios.post(url + 'api/login', payload), //name & email
    addToWishList: (payload) => axios.post(url + 'api/wishlist',{product: payload.data}, {headers: {Authorization: 'Bearer ' + payload.token}}),
    getWishList:(payload)=> axios.get(url + 'api/wishlist', {headers: {Authorization: 'Bearer ' + payload.token}})
}