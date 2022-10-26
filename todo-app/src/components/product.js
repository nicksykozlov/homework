import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {  useDispatch } from 'react-redux';


export default function Product(){
    const {id} = useParams('id')

    const dispatch = useDispatch()

    const [product, setProduct] = useState()
    
    useEffect(()=>{
        (async()=>{
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const json = await response.json()
            setProduct(json)
        })()
    },[id, setProduct])
    
    function addItemsTocard(){
        dispatch(add(product.id))

    }
    
    return(
       <>
       <Link to='/'>Back</Link>
       {product &&//логическое и  true только в случае, если все операнды содержат значение true
       <div>
        
       <h1>{product.title}</h1>

       <button onClick={addItemsTocard}>Добавить в корзину</button>
     
       </div>
       }
       </>
    )
}