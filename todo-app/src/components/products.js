import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {selectProducts, fetchProducts, statusProduct} from "../store/productStore"
import Spiner from "./spiner"
import { Link } from "react-router-dom";

export default function Products (){
    
const dispatch = useDispatch()
const products = useSelector(selectProducts)
const status = useSelector(statusProduct)


useEffect(()=>{
    if(status==='idle'){
        dispatch(fetchProducts())
    }
    

},[dispatch])

    return(<>
    {status === 'loading' ? <Spiner/> : ''}
    {products.map(product=> <article key={product.id} >
     <Link to ={`/products/${product.id}`}>{product.title}</Link> 
     <button>Добавить в карзину</button>  
    </article>)}
    
    </>)

}