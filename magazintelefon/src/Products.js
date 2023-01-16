import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchAll, infoCount
} from './store/productSlice'
import {url} from './api/products'




export default function Products(){

    const info = useSelector(infoCount) //сюда прилетает массив items из productSlice


    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(fetchAll())
   },[])

    return(
        <div>
           <ul>
            {info.map((item, index)=><li key={index}>
                {item.title}
             
                    <img src={url + "img/" + item.images[0]} alt={index}/>

                </li>)}
           </ul>
        </div>
    )
}