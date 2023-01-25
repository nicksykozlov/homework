import Rating from "./rating";
import {NavLink} from "react-router-dom";
import api from '../../api/products';
import {useState} from "react";
export default function Card({product}){
    const [loading, setLoading] = useState(false);
    function addToWishList(id){
        setLoading(true)
        api.addToWishList({data:id, token:localStorage.getItem('token')})
            .then((res)=>{
                console.log(res.data);
            })
            .catch()
            .finally(()=>{
                setLoading(false)
            })
    }
    return (
        <div className="card product-card">
            <div className="image-wrap">
                <img src={product.image} alt=""/>
            </div>
            <div className="info-wrap">
                <NavLink to={`/products/${product.id}`}>{product.title} {product.screen_size}" RAM {product.ram} {product.hsard}GB</NavLink>
                <Rating value={product.rating} />
            </div>
            <div className="bottom-wrap">
                <span className='price'>$ {product.price}</span>
                <div className="buttons-container">
                    <i className="bi bi-cart"></i>
                    {loading ? <i className="bi bi-arrow-repeat"></i> : <i onClick={()=>addToWishList(product.id)} className="bi bi-heart"></i>}
                </div>
            </div>
        </div>
    )
}