import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Product(){
    const {id} = useParams('id')

    const [product, setProduct] = useState()
    
    useEffect(()=>{
        (async()=>{
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const json = await response.json()
            setProduct(json)
        })()
    },[id, setProduct])
    
    
    return(
       <>
       <Link to='/'>Back</Link>
       {product &&
       <div>
       <h1>{product.title}</h1>
       <button>Добавить в карзину</button>
       </div>
       }
       </>
    )
}