import Rating from "./rating";
import {NavLink} from "react-router-dom";
import { Link } from "react-router-dom";
export default function Card({product}){

   
    return (
        <div className="card product-card">
             <Link to='/'>Back</Link>
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
                    <Link to='/products/wishlist'>
                        
                    <i className="bi bi-heart"></i></Link>
                </div>
            </div>
        </div>
    )
}