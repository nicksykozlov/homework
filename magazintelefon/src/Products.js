import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchAll, infoCount
} from './store/productSlice'
import {url} from './api/products'
import './store/index.css';
import {ReactComponent as HertLogo} from "./heart-solid.svg"
import {ReactComponent as Basket} from "./basket.svg"




export default function Products(){

    const info = useSelector(infoCount) //сюда прилетает массив items из productSlice


    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(fetchAll())
   },[])

    return(
        <div >
            
           <ul>
            {info.map((item, index)=><li key={index}>
               
            <div className="card">
                <div className = "cardImg">
                    <img src={item.image} alt={index} className="card-img-top"/>
                    </div>
                    <h5 className = "card-title">{item.title}</h5>
                    <p>{item.brand}</p>
                    <span>{item.price} $</span>
                    <div className="stars" style={{"--rating": item.rating}} ></div>
                    <div className="button">
                    <button type="button" className="btn btn-secondary">Add To Card</button>
                    <HertLogo/>
                    <Basket/>

                    </div>

            </div>
                </li>)}
                
           </ul>
        
        </div>
    )
}