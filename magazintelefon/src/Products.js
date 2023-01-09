import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchAll, infoCount
} from './store/productSlice'




export default function Products(){

    const info = useSelector(infoCount)
    console.log(info);

    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(fetchAll())
   },[])

    return(
        <div>
           <ul>
            {info.map((item)=><li key={item.id}>
                {item.title}
                {/* {item.images} */}

                </li>)}
           </ul>
        </div>
    )
}