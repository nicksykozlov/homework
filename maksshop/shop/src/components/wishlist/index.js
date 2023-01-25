import {useEffect, useState} from "react";
import api from '../../api/products';

export default function WishList(){
    const [products, setProduct] = useState([])
    useEffect(()=>{
        api.getWishList({token: localStorage.getItem('token')})
            .then((res) => {
                setProduct(res.data.data)
            })
    })
    return (
        <ul>
            {products.map(product => <li key={product.id}>{product.id} - {product.title}</li>)}
        </ul>
    )
}